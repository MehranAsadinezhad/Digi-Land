import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Tablet from "./pages/Tablet";
import Handsfree from "./pages/Handsfree";
import SmartWatch from "./pages/SmartWatch";
import Speaker from "./pages/Speaker";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="mobiles" element={<Mobile />} />
          <Route path="tablets" element={<Tablet />} />
          <Route path="smartWatches" element={<SmartWatch />} />
          <Route path="handsfrees" element={<Handsfree />} />
          <Route path="speakers" element={<Speaker />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
