using Microsoft.AspNetCore.Http.HttpResults;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Numerics;
using System.Reflection;
using System.Runtime.ConstrainedExecution;
using System.Text.RegularExpressions;

namespace Locadora.Models
{
    public class Veiculo
    {

        public int Id { set; get; }

        public string Marca { set; get; }

        public string Modelo { set; get; }

        public string Placa { set; get; }   

        public int Ano { set; get; }    

        public string Combustivel { set; get; } /* eletrico, etanol, gasolina, diesel, flex, hibrido */

        public string Categoria { set; get; }


        public bool Disponivel { set; get; }

        public string Cor { set; get; }
    }



//    CREATE TABLE IF NOT EXISTS Veiculo(
//   Id INT PRIMARY KEY AUTO_INCREMENT,
//   Marca VARCHAR(150),
//   Modelo VARCHAR(200),
//   Placa VARCHAR(7),
//   Ano INT,
//   Combustivel VARCHAR(50), /* eletrico, etanol, gasolina, diesel, flex, hibrido */
//   Categoria VARCHAR(50),
//   Disponivel BIT,
//   Chassi VARCHAR(100),
//   Cor VARCHAR(20)
//);
}
