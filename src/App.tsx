import { Pages } from "@/constants";
import { Cart, Home, ProductDetail, SignIn, SignUp } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./provider/auth";
import { CartProvider } from "./provider/cart";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={Pages.ProductDetail} element={<ProductDetail />} />
            <Route path={Pages.Home} element={<Home />} />
            <Route path={Pages.SignUp} element={<SignUp />} />
            <Route path={Pages.SignIn} element={<SignIn />} />
            <Route path={Pages.Cart} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
