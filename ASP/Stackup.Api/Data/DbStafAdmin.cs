using System.Data;
using MySql.Data.MySqlClient;

public class DbStafAdmin
{
    private readonly string connectionString;
    private readonly MySqlConnection _connection;
    public DbStafAdmin(IConfiguration configuration){
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    //CRUD MAHASISWA
    public List<Mahasiswa> GetAllMahasiswas(){
        List<Mahasiswa> mhslist = new List<Mahasiswa>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM mahasiswa";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Mahasiswa mhs = new Mahasiswa{
                            nim = Convert.ToInt32(reader["NIM"]),
                            nama = reader["Nama"].ToString(),
                            prodi = reader["Prodi"].ToString(),
                        };
                        mhslist.Add(mhs);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return mhslist;
    }
    public int CreateMahasiswa(Mahasiswa mhs){
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO mahasiswa (nim, nama, prodi) VALUES (@NIM, @Nama, @Prodi)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@NIM", mhs.nim);
                command.Parameters.AddWithValue("@Nama", mhs.nama);
                command.Parameters.AddWithValue("@Prodi", mhs.prodi);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    public int UpdateMahasiswa(int nim, Mahasiswa mhs){
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE mahasiswa SET nama = @Nama, prodi = @Prodi WHERE nim = @NIM";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", mhs.nama);
                command.Parameters.AddWithValue("@Prodi", mhs.prodi);
                command.Parameters.AddWithValue("@NIM", nim);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    public int DeleteMahasiswa(int nim){
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM mahasiswa WHERE nim = @NIM";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@NIM", nim);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    //CRUD DOSEN
    public List<Dosen> GetAllDosens(){
        List<Dosen> dsnlist = new List<Dosen>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM dosen";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Dosen dsn = new Dosen{
                            id_dosen = Convert.ToInt32(reader["Id_dosen"]),
                            nama = reader["Nama"].ToString(),
                        };
                        dsnlist.Add(dsn);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return dsnlist;
    }
    public int CreateDosen(Dosen dsn){
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO dosen (nama) VALUES (@Nama)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", dsn.nama);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    public int UpdateDosen(int id_dosen, Dosen mhs){
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE dosen SET nama = @Nama WHERE id_dosen = @Id_dosen";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", mhs.nama);
                command.Parameters.AddWithValue("@Id_dosen", id_dosen);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    public int DeleteDosen(int id_dosen){
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM dosen WHERE id_dosen = @Id_dosen";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id_dosen", id_dosen);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    
    //CRUD MATA KULIAH
    public List<MatkulDetail> GetAllMatkuls(){
        List<MatkulDetail> mkdlist = new List<MatkulDetail>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT matkul.id_matkul, matkul.nama_matkul, dosen.nama FROM `matkul` JOIN dosen ON matkul.id_dosen = dosen.id_dosen;";
                
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        MatkulDetail mkd = new MatkulDetail{
                            id_matkul = Convert.ToInt32(reader["Id_matkul"]),
                            nama_matkul = reader["Nama_matkul"].ToString(),
                            nama = reader["Nama"].ToString(),
                        };
                        mkdlist.Add(mkd);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return mkdlist;
    }
    public int CreateMatkul(Matkul mk){
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO matkul (nama_matkul, id_dosen) VALUES (@Nama_matkul, @Id_dosen)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama_matkul", mk.nama_matkul);
                command.Parameters.AddWithValue("@Id_dosen", mk.id_dosen);
                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    public int UpdateMatkul(int id_matkul, Matkul mk){
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE matkul SET nama_matkul = @Nama_matkul, id_dosen = @Id_dosen WHERE id_matkul = @Id_matkul";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama_matkul", mk.nama_matkul);
                command.Parameters.AddWithValue("@Id_dosen", mk.id_dosen);
                command.Parameters.AddWithValue("@Id_matkul", id_matkul);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
    public int DeleteMatkul(int id_matkul){
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM matkul WHERE id_matkul = @Id_matkul";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id_matkul", id_matkul);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

}