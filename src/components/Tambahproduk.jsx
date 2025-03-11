import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tambahproduk = () => {
    const [produk, setProduk] = useState('');
    const [harga, setHarga] = useState('');
    const [stok, setStok] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [kategori, setKategori] = useState('');
    const [gambar, setGambar] = useState([]); // Menyimpan file asli
    const [previewGambar, setPreviewGambar] = useState([]); // Menyimpan URL preview
    const [adaFile, setAdaFile] = useState(false);

    const navigate = useNavigate()

    const handleChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 0) {
            const preview = files.map((file) => URL.createObjectURL(file));
            setGambar(files); // Simpan file asli
            setPreviewGambar(preview); // Simpan URL untuk preview
            setAdaFile(true);
        } else {
            setAdaFile(false);
        }
    };

    const simpanProduk = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("produk", produk);
            formData.append("harga", harga);
            formData.append("stok", stok);
            formData.append("deskripsi", deskripsi);
            formData.append("kategori", kategori);

            if (gambar.length > 0) {
                gambar.forEach((file) => {
                    formData.append("gambar", file);
                });
            } else {
                alert("Harap pilih gambar sebelum menyimpan produk!");
                return;
            }

            console.log("Data yang dikirim:", formData);

            const response = await axios.post("http://localhost:8000/api/produk", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Produk berhasil ditambahkan!");
            console.log("Response dari server:", response.data);

            navigate('/produk')
        } catch (error) {
            console.error("Gagal menambahkan produk:", error);
            alert("Terjadi kesalahan saat menambahkan produk.");
        }
    };

    return (
        <div className="produk w-full ring-1 ring-teal-500 rounded-md px-4 py-2">
            <div className="subTitle font-semibold">
                <h1 className="text-2xl text-teal-500">Tambah Produk</h1>
            </div>
            <div className="tambah form mt-4 mb-4">
                <form onSubmit={simpanProduk} className="flex gap-8 justify-between">
                    <div className="infoProduk w-full">
                        <div className="namaProduk">
                            <label htmlFor="namaProduk" className="text-sm font-semibold">Nama Produk</label>
                            <input
                                type="text"
                                value={produk}
                                onChange={(e) => setProduk(e.target.value)}
                                id="namaProduk"
                                className="block mt-1 ring-1 ring-teal-500 rounded-md px-2 py-1 w-80 outline-none focus:ring-2"
                                placeholder="Nama produk..."
                            />
                        </div>
                        <div className="kategori mt-8 flex gap-8">
                            <label htmlFor="kategori" className="text-sm font-semibold">Kategori</label>
                            <select
                                name="kategori"
                                value={kategori}
                                onChange={(e) => setKategori(e.target.value)}
                                id="kategori"
                                className="ring-1 w-[233px] ring-teal-500 outline-none rounded-md px-2 py-1 hover:ring-2"
                            >
                                <option value="">-- Pilih --</option>
                                <option value="Pakaian Pria">Pakaian Pria</option>
                                <option value="Pakaian Wanita">Pakaian Wanita</option>
                                <option value="Couple">Couple</option>
                                <option value="Muslim Pria">Muslim Pria</option>
                                <option value="Muslim Wanita">Muslim Wanita</option>
                                <option value="Sepatu">Sepatu</option>
                                <option value="Jam Tangan">Jam Tangan</option>
                            </select>
                        </div>
                        <div className="harga mt-4">
                            <label htmlFor="harga" className="text-sm font-semibold">Harga</label>
                            <input
                                type="number"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                id="harga"
                                className="block mt-1 ring-1 ring-teal-500 rounded-md px-2 py-1 w-80 outline-none focus:ring-2"
                                placeholder="1000000"
                            />
                        </div>
                        <div className="stok mt-4">
                            <label htmlFor="stok" className="text-sm font-semibold">Stok</label>
                            <input
                                type="number"
                                value={stok}
                                onChange={(e) => setStok(e.target.value)}
                                id="stok"
                                className="block mt-1 ring-1 ring-teal-500 rounded-md px-2 py-1 w-80 outline-none focus:ring-2"
                                placeholder="100"
                            />
                        </div>
                        <div className="Deskripsi mt-4">
                            <label htmlFor="Deskripsi" className="text-sm font-semibold">Deskripsi</label>
                            <textarea
                                name="deskripsi"
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                                cols="30"
                                rows="5"
                                className="block mt-1 ring-1 ring-teal-500 rounded-md px-2 py-1 w-80 outline-none focus:ring-2"
                                placeholder="Spesifikasi Produk"
                            ></textarea>
                        </div>
                    </div>

                    <div className="inputGambar w-full">
                        <h1 className="font-semibold text-sm mb-3">Gambar</h1>
                        <input
                            type="file"
                            id="uploadGambar"
                            accept="image/*"
                            multiple
                            onChange={handleChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="uploadGambar"
                            className="cursor-pointer bg-teal-500 text-white px-2 py-1 rounded-md ring-2 ring-teal-200 transition"
                        >
                            Masukan Gambar
                        </label>

                        {!adaFile && <p className="text-gray-500 text-sm mt-2">Belum ada gambar</p>}

                        <div className="grid grid-cols-4 gap-x-4 gap-y-8 mt-8">
                            {previewGambar.map((src, index) => (
                                <img key={index} src={src} alt="Preview" className="w-20 h-20 object-cover rounded" />
                            ))}
                        </div>
                        <div className="simpan mt-12">
                            <button type="submit" className="ring-1 ring-teal-500 rounded-md px-3 py-1 font-semibold text-teal-500 bg-teal-500 bg-opacity-0 hover:bg-opacity-90 hover:text-white transition-all duration-300 ease-in-out">
                                Simpan Produk
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Tambahproduk;
