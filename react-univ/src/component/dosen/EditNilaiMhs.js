import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';


const EditNilaiMhs = () => {

    const { id } = useParams();

    const [formValue, setFormValue] = React.useState({
        nim: '',
        id_matkul: '',
        nilai: ''
    })

    React.useEffect(() => {
        fectData();
    },[])

    const fectData = async () => {
        const response = await axios.get(`http://localhost:5019/api/Dosen/${id}`);
        const data = await response.data.data[0];

        setFormValue(data)
        console.log(data)
    }

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async() => {
        const FormDataInput = new FormData();
        FormDataInput.append('nim', formValue.nim);
        FormDataInput.append('id_matkul', formValue.id_matkul);
        FormDataInput.append('nilai', formValue.nilai);
        alert("data berhasil diubah")
        try{
            const response = await axios({
                method: 'put',
                url: `http://localhost:5019/api/Dosen/${id}`,
                data: FormDataInput,
                headers: {'Content-Type': 'application/json'},
            });
            console.log(response);
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-10'>
                    <h1 className='text-center'>Update nilai nim : {formValue.nim}</h1>
                    <div className='mt-3'>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="nim" class="form-label">NIM</label>
                                <input type="number" name='nim' class="form-control" id="nim" placeholder="Masukkan NIM" value={formValue.nim} onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="id_matkul" class="form-label">Id Matkul</label>
                                <input type="number" name='id_matkul' class="form-control" id="id_matkul" placeholder="Masukkan Id Matkul" value={formValue.id_matkul} onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="nilai" class="form-label">Nilai</label>
                                <input type="number" name='nilai' class="form-control" id="nilai" placeholder="Masukkan NIM" value={formValue.nilai} onChange={handleChange} />
                            </div>
                            <button type="submit" className='btn btn-danger'>Hapus</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNilaiMhs;