import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogined } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center p-10">
      <form
        className="formm w-80"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(userLogined(true));
          navigate("/");
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
    </div>
  );
}
