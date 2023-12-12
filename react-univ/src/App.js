// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { } from "react";
import Header from "./component/layouts/Header";
import SideNav from "./component/layouts/SideNav";
// import Footer from "./component/layouts/Footer";
import Home from "./component/home/Home";
import AdminMahasiswa from "./component/admin/Mahasiswa";
// dosen
import NilaiMahasiswa from "./component/dosen/NilaiMahasiswa";
import AddNilaiMhs from "./component/dosen/AddNilaiMhs";
import DeleteNilaiMhs from "./component/dosen/DeleteNilaiMhs";
import EditNilaiMhs from "./component/dosen/EditNilaiMhs";


function App() {
  return (
    <Router basepath="./my-app">
      <div className="app-header">
        <Header />
        <SideNav />
      </div>
      <div className="app-content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin/mahasiswa" element={<AdminMahasiswa/>} />

        {/* dosen */}
        <Route path="/dosen/nilai" element={<NilaiMahasiswa />} />
        <Route path="/dosen/addnilai" element={<AddNilaiMhs />} />
        <Route path="/dosen/deletenilai/:id" element={<DeleteNilaiMhs />} />
        <Route path="/dosen/updatenilai/:id" element={<EditNilaiMhs />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
