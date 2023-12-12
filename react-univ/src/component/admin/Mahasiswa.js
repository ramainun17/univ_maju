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
          <a
            href={"/datamahasiswa/edit/" + row.nim}
            className="btn btn-warning mr-2"
          >
            Edit
          </a>
          <a
            href={"/datamahasiswa/delete/" + row.nim}
            className="btn btn-danger"
          >
            Delete
          </a>
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
                  <a href="/#">Administrasi</a>
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
                  <Link to="/admin/mahasiswa/tambah" className="btn btn-success">
                    Tambah Mahasiswa
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
