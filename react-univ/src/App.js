// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./component/layouts/Header";
import SideNav from "./component/layouts/SideNav";
// import Footer from "./component/layouts/Footer";
import Home from "./component/home/Home";
import AdminMahasiswa from "./component/admin/Mahasiswa";
import AdminMhsAdd from "./component/admin/MhsAdd";
import AdminMhsEdit from "./component/admin/MhsEdit";
import AdminDosen from "./component/admin/Dosen";
import AdminDsnAdd from "./component/admin/DsnAdd";
import AdminDsnEdit from "./component/admin/DsnEdit";
import AdminMatkul from "./component/admin/Matkul";
import AdminMkAdd from "./component/admin/MkAdd";
import AdminMkEdit from "./component/admin/MkEdit";

function App() {
  return (
    <Router basepath="./my-app">
      <div className="app-header">
        <Header />
        <SideNav />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/mahasiswa" element={<AdminMahasiswa />} />
          <Route path="/admin/mahasiswa/tambah" element={<AdminMhsAdd />} />
          <Route path="/admin/mahasiswa/edit/:id" element={<AdminMhsEdit />} />
          <Route path="/admin/dosen" element={<AdminDosen />} />
          <Route path="/admin/dosen/tambah" element={<AdminDsnAdd />} />
          <Route path="/admin/dosen/edit/:id" element={<AdminDsnEdit />} />
          <Route path="/admin/matkul" element={<AdminMatkul />} />
          <Route path="/admin/matkul/tambah" element={<AdminMkAdd />} />
          <Route path="/admin/matkul/edit/:id" element={<AdminMkEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
