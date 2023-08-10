import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./core/routes/homepage";
import { AllProductPage } from "./core/routes/products";
import Navbar from "./core/components/navbar";
import "./firebase-config.js";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import SingleProductPage from "./core/routes/singleProduct";


export default function App() {
  const queryClient = new QueryClient();

  return (
   <QueryClientProvider client={queryClient}>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/products" element={<AllProductPage/>}></Route>
      <Route path="/products/:productId" element={<SingleProductPage/>}></Route>
    </Routes>
   </Router>
   </QueryClientProvider>
  )
}