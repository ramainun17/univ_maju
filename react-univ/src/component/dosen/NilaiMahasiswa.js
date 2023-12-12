import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const NilaiMahasiswa = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:5019/api/Dosen");
        const data = await response.data;
        setData(data.data);
    };

    const columns = [
        {
            name: "NIM",
            selector: row => row.nim,
            sortable: true
        },
        {
            name: "ID MATKUL",
            selector: row => row.id_matkul,
            sortable: true
        },
        {
            name: "NILAI",
            selector: row => row.nilai,
            sortable: true
        },
        {
            name: "Edit",
            cell: row => <Link to={`/dosen/updatenilai/${row.id_nilai}`} className='btn btn-primary'>Edit</Link>,
            sortable: true
        },
        {
            name: "Hapus",
            cell: row => <Link to={`/dosen/deletenilai/${row.id_nilai}`} className='btn btn-danger'>Delete</Link>,
            sortable: true
        }
    ]

    return (
        <div>
            <div className='container'>
                <h1 className='text-center'>Data Nilai Mahasiswa</h1>
            </div><br />
            <div className='row'>
                <div className='col-2'>
                </div>
                <div className='col-10 align-self-center'>
                    <Link to="/dosen/addnilai" className="btn btn-primary mt-3">Tambah Nilai Mahasiswa</Link><br/>
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                </div>
            </div>

        </div>
    )
}

export default NilaiMahasiswa;