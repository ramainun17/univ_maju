import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    // Fetch all students from your API endpoint
    axios.get("https://localhost:7208/api/Mahasiswa")
      .then(response => {
        // Assuming the API response is an array of students
        const students = response.data.data;

        // Calculate the total number of students
        const totalCount = students.length;
        
        // Update the state with the total count
        setTotalStudents(totalCount);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [totaldosens, setTotaldosens] = useState(0);

  useEffect(() => {
    // Fetch all dosens from your API endpoint
    axios.get("https://localhost:7208/api/StafAdmin/dosen")
      .then(response => {
        // Assuming the API response is an array of dosens
        const dosens = response.data.data;

        // Calculate the total number of dosens
        const totalCount = dosens.length;
        
        // Update the state with the total count
        setTotaldosens(totalCount);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [totalmatkuls, setTotalmatkuls] = useState(0);

  useEffect(() => {
    // Fetch all matkuls from your API endpoint
    axios.get("https://localhost:7208/api/StafAdmin/matkul")
      .then(response => {
        // Assuming the API response is an array of matkuls
        const matkuls = response.data.data;

        // Calculate the total number of matkuls
        const totalCount = matkuls.length;
        
        // Update the state with the total count
        setTotalmatkuls(totalCount);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col">
              <h1 className="m-0 text-center text-uppercase bold">
                Universitas Maju
              </h1>
            </div>
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
                    <h3>{totalStudents}</h3>
                    <p>Mahasiswa</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-graduate" />
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
                      {totaldosens}
                    </h3>
                    <p>Dosen</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-tie" />
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
                    <h3>{totalmatkuls}</h3>
                    <p>Mata Kuliah</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-book-open" />
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
                    <h3>CRUD</h3>
                    <p>Administrasi</p>
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
      {/* /.content */}
    </div>
  );
}

export default Home;
