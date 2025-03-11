import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="nav">


                <div className="navbar w-full h-10 rounded-md bg-slate-700 ring-1 ring-sky-300 px-4 py-1 mb-2 flex justify-between items-center">
                    <div className="btnNavMobile flex gap-8 items-center">
                        <button className="md:hidden">
                            <i className="fa-solid fa-bars text-white"></i>
                        </button>
                        <h1 className="text-white text-sm"><i class="fa-solid fa-key mr-2"></i>Access : Admin</h1>
                    </div>
                    <div className="user flex items-center gap-4">
                        <img src="./Pas Foto.jpg" alt="" className="rounded-full w-8 ring-1 ring-sky-300" />
                        <p className="text-sm text-white">TA'IN SIDDIK</p>
                        <button className="text-white">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                </div>

                <div className="hidden dropdown w-32 text-center bg-white ring-1 ring-sky-300 rounded-md px-4 py-2 right-1 fixed">
                    <Link className=" text-sm"><i className="fa-solid fa-user pr-2"></i>Profile</Link>
                    <Link className="block text-sm mt-3"><i className="fa-solid fa-gear pr-2"></i>Setting</Link>
                    <Link className="block text-sm mt-3"><i className="fa-solid fa-right-from-bracket pr-2"></i>Logout</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar