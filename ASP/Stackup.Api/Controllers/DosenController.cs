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
    [HttpPut("{nim}")]
    public IActionResult UpdateNilai(int nim, [FromBody] Nilai nilai)
    {
        try
        {
            response.status = 200;
            response.message = "Succes update Nilai";
            _DbDosen.UpdateNilai(nim, nilai);
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }

        return Ok(response);
    }
}
