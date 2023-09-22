import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Tablet from "./pages/Tablet";
import Handsfree from "./pages/Handsfree";
import SmartWatch from "./pages/SmartWatch";
import Speaker from "./pages/Speaker";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="tablet" element={<Tablet />} />
          <Route path="smartWatch" element={<SmartWatch />} />
          <Route path="handsfree" element={<Handsfree />} />
          <Route path="speaker" element={<Speaker />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
