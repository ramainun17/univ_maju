
using System.Data;
using MySql.Data.MySqlClient;

public class DbMahasiswa
{
    private readonly string connectionString;
    private readonly MySqlConnection _connection;
    public DbMahasiswa(IConfiguration configuration)
    {
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    // Get Nilai Mahasiswa
    public List<Mahasiswa> GetAllMahasiswas()
    {
        List<Mahasiswa> mahasiswaList = new List<Mahasiswa>();
        try
        {
            using (MySqlConnection connection =  new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM mahasiswa";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Mahasiswa mahasiswa = new Mahasiswa
                        {
                            nim = Convert.ToInt32(reader["nim"]),
                            nama = reader["nama"].ToString(),
                            prodi = reader["prodi"].ToString(),
                            
                        };
                        mahasiswaList.Add(mahasiswa);
                    }
                }

            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return mahasiswaList;
    }

    //Get Nilai Mahasiswa per NIM
    public List<NilaiDetail> GetNilaiByNIM(int nim)
    {
        List<NilaiDetail> nilaiList = new List<NilaiDetail>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT mahasiswa.nim, mahasiswa.nama, matkul.nama_matkul, nilai.nilai FROM nilai JOIN mahasiswa ON nilai.nim = mahasiswa.nim JOIN matkul ON nilai.id_matkul = matkul.id_matkul WHERE nilai.nim = @NIM";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@NIM", nim);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        NilaiDetail nilaiDetail = new NilaiDetail
                        {
                            Nim = Convert.ToInt32(reader["nim"]),
                            NamaMahasiswa = reader["nama"].ToString(),
                            NamaMatkul = reader["nama_matkul"].ToString(),
                            Nilai = Convert.ToInt32(reader["nilai"])
                        };
                        nilaiList.Add(nilaiDetail);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return nilaiList;
    }
}