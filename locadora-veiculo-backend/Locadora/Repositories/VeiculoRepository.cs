using Locadora.Models;
using MySql.Data.MySqlClient;

namespace Locadora.Repositories
{
    public class VeiculoRepository
    {
        private readonly string _connectionString;

        public VeiculoRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public List<Veiculo> Listar()
        {
            var veiculos = new List<Veiculo>();

            using var conexao = new MySqlConnection(_connectionString);
            conexao.Open();

            const string sql = @"SELECT Id, Marca, Modelo, Placa, Ano, Combustivel,
                                        Categoria, Disponivel, Chassi, Cor
                                 FROM Veiculo;";

            using var comando = new MySqlCommand(sql, conexao);
            using var leitor = comando.ExecuteReader();

            while (leitor.Read())
            {
                veiculos.Add(MapearVeiculo(leitor));
            }
            conexao.Close();
            return veiculos;
        }

        public Veiculo ObterPorId(int id)
        {
            using var conexao = new MySqlConnection(_connectionString);
            conexao.Open();

            const string sql = @"SELECT Id, Marca, Modelo, Placa, Ano, Combustivel,
                                        Categoria, Disponivel, Chassi, Cor
                                 FROM Veiculo
                                 WHERE Id = @Id;";

            using var comando = new MySqlCommand(sql, conexao);
            comando.Parameters.AddWithValue("@Id", id);

            using var leitor = comando.ExecuteReader();
            if (leitor.Read())
            {
                return MapearVeiculo(leitor);
            }

            return null;
        }

        public Veiculo Inserir(Veiculo veiculo)
        {
            using var conexao = new MySqlConnection(_connectionString);
            conexao.Open();

            const string sql = @"INSERT INTO Veiculo
                                    (Marca, Modelo, Placa, Ano, Combustivel,
                                     Categoria, Disponivel, Chassi, Cor)
                                 VALUES
                                    (@Marca, @Modelo, @Placa, @Ano, @Combustivel,
                                     @Categoria, @Disponivel, @Chassi, @Cor);
                                 SELECT LAST_INSERT_ID();";

            using var comando = new MySqlCommand(sql, conexao);
            AdicionarParametros(comando, veiculo);

            veiculo.Id = Convert.ToInt32(comando.ExecuteScalar());
            return veiculo;
        }

        public bool Atualizar(Veiculo veiculo)
        {
            using var conexao = new MySqlConnection(_connectionString);
            conexao.Open();

            const string sql = @"UPDATE Veiculo SET
                                    Marca = @Marca,
                                    Modelo = @Modelo,
                                    Placa = @Placa,
                                    Ano = @Ano,
                                    Combustivel = @Combustivel,
                                    Categoria = @Categoria,
                                    Disponivel = @Disponivel,
                                    Chassi = @Chassi,
                                    Cor = @Cor
                                 WHERE Id = @Id;";

            using var comando = new MySqlCommand(sql, conexao);
            comando.Parameters.AddWithValue("@Id", veiculo.Id);
            AdicionarParametros(comando, veiculo);

            return comando.ExecuteNonQuery() > 0;
        }

        public bool Excluir(int id)
        {
            using var conexao = new MySqlConnection(_connectionString);
            conexao.Open();

            const string sql = "DELETE FROM Veiculo WHERE Id = @Id;";

            using var comando = new MySqlCommand(sql, conexao);
            comando.Parameters.AddWithValue("@Id", id);

            return comando.ExecuteNonQuery() > 0;
        }

        private static void AdicionarParametros(MySqlCommand comando, Veiculo veiculo)
        {
            comando.Parameters.AddWithValue("@Marca", veiculo.Marca);
            comando.Parameters.AddWithValue("@Modelo", veiculo.Modelo);
            comando.Parameters.AddWithValue("@Placa", veiculo.Placa);
            comando.Parameters.AddWithValue("@Ano", veiculo.Ano);
            comando.Parameters.AddWithValue("@Combustivel", veiculo.Combustivel);
            comando.Parameters.AddWithValue("@Categoria", veiculo.Categoria);
            comando.Parameters.AddWithValue("@Disponivel", veiculo.Disponivel);
            comando.Parameters.AddWithValue("@Chassi", veiculo.Chassi);
            comando.Parameters.AddWithValue("@Cor", veiculo.Cor);
        }

        private static Veiculo MapearVeiculo(MySqlDataReader leitor)
        {
            return new Veiculo
            {
                Id = leitor.GetInt32("Id"),
                Marca = leitor["Marca"] as string,
                Modelo = leitor["Modelo"] as string,
                Placa = leitor["Placa"] as string,
                Ano = leitor.GetInt32("Ano"),
                Combustivel = leitor["Combustivel"] as string,
                Categoria = leitor["Categoria"] as string,
                Disponivel = leitor.GetBoolean("Disponivel"),
                Chassi = leitor["Chassi"] as string,
                Cor = leitor["Cor"] as string
            };
        }
    }
}
