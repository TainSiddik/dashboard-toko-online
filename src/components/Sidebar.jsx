import React from "react"
import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <>
            <div className="sidebar w-56 bg-slate-700 ring-1 ring-sky-200 rounded-md px-4 py-4">
                <div className="Admin">
                    <p className="text-sm text-sky-300 font-semibold">Admin</p>
                    <div className="listMenuProduk mt-3 ml-3">
                        <Link to={'#'} className="text-white text-sm block mt-3 hover:text-sky-200">
                            <i className="fa-solid fa-users pr-2"></i>Managemen Users
                        </Link>
                    </div>
                </div>
                <div className="general mt-8">
                    <p className="text-sm text-sky-300 font-semibold">General</p>
                    <div className="listMenuProduk mt-3 ml-3">
                        <Link to={'#'} className="text-white text-sm hover:text-sky-200">
                            <i className="fa-solid fa-chart-line pr-2"></i>Dashboard
                        </Link>
                        <Link to={'#'} className="block mt-4 text-white text-sm hover:text-sky-200">
                            <i className="fa-solid fa-bell pr-2"></i>Notifikasi
                        </Link>
                        <Link to={'#'} className="block mt-4 text-white text-sm hover:text-sky-200">
                            <i className="fa-solid fa-shopping-cart pr-2"></i>Order
                        </Link>
                    </div>
                </div>
                <div className="produk mt-8">
                    <p className="text-sm text-sky-300 font-semibold">Produk</p>
                    <div className="listMenuProduk mt-3 ml-3">
                        <Link to={'/Produk'} className="text-sky-200 text-sm hover:text-sky-200">
                            <i className="fa-solid fa-box pr-2"></i>Managemen Produk
                        </Link>
                        <Link to={'#'} className="block mt-4 text-white text-sm hover:text-sky-200">
                            <i className="fa-solid fa-fire pr-2"></i>Terlaris
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar