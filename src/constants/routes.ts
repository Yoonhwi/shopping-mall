export enum Pages {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Product = "/product",
  ProductDetail = "/product/:id",
}

const baseUrl = "https://fakestoreapi.com";
export enum Endpoints {
  AllProducts = `${baseUrl}/products`,
  SpecificProduct = `${baseUrl}/products/category`,
}
