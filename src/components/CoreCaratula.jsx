import danielEricImg from '../assets/daniel_eric_rae.jpg'; // Asegurate de que la extensión sea correcta

export default function CoreCaratula() {
  return (
    <div className="core-caratula text-center">
      <img
        src={danielEricImg}
        alt="Daniel Eric Rae"
        className="caratula-img"
      />
      <h3 className="caratula-titulo mt-3">Daniel Eric Rae</h3>
     <p className="caratula-parrafo mt-3">
  Brindamos <strong>servicios de gestoría y mensajería</strong> con alcance en <strong>La Plata</strong> y toda la <strong>Provincia de Buenos Aires</strong>. Nos especializamos en <strong>diligenciamientos judiciales, trámites documentales</strong> y <strong>gestiones ante organismos públicos</strong>, con un enfoque basado en la <strong>responsabilidad, la eficiencia</strong> y el <strong>trato personalizado</strong>.
</p>

      </div>
  );
}
