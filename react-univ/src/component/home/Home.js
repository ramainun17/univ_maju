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
                  <Link to="#">Universitas Maju</Link>
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
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <Link to="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    53<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <Link to="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <Link to="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <Link to="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </Link>
              </div>
            </div>
            {/* ./col */}
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
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
