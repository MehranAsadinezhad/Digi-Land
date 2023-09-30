import React, { useState } from "react";
import UserSignup from "../features/user/UserSignup";
import UserSignin from "../features/user/UserSignin";

export default function User() {
  const [enter, setEnter] = useState(false);
  return (
    <div className="my-10 flex items-center justify-center">
      {!enter ? (
        <UserSignup setEnter={setEnter} />
      ) : (
        <UserSignin setEnter={setEnter} />
      )}
    </div>
  );
}
