import React, { useState } from "react";

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
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">UNIV MAJU</span>
        </a>

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
              <a href="/#" onClick={() => handleDropdownToggle("mahasiswa")} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Mahasiswa
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* Submenu */}
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
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
              <a href="/#" onClick={() => handleDropdownToggle("dosen")} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dosen
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* Submenu */}
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
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
              className={`nav-item ${
                dropdownStates.administrasi ? "menu-open" : ""
              }`}
            >
              <a href="/#" onClick={() => handleDropdownToggle("administrasi")} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Administrasi
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* Submenu */}
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
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
