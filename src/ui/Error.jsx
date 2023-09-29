import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>{error.data || error.message}</h1>
      <button onClick={() => navigate(-1)}>برگشت</button>
    </div>
  );
}
