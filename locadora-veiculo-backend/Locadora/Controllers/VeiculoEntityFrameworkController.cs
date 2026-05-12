using Locadora.Models;
using Locadora.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VeiculoEntityFrameworkController : ControllerBase
    {
        private readonly VeiculoRepositoryEntityFramework _repositorio;

        public VeiculoEntityFrameworkController(VeiculoRepositoryEntityFramework repositorio)
        {
            _repositorio = repositorio;
        }

        [HttpGet]
        public ActionResult<List<Veiculo>> Listar()
        {
            return Ok(_repositorio.Listar());
        }

        [HttpGet("{id}")]
        public ActionResult<Veiculo> ObterPorId(int id)
        {
            var veiculo = _repositorio.ObterPorId(id);
            if (veiculo == null)
                return NotFound();

            return Ok(veiculo);
        }

        [HttpPost]
        public ActionResult<Veiculo> Inserir([FromBody] Veiculo veiculo)
        {
            var criado = _repositorio.Inserir(veiculo);
            return CreatedAtAction(nameof(ObterPorId), new { id = criado.Id }, criado);
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] Veiculo veiculo)
        {
            if (id != veiculo.Id)
                return BadRequest("O Id da rota deve ser igual ao Id do corpo.");

            if (!_repositorio.Atualizar(veiculo))
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            if (!_repositorio.Excluir(id))
                return NotFound();

            return NoContent();
        }
    }
}
