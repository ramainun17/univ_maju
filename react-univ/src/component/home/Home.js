import React, { useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function Home() {
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
  ];
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link className=" text-decoration-none" to="/">Universitas Maju</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="col">
            <h5 className="my-3">Data Mahasiswa</h5>
            <DataTable columns={columns} data={datamahasiswa} pagination />
          </div>
          
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default Home;
