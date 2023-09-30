import React from "react";
import { Link, Navigate } from "react-router-dom";

export default function UserSignin() {
  return (
    <form
      className="formm w-80"
      onSubmit={(e) => {
        e.preventDefault();
        Navigate(-1);
      }}
    >
      <p className="titlee tracking-wider">ورود</p>
      <label>
        <input required type="email" className="inputt"></input>
        <span>ایمیل</span>
      </label>

      <label>
        <input required type="password" className="inputt"></input>
        <span>رمز عبور</span>
      </label>
      <button className="submitt text-center text-lg" type="submit">
        ورود
      </button>
      <p className="signinn">
        رمز خود را فراموش کردید؟{" "}
        <Link className="text-base">بازیابی رمز عبور</Link>
      </p>
    </form>
  );
}
