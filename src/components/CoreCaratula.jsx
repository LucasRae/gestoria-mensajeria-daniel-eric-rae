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
        Realizamos trámites presenciales y virtuales. Hace más de 30 años
        trabajamos en equipo con la mayor responsabilidad y eficacia. Atendemos
        sus requerimientos con profesionalismo, seriedad y respeto.
      </p>
      </div>
  );
}
