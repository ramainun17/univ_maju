import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminDsnAdd() {
  const [formValue, setformValue] = React.useState({
    nama_matkul: "",
    id_dosen: "",
  });
  const [dosenList, setDosenList] = React.useState([]);
  React.useEffect(() => {
    // Fetch the list of dosen
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7208/api/StafAdmin/dosen"
        );
        setDosenList(response.data.data);
      } catch (error) {
        console.error("Error fetching dosen:", error);
      }
    };

    fetchData();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformValue({
      ...formValue,
      [name]: name === "id_dosen" ? parseInt(value, 5) || "" : value,
    });
  };
  const handleSubmit = async () => {
    // store the states in the form data
    const FormDataInput = new FormData();
    FormDataInput.append("nama_matkul", formValue.nama_matkul);
    FormDataInput.append("id_dosen", formValue.id_dosen);
    console.log(formValue.id_dosen);
    console.log(formValue.nama_matkul);
    alert("Data berhasil disimpan");
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://localhost:7208/api/StafAdmin/matkul/create",
        data: FormDataInput,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error);
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
                  <Link to="/admin/matkul">Administrasi</Link>
                </li>
                <li className="breadcrumb-item active">Mata Kuliah</li>
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
                  <h3 className="card-title">Tambah Mata Kuliah</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nama Mapel</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nama_matkul"
                          placeholder="Masukkan Mapel"
                          onChange={handleChange}
                          value={formValue.nama_matkul}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="id_dosen">Dosen</label>
                        <select
                          className="form-control"
                          name="id_dosen"
                          onChange={handleChange}
                          value={formValue.id_dosen}
                        >
                          <option value="">Pilih Dosen</option>
                          {dosenList.map((dosen) => (
                            <option key={dosen.id_dosen} value={dosen.id_dosen}>
                              {dosen.nama}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary">
                          {" "}
                          Tambah
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

export default AdminDsnAdd;
