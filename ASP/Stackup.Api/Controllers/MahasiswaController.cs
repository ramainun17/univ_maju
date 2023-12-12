using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class MahasiswaController : ControllerBase
{
    private readonly DbMahasiswa _dbMahasiswa;
    Response response = new Response();
    public MahasiswaController(IConfiguration configuration)
    {
        _dbMahasiswa = new DbMahasiswa(configuration);
    }

    //GET: api/Mahasiswa
    [HttpGet]
    public IActionResult GetMahasiswas()
    {
        try
        {
            response.status = 200;
            response.message = "Succes";
            response.data = _dbMahasiswa.GetAllMahasiswas();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    //GET: api/Mahasiswa/id
    [HttpGet("{nim}")]
    public IActionResult GetNilaiByNIM(int nim)
    {
        try
        {
            response.status = 200;
            response.message = "Success";
            response.data = _dbMahasiswa.GetNilaiByNIM(nim);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}