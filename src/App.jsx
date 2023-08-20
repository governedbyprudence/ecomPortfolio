import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./core/routes/homepage";
import { AllProductPage } from "./core/routes/products";
import {CustomNavbar} from "./core/components/navbar";
import "./firebase-config.js";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import SingleProductPage from "./core/routes/singleProduct";

import { ThemeProvider } from "@material-tailwind/react";

export default function App() {
  const queryClient = new QueryClient();

  return (
   <ThemeProvider>
    <QueryClientProvider client={queryClient}>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/products" element={<AllProductPage/>}></Route>
      <Route path="/products/:productId" element={<SingleProductPage/>}></Route>
    </Routes>
   </Router>
   </QueryClientProvider>
   </ThemeProvider>
  )
}