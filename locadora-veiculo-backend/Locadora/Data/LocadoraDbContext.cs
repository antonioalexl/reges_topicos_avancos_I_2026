using Locadora.Models;
using Microsoft.EntityFrameworkCore;

namespace Locadora.Data
{
    public class LocadoraDbContext : DbContext
    {
        public LocadoraDbContext(DbContextOptions<LocadoraDbContext> options) : base(options)
        {
        }

        public DbSet<Veiculo> Veiculos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Veiculo>(entidade =>
            {
                entidade.ToTable("Veiculo");
                entidade.HasKey(v => v.Id);

                entidade.Property(v => v.Marca).HasMaxLength(50).IsRequired();
                entidade.Property(v => v.Modelo).HasMaxLength(50).IsRequired();
                entidade.Property(v => v.Placa).HasMaxLength(10).IsRequired();
                entidade.Property(v => v.Combustivel).HasMaxLength(20);
                entidade.Property(v => v.Categoria).HasMaxLength(30);
                entidade.Property(v => v.Chassi).HasMaxLength(30);
                entidade.Property(v => v.Cor).HasMaxLength(20);
            });
        }
    }
}
