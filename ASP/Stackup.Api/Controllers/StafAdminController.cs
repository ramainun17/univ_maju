using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class StafAdminController : ControllerBase
{
    private readonly DbStafAdmin _dbStafAdmin;
    Response response = new Response();
    public StafAdminController(IConfiguration configuration){
        _dbStafAdmin = new DbStafAdmin(configuration);
    }

    //GET: api/StafAdminMahasiswa
    [HttpGet("mahasiswa")] 
    public IActionResult GetMahasiswas(){
        try
        {
            response.status = 200;
            response.message = "Success";
            response.data = _dbStafAdmin.GetAllMahasiswas();
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //POST: api/StafAdmin/Mahasiswa
    [HttpPost("mahasiswa")]
    public IActionResult CreateMahasiswa([FromBody] Mahasiswa mhs){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.CreateMahasiswa(mhs);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //PUT: api/StafAdmin/Mahasiswa/id
    [HttpPut("mahasiswa/{nim}")]
    public IActionResult UpdateMahasiswa(int nim, [FromBody] Mahasiswa mhs){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.UpdateMahasiswa(nim, mhs);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //DELETE: api/StafAdmin/Mahasiswa/id
    [HttpDelete("mahasiswa/{nim}")]
    public IActionResult DeleteMahasiswa(int nim){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.DeleteMahasiswa(nim);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }


    //GET: api/StafAdmin/Dosen
    [HttpGet("dosen")]
    public IActionResult GetDosens(){
        try
        {
            response.status = 200;
            response.message = "Success";
            response.data = _dbStafAdmin.GetAllDosens();
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //POST: api/StafAdmin/Dosen
    [HttpPost("dosen")]
    public IActionResult CreateDosen([FromBody] Dosen dsn){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.CreateDosen(dsn);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //PUT: api/StafAdmin/Dosen/id
    [HttpPut("dosen/{id_dosen}")]
    public IActionResult UpdateDosen(int id_dosen, [FromBody] Dosen dsn){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.UpdateDosen(id_dosen, dsn);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //DELETE: api/StafAdmin/Dosen/id
    [HttpDelete("dosen/{id_dosen}")]
    public IActionResult DeleteDosen(int id_dosen){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.DeleteDosen(id_dosen);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }


    //GET: api/StafAdmin/Matkul
    [HttpGet("matkul")]
    public IActionResult GetMatkuls(){
        try
        {
            response.status = 200;
            response.message = "Success";
            response.data = _dbStafAdmin.GetAllMatkuls();
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //POST: api/StafAdmin/Matkul
    [HttpPost("matkul")]
    public IActionResult CreateMatkul([FromBody] Matkul mk){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.CreateMatkul(mk);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //PUT: api/StafAdmin/Matkul/id
    [HttpPut("matkul/{id_matkul}")]
    public IActionResult UpdateMatkul(int id_matkul, [FromBody] Matkul mk){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.UpdateMatkul(id_matkul, mk);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
    //DELETE: api/StafAdmin/Matkul/id
    [HttpDelete("matkul/{id_matkul}")]
    public IActionResult DeleteMatkul(int id_matkul){
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbStafAdmin.DeleteMatkul(id_matkul);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

}