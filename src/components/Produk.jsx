import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
const Produk = () => {
    const [produk, setProduk] = useState([])

    const getProduk = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/produk');
            console.log(response.data);
            setProduk(response.data);
        } catch (error) {
            console.error(`Get all data produk has failed ${error}`);
            setProduk([]);
        }
    };

    useEffect(() => {
        document.title = "Produk";
        getProduk();
    }, []);

    return (
        <>
            <div className="produk max-w-full ring-1 ring-sky-300 rounded-md px-4 py-2">
                <div className="management flex items-center justify-between">
                    <div className="menu flex items-center gap-4">
                        <button className="icon flex items-center md:hidden">
                            <i className="fa-solid fa-list text-2xl text-teal-600"></i>
                        </button>
                        <div className="namaKategori font-semibold">
                            <h1 className="text-lg text-slate-700">Managemen Produk</h1>
                        </div>
                    </div>
                    <div className="tambahProduk flex items-center">
                        <Link to={'/tambah'} className="bg-custom-gradient px-4 py-1 rounded-lg text-white text-sm">
                            + Tambah Produk
                        </Link>
                    </div>
                </div>
                <hr className="my-3 border-teal-500" />
                <div className="allProduk">
                    <div className="find flex justify-between items-center gap-4">
                        <div className="kategori flex gap-4 items-center">
                            <div className="icon flex items-center">
                                <button>
                                    <i className="fa-solid fa-bars text-sky-500"></i>
                                </button>
                            </div>
                            <div className="namaKategori font-semibold">
                                <h1 className="text-slate-700">Semua Kategori</h1>
                            </div>
                        </div>
                        <div className="search">
                            <div className="findProduk flex gap-2 ring-1 ring-sky-300 rounded-md items-center px-2 py-1">
                                <input type="text" className="rounded-md w-64 outline-none" placeholder="Cari Produk..." />
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="listProduk grid grid-cols-5 gap-4 mt-8 mb-4 w-full">
                        {produk.length > 0 ? (
                            produk.map((p) => (
                                <div className="card" key={p.id}>
                                    <Link to={`/produk/${p.kategori_id}/${p.id}`} className="group border border-sky-300 rounded-md relative block overflow-hidden">
                                        <img
                                            src={p.gambar?.length ? p.gambar[p.gambar.length - 1].url : "fallback-image.jpg"}
                                            alt="produk"
                                            className="h-36 w-full object-fill transition duration-500 group-hover:scale-105 md:h-40 lg:h-52"
                                        />
                                        <div className="kategori mr-4 w-36 text-center text-xs bg-slate-700 mt-4 rounded-r-md">
                                            <h5 className="text-white px-1">{p.kategori?.kategori}</h5>
                                        </div>
                                        <div className="harga mx-2 mt-3">
                                            <h1 className="text-red-500 font-semibold">
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p.harga)}
                                            </h1>
                                        </div>
                                        <div className="namaProduk relative bg-white mx-2 mt-2">
                                            <h3 className="text-gray-900 text-sm font-semibold">
                                                {p.produk.length > 20 ? p.produk.slice(0, 20) + "..." : p.produk}
                                            </h3>
                                        </div>
                                        <div className="terjual mt-4 mb-2 mx-2">
                                            <p className="text-xs text-slate-500">Terjual : {p.terjual ?? 0}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="w-full col-span-5 flex justify-center items-center py-10">
                                <h1 className="text-gray-500 text-lg font-semibold">Belum ada produk</h1>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Produk