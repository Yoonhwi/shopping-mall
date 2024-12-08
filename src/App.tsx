import { Pages } from "@/constants";
import { Home, ProductDetail, SignIn, SignUp } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./provider/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Pages.ProductDetail} element={<ProductDetail />} />
          <Route path={Pages.Home} element={<Home />} />
          <Route path={Pages.SignUp} element={<SignUp />} />
          <Route path={Pages.SignIn} element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
