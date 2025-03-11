import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login"
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password
            })
            alert(response.data.message)
            navigate("/produk")
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            } else {
                setMessage("Server sedang dalam perbaikan, coba lagi nanti")
            }
        } finally {
            setEmail("")
            setPassword("")
        }
    }

    return (
        <>
            <div className="login w-screen h-screen bg-custom-img bg-cover bg-no-repeat flex justify-center items-center">
                <div className="form bg-sky-900 bg-opacity-50 backdrop-blur-xl w-64 py-4 rounded-xl ring-2 ring-sky-200 shadow-xl shadow-black">
                    <h1 className="text-white font-bold text-2xl text-center">Login</h1>
                    {message && <p className="text-sky-200 mt-2 text-center">{message}</p>}
                    <form onSubmit={handleLogin} className="mt-4 w-48 mx-auto">
                        <div className="email">
                            <label htmlFor="email" className="text-white font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block text-sm text-white outline-none mt-1 w-48 h-8 px-2 py-0.5 rounded-lg ring-2 ring-sky-300 bg-white bg-opacity-0 focus:ring-sky-200 placeholder:text-slate-300 placeholder:text-xs"
                                placeholder="tomiyoka@gmail.com"
                                autoComplete="off" />
                        </div>
                        <div className="password mt-2">
                            <label htmlFor="password" className="text-white font-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block text-sm text-white outline-none mt-1 w-48 h-8 px-2 py-0.5 rounded-lg ring-2 ring-sky-300 bg-white bg-opacity-0 focus:ring-sky-200 placeholder:text-slate-300 placeholder:text-xs"
                                placeholder="*********" />
                        </div>
                        <div className="btn mt-4 mb-4">
                            <button type="submit" className="w-full mt-4 ring-2 ring-sky-300 rounded-lg py-0.5 text-sky-100 font-medium text-lg bg-sky-200 bg-opacity-0 hover:bg-opacity-100 hover:text-slate-900 transition-all duration-300 ease-in-out">Login</button>
                        </div>
                    </form>

                    <hr className="w-48 pt-2 mx-auto border-sky-300" />

                    <div className="register mt-4 text-center">
                        <Link to={'/Register'} className="text-white text-xs">No have account ? <span>Register</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login