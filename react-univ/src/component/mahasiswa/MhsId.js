import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MahasiswaId() {
  const { id } = useParams();
  const [datamahasiswa, setDatamahasiswa] = useState([]);
  const [mahasiswaInfo, setMahasiswaInfo] = useState({
    nim: "",
    namaMahasiswa: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7208/api/Mahasiswa/" + id
      );

      const data = response.data.data;
      setDatamahasiswa(data);
      
      // Set nim and namaMahasiswa once
      setMahasiswaInfo({
        nim: data[0].nim,
        namaMahasiswa: data[0].namaMahasiswa
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns = [
    {
      name: "Mapel",
      selector: (row) => row.namaMatkul,
      sortable: true,
    },
    {
      name: "Nilai",
      selector: (row) => row.nilai,
      sortable: true,
    },
  ];

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Mahasiswa</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item text-decoration-none">
                  <Link className=" text-decoration-none" to="/mahasiswa">Mahasiswa</Link>
                </li>
                <li className="breadcrumb-item active">List Mahasiswa</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Nilai Mahasiswa</h3>
                </div>
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-sm-4">Nama</dt>
                    <dd className="col-sm-8">{mahasiswaInfo.namaMahasiswa}</dd>
                    <dt className="col-sm-4">NIM</dt>
                    <dd className="col-sm-8">{mahasiswaInfo.nim}</dd>
                  </dl>
                  <DataTable columns={columns} data={datamahasiswa} pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MahasiswaId;
