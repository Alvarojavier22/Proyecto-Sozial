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
import { Logout } from "./pages/logout.jsx";
import { SellProductsDetails } from "./pages/SellProductsDetails.jsx";
import { EditProfile } from "./pages/EditProfile.jsx";
import { CartTwo } from "./pages/Cart2.jsx";
import { App } from "./pages/app.jsx";
import { Categories2 } from "./pages/Categories2.jsx";

import { UploadPhoto } from "./component/uploadphoto.jsx";

import { TechCategorie } from "./pages/TechCategorie.jsx";
import { ClothesCategory } from "./pages/ClothesAccesories.jsx";
import { CarsCategory } from "./pages/Cars.jsx";
import { BooksCategory } from "./pages/Books.jsx";
import { Feed2 } from "./pages/Feed2.jsx";
import { Store } from "./pages/Store.jsx";

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
          <Route element={<Feed2 />} path="/feed2" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Logout />} path="/logout" />
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
          <Route element={<Categories2 />} path="/categories2" />
          <Route element={<Store />} path="/store" />
          <Route element={<SellProductsDetails />} path="/product-details" />
          <Route element={<EditProfile />} path="/edit-profile" />
          <Route element={<CartTwo />} path="/cart2" />
          <Route element={<TechCategorie />} path="/tecnology" />
          <Route element={<ClothesCategory />} path="/clothes" />
          <Route element={<CarsCategory />} path="/cars" />
          <Route element={<BooksCategory />} path="/books" />
          <Route element={<App />} path="/app" />
          <Route element={<UploadPhoto />} path="/uploadphoto" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
