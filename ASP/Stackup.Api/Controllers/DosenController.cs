using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]

public class DosenController : ControllerBase
{
    private readonly DbDosen _DbDosen;
    Response response = new Response();
    public DosenController(IConfiguration configuration)
    {
        _DbDosen = new DbDosen (configuration);
    }

    // GET: api/Dosen
    [HttpGet]
    public IActionResult GetNilai()
    {
        try
        {
            response.status = 200;
            response.message = "Success";
            response.data = _DbDosen.GetNilaiMhs();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }

        return Ok(response);
    }

    [HttpGet("{id}")]
    public IActionResult GetNilaiById(int id)
    {
        try
        {
            response.status = 200;
            response.message = "Success";
            response.data = _DbDosen.GetNilaiById(id);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    // POST: api/Dosen
    [HttpPost]
    public IActionResult CreateNilai([FromBody] Nilai nilai)
    {
        try
        {
            response.status = 200;
            response.message = "Succes created nilai";
            _DbDosen.CreateNilai(nilai);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    // PUT: api/Dosen/id
    [HttpPut("{id}")]
    public IActionResult UpdateNilai(int id, [FromBody] Nilai nilai)
    {
        try
        {
            response.status = 200;
            response.message = "Succes update Nilai";
            _DbDosen.UpdateNilai(id, nilai);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }

        return Ok(response);
    }

    [HttpDelete("dosen/{id}")]
    public IActionResult DeleteNilai(int id){
        try
        {
            response.status = 200;
            response.message = "Success deleted";
            _DbDosen.DeleteNilai(id);
        }
        catch (Exception ex)
        {
            
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}