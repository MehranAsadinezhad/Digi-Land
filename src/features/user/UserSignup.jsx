import React from "react";
import { Link, Navigate } from "react-router-dom";

export default function UserSignup({ setEnter }) {
  return (
    <form
      className="formm"
      onSubmit={(e) => {
        e.preventDefault();
        Navigate(-1);
      }}
    >
      <p className="titlee tracking-wider">ثبت نام </p>
      <div className="flexx">
        <label>
          <input required type="text" className="inputt"></input>
          <span>نام</span>
        </label>

        <label>
          <input required type="text" className="inputt"></input>
          <span>نام خانوادگی</span>
        </label>
      </div>

      <label>
        <input required type="email" className="inputt"></input>
        <span>ایمیل</span>
      </label>

      <label>
        <input required type="password" className="inputt"></input>
        <span>رمز عبور</span>
      </label>
      <label>
        <input required type="password" className="inputt"></input>
        <span>تکرار رمز عبور</span>
      </label>
      <button className="submitt text-center text-lg" type="submit">
        ثبت نام
      </button>
      <p className="signinn">
        قبلا ثبت نام کردید؟{" "}
        <Link className="text-lg" onClick={() => setEnter(true)}>
          ورود
        </Link>
      </p>
      
    </form>
  );
}
