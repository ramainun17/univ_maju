import React, { useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function Admin_Mahasiswa() {
  //define state
  const [datamahasiswa, setDatamahasiswa] = useState([]);
  //useEffect hook
  React.useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);
  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get(
      "https://localhost:7208/api/StafAdmin/mahasiswa"
    );
    //get response data
    const data = await response.data.data;
    //assign response data to state "datamahasiswa"
    setDatamahasiswa(data);
    console.log(data);
  };
    // Function to handle delete
    const handleDelete = async (nim) => {
      if (window.confirm("Apakah Anda yakin ingin menghapus mahasiswa ini?")) {
        try {
          // Make axios delete request
          const response = await axios.delete(
            `https://localhost:7208/api/StafAdmin/mahasiswa/delete/${nim}`
          );
  
          console.log(response);
  
          // Refetch data after successful delete
          fectData();
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      }
    };
  const columns = [
    {
      name: "NIM",
      selector: (row) => row.nim,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "Prodi",
      selector: (row) => row.prodi,
      sortable: true,
    },
    {
      name: "Aksi",
      cell: (row) => (
        <>
          <Link
            to={"/admin/mahasiswa/edit/" + row.nim}
            className="btn btn-warning mr-2"
          >
            <i className="nav-icon fas fa-edit" />
          </Link>
          <button
            onClick={() => handleDelete(row.nim)}
            className="btn btn-danger"
          >
            <i className="nav-icon fas fa-trash" />
          </button>
        </>
      ),
      sortable: false,
    },
  ];
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Administrasi</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item text-decoration-none">
                  <Link className="text-decoration-none" to="/admin/mahasiswa">Administrasi</Link>
                </li>
                <li className="breadcrumb-item active">Mahasiswa</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Data Mahasiswa</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <Link to="/admin/mahasiswa/tambah" className="btn btn-primary">
                    <i className="nav-icon fas fa-plus-circle mr-2" /> Tambah Data
                  </Link>
                  <DataTable
                    columns={columns}
                    data={datamahasiswa}
                    pagination
                  />
                </div>
                {/* /.card-body */}
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default Admin_Mahasiswa;
