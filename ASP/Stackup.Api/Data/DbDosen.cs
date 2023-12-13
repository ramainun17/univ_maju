using   System.Data;
using MySql.Data.MySqlClient;

public class DbDosen
{
    private readonly string connectionString;
    private readonly MySqlConnection _connection;
    public DbDosen(IConfiguration configuration)
    {
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    // Get Nilai
    public List<Nilai> GetNilaiMhs()
    {
        List<Nilai> nilaiList = new List<Nilai>();

        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "select * from nilai";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Nilai nilai = new Nilai
                        {
                            id_nilai = Convert.ToInt32(reader["id_nilai"]),
                            nim = Convert.ToInt32(reader["nim"]),
                            id_matkul = Convert.ToInt32(reader["id_matkul"]),
                            nilai = Convert.ToInt32(reader["nilai"])
                        };
                        nilaiList.Add(nilai);
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

    public List<Nilai> GetNilaiById(int id)
    {
        List<Nilai> nilaiList = new List<Nilai>();
        try{
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = $"select * from nilai where id_nilai = {id} order by nim";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Nilai nilai = new Nilai
                        {
                            id_matkul = Convert.ToInt32(reader["id_matkul"]),
                            nim = Convert.ToInt32(reader["nim"]),
                            nilai = Convert.ToInt32(reader["nilai"])
                        };
                        nilaiList.Add(nilai);
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

    // Create Nilai
    public int CreateNilai (Nilai nilai)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "insert into nilai (id_nilai, nim, id_matkul, nilai) values (@Id_nilai, @Nim, @Id_matkul, @Nilai)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id_nilai", nilai.id_nilai);
                command.Parameters.AddWithValue("@Nim", nilai.nim);
                command.Parameters.AddWithValue("@Id_matkul", nilai.id_matkul);
                command.Parameters.AddWithValue("@Nilai", nilai.nilai);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    // Update Nilai
    public int UpdateNilai(int id, Nilai nilai)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "update nilai set id_matkul = @Id_matkul, nilai = @Nilai where id_nilai = @id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id_matkul", nilai.id_matkul);
                command.Parameters.AddWithValue("@Nilai", nilai.nilai);
                command.Parameters.AddWithValue("@id", id);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    public int DeleteNilai(int id){
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM nilai WHERE id_nilai = @id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@id", id);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
}