import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/ProductAction";

function HomePage() {
  const dispatch = useDispatch();
  const { product } = useSelector((x) => x);
  console.log("product state", product.product.data);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      
      {product.product.data.map((p) => (
              <li key={p.id}>{p.title}</li>
              // Add more details as needed
            ))}

    </div>
  );
}

export default HomePage;
