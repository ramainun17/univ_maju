import axios from 'axios';
import React from 'react';

const AddNilaiMhs = () => {
    const [formValue, setFormValue] = React.useState({
        nim: '',
        id_matkul: '',
        nilai: ''
    })

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        const FormDataInput = new FormData();

        FormDataInput.append('nim', formValue.nim);
        FormDataInput.append('id_matkul', formValue.id_matkul);
        FormDataInput.append('nilai', formValue.nilai);
        alert("nilai berhasil ditambahkan")
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5019/api/Dosen',
                data: FormDataInput,
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>

            <div className='row'>
                <div className='col-2'>
                </div>
                <div className='col-10'>
                    <h2 className='text-center'>Tambah Nilai Mahasiswa</h2>
                    <div className='mt-3'>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="nim" class="form-label">NIM</label>
                                <input type="number" name='nim' class="form-control" id="nim" placeholder="Masukkan NIM" value={formValue.nim} onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="id_matkul" class="form-label">Id Matkul</label>
                                <input type="number" name='id_matkul' class="form-control" id="id_matkul" placeholder="Masukkan Id Matkul" value={formValue.id_matkul} onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="nilai" class="form-label">Nilai</label>
                                <input type="number" class="form-control" name='nilai' id="nilai" placeholder="Masukkan Nilai" value={formValue.nilai} onChange={handleChange}/>
                            </div>
                            <button type='submit' className='btn btn-primary'>Tambah</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNilaiMhs;