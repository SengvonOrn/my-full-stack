import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searParames, setSaerchParams] = useSearchParams();
  const success = searParames.get("success");
  const orderId = searParames.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const respone = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (respone.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="Verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
