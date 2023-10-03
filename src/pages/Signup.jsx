import { Link, useNavigate } from "react-router-dom";
import {
  addUsername,
  userLogined,
} from "../features/user/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function User() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const username = [name, lastName].join(" ");
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center p-10">
      <form
        className="formm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addUsername(username));
          dispatch(userLogined(true));
          navigate(-1);
        }}
      >
        <p className="titlee tracking-wider">ثبت نام </p>
        <div className="flexx">
          <label>
            <input
              required
              type="text"
              className="inputt"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <span>نام</span>
          </label>

          <label>
            <input
              required
              type="text"
              className="inputt"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
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
          <Link className="text-lg" to="/login">
            ورود
          </Link>
        </p>
      </form>
    </div>
  );
}
