import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Produk from "./components/Produk"
import Sidebar from "./components/Sidebar"
import Tambahproduk from "./components/Tambahproduk"
import Login from "./components/Login"
import Register from "./components/Register"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/produk" element={
            <>
              <div className="produk flex gap-2 my-1 mx-1">
                <Sidebar />
                <div className="navProduk">
                  <Navbar />
                  <Produk />
                </div>
              </div>
            </>
          } />
          <Route path="/tambah" element={
            <div className="produk flex gap-2 my-1 mx-1">
              <Sidebar />
              <Tambahproduk />
            </div>
          } />
        </Routes>
      </Router>

    </>
  )
}

export default App
