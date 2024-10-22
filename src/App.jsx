import { BrowserRouter,Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductDetails />}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
