import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, Footer } from './Components';

// Pages
import { Home, Contact, Login, Register, ResetPassword, Admin } from "./Pages"

import AdminOnlyRoute from "./Components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./Components/product/productDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import CheckoutDetails from "./Pages/checkout/CheckoutDetails";
import Checkout from "./Pages/checkout/Checkout";
import CheckoutSuccess from "./Pages/checkout/CheckoutSuccess";
import OrderHistory from "./Pages/OrderHIstory/OrderHistory";
import OrderDetails from "./Pages/orderDetails/OrderDetails";
import ReviewProducts from "./Components/reviewProducts/ReviewProducts";
import NotFound from "./Pages/notFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>

          <Route path="/" element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/reset-password" element={< ResetPassword />} />
          <Route path="/order-history" element={< OrderHistory />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />

          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/review-product/:id" element={<ReviewProducts />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
