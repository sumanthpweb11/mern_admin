import React from "react";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 mt-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please enter your Registered Email to Get A Reset Password Mail.
        </p>
        <form action="">
          <CustomInput type="email" label="Email Address" id="email" />

          <button
            className="mt-3 border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
