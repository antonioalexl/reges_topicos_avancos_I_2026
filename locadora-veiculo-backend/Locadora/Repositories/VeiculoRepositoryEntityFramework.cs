using Locadora.Data;
using Locadora.Models;

namespace Locadora.Repositories
{
    public class VeiculoRepositoryEntityFramework
    {
        private readonly LocadoraDbContext _contexto;

        public VeiculoRepositoryEntityFramework(LocadoraDbContext contexto)
        {
            _contexto = contexto;
        }

        public List<Veiculo> Listar()
        {
            return _contexto.Veiculos.ToList();
        }

        public Veiculo ObterPorId(int id)
        {
            return _contexto.Veiculos.Find(id);
        }

        public Veiculo Inserir(Veiculo veiculo)
        {
            _contexto.Veiculos.Add(veiculo);
            _contexto.SaveChanges();
            return veiculo;
        }

        public bool Atualizar(Veiculo veiculo)
        {
            var existente = _contexto.Veiculos.Find(veiculo.Id);
            if (existente == null)
                return false;

            _contexto.Entry(existente).CurrentValues.SetValues(veiculo);
            return _contexto.SaveChanges() > 0;
        }

        public bool Excluir(int id)
        {
            var veiculo = _contexto.Veiculos.Find(id);
            if (veiculo == null)
                return false;

            _contexto.Veiculos.Remove(veiculo);
            return _contexto.SaveChanges() > 0;
        }
    }
}
