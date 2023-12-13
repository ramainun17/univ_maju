import React, { useState } from "react";
import { Link } from "react-router-dom";


function SideNav() {
  const [dropdownStates, setDropdownStates] = useState({
    mahasiswa: false,
    dosen: false,
    administrasi: false,
    // ... tambahkan menu lain jika diperlukan
  });

  // Fungsi untuk menangani klik pada item yang memiliki submenu
  const handleDropdownToggle = (menu) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [menu]: !prevStates[menu],
    }));
  };

  return (
    <div className="App">
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link text-decoration-none">
          <span className="mx-5"><i className="nav-icon fas fa-laptop-code mr-2" /><strong className="brand-text font-weight-light">UNIV MAJU</strong></span>
        </Link>

        {/* ... (Bagian lain dari sidebar) */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Item menu dengan submenu */}
            <li
              className={`nav-item ${
                dropdownStates.mahasiswa ? "menu-open" : ""
              }`}
            >
              <Link to="#" onClick={() => handleDropdownToggle("mahasiswa")} className="nav-link">
                <i className="nav-icon fas fa-user-graduate" />
                <p>
                  Mahasiswa
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              {/* Submenu */}
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/mahasiswa" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>List Mahasiswa</p>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Item menu tanpa submenu */}

            {/* ... (Item menu lainnya) */}
          </ul>
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Item menu dengan submenu */}
            <li
              className={`nav-item ${dropdownStates.dosen ? "menu-open" : ""}`}
            >
              <Link to="#" onClick={() => handleDropdownToggle("dosen")} className="nav-link">
                <i className="nav-icon fas fa-user-tie" />
                <p>
                  Dosen
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              {/* Submenu */}
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="dosen/nilai" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Nilai Mahasiswa</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="dosen/addnilai" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Tambah Nilai</p>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Edit Nilai</p>
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="dosen/deletenilai" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Hapus Nilai</p>
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* Item menu tanpa submenu */}

            {/* ... (Item menu lainnya) */}
          </ul>
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Item menu dengan submenu */}
            <li
              className={`nav-item ${
                dropdownStates.administrasi ? "menu-open" : ""
              }`}
            >
              <Link to="#" onClick={() => handleDropdownToggle("administrasi")} className="nav-link">
                <i className="nav-icon fas fa-user-lock" />
                <p>
                  Administrasi
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              {/* Submenu */}
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="admin/mahasiswa" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Mahasiswa</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/dosen" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dosen</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="admin/matkul" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Mata Kuliah</p>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Item menu tanpa submenu */}

            {/* ... (Item menu lainnya) */}
          </ul>
        </nav>
        {/* ... (Bagian lain dari sidebar) */}
      </aside>
    </div>
  );
}

export default SideNav;
