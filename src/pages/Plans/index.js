import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";
import styles from "./styles.module.scss";
import { loadStripe } from "@stripe/stripe-js";

function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('products').where('active', '==', true).get().then(querySnapshot => {
      const products = {};
      querySnapshot.forEach(async productDoc => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await productDoc.ref.collection('prices').get();
        priceSnap.docs.forEach(price => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data()
          }
        });
      });
      setProducts(products);
    });
  }, []);

  console.log(products);

  const loadCheckout = async (priceId) => {
    const docRef = await db.collection('customers').doc(user.uid).collection('checkout_sections').add({
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          `pk_test_51JWbwtGGSwyCl5Rn5eudGiMmm8OXr5PqMtWjjAhoF8m5hYPbEK0OdIFyfbknfmFamH1TPY4g41MszRcBjokemLiC00VVTfHcrz`
        );
        stripe.redirectToCheckout({ sessionId });
      }
    })
  };

  return <div className={styles.plans}>
    {Object.entries(products).map(([productId, productData]) => {
      // todo add some logic to check if the user's subscription is active

      console.log(productData);

      return (
        <div className={styles.plansItem}>
          <div className={styles.plansInfo}>
            <h5>{productData.name}</h5>
            <h6>{productData.description}</h6>
          </div>
          <button onClick={() => loadCheckout(productData.prices.priceId)}>
            Subscribe
          </button>
        </div>
      )
    })}
  </div>;
}

export default Plans;
