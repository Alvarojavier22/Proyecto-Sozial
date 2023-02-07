import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { TermsAndConditions } from "./pages/termsandconditions.jsx";
import { Feed } from "./pages/feed.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Categories } from "./pages/categories.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login.jsx";
import { PassRecover } from "./pages/passrecover.jsx";
import { SignUp } from "./pages/signup.jsx";
import { Newpass } from "./pages/newpass.jsx";
import { Profile } from "./pages/perfil.jsx";
import { Cart } from "./pages/cart.jsx";
import { PostProducts } from "./pages/postproduct.jsx";
import { PublicTextPost } from "./component/PublicTextPost.jsx";
import { SellProductsDetails } from "./component/SellProductsDetails.jsx";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<TermsAndConditions />} path="/termsandconditions" />
          <Route element={<Feed />} path="/feed" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<h1>Not found!</h1>} />
          <Route element={<Login />} path="/" />
          <Route element={<PassRecover />} path="/passrecover" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Newpass />} path="/newpass" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<PostProducts />} path="/postproduct" />
          <Route element={<Categories />} path="/categories" />
          <Route element={<SellProductsDetails />} path="/product-details" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
