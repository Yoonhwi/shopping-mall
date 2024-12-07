import { BrowserRouter, Route, Routes } from "react-router";
import { ProductDetail, Home, SignUp, SignIn } from "@/pages";
import { Pages } from "@/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.ProductDetail} element={<ProductDetail />} />
        <Route path={Pages.Home} element={<Home />} />
        <Route path={Pages.SignUp} element={<SignUp />} />
        <Route path={Pages.SignIn} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
