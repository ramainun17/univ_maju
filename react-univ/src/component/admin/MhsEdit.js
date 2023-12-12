import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function AdminMhsEdit() {
    const { id } = useParams();

    // Define state
    const [formValue, setformValue] = React.useState({
      nama: "",
      prodi: "",
    });
  
    // useEffect hook
    const fectData = React.useCallback(async () => {
        //fetching
        const response = await axios.get(
          'https://localhost:7208/api/StafAdmin/mahasiswaById?nim='+id
        );
        //get response data
        const data = response.data.data;
        //assign response data to state "formValue"
        setformValue({
          nama: data.nama,
          prodi: data.prodi,
        });
        console.log(data);
      }, [id]);
      //useEffect hook
      React.useEffect(() => {
        //panggil method "fetchData"
        fectData();
      }, [fectData, id]);
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
      // Store the states in the form data
      const FormDataInput = new FormData();
      FormDataInput.append("nama", formValue.nama);
      FormDataInput.append("prodi", formValue.prodi);
      alert("Data berhasil diubah");
      try {
        // Make axios post request
        const response = await axios({
          method: "put",
          url: "https://localhost:7208/api/StafAdmin/mahasiswa/update?nim=" + id,
          data: FormDataInput,
          headers: { "Content-Type": "application/json" },
        });
        console.log(response);
      } catch (error) {
        console.error("Error updating data:", error);
        alert("Error updating data");
      }
    };

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
                    <Link to="/admin/mahasiswa">Administrasi</Link>
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
                  <h3 className="card-title">Edit Mahasiswa {id}</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nama</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nama"
                          placeholder="Masukkan Nama"
                          onChange={handleChange}
                          value={formValue.nama}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Prodi</label>
                        <input
                          type="text"
                          className="form-control"
                          name="prodi"
                          placeholder="Masukkan Prodi"
                          onChange={handleChange}
                          value={formValue.prodi}
                        />
                      </div>
                      <div>
                        <button type="submit" className="btn btn-warning">
                          {" "}
                          Ubah
                        </button>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </form>
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

export default AdminMhsEdit;
