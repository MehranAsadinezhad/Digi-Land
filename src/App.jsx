import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import Tablets from "./pages/Tablets";
import Handsfrees from "./pages/Handsfrees";
import SmartWatches from "./pages/SmartWatches";
import Speakers from "./pages/Speakers";
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
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="tablets" element={<Tablets />} />
          <Route path="smartWatches" element={<SmartWatches />} />
          <Route path="handsfrees" element={<Handsfrees />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
