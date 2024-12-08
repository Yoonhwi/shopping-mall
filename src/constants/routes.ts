export enum Pages {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Product = "/product",
  ProductDetail = "/product/:id",
}

export enum Endpoints {
  AllProducts = "products",
  DetailProduct = "products{/:id}",
  SpecificProduct = "products/category",
}
