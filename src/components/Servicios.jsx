import React from 'react';
import ServicioCard from './ServicioCard';
import servicio1 from '../assets/ciudad1.webp';
import servicio2 from '../assets/palacio_de_justicia_2.webp';
import servicio3 from '../assets/registro-de-la-propiedad.webp';
import servicio4 from '../assets/ministerio-de-economia.jpg';
import servicio5 from '../assets/Municipalidad.jpg';
import servicio6 from '../assets/RegistroCABA.jpg';
import servicio7 from '../assets/Ciudad3.jpg';
import servicio8 from '../assets/munilaplata.webp';

const servicios = [
  {
    img: servicio1,
    titulo: 'Localización y constatación de domicilio',
    descripcion: 'Nos dirigimos al domicilio declarado para verificar su existencia. Entregamos un informe con fotos y detalles precisos para facilitar la tarea del notificador.',
  },
  {
    img: servicio2,
    titulo: 'Diligenciamientos judiciales',
    descripcion: 'Realizamos presentaciones de cédulas de notificación y oficios ante organismos públicos y privados. Tramitamos diligencias en juzgados de paz de la Provincia de Buenos Aires.',
  },
  {
    img: servicio3,
    titulo: 'Trámites en el Registro de la Propiedad',
    descripcion: 'Gestionamos inscripciones (subastas, sucesiones, cesiones), informes de dominio, inhibiciones y consultas al índice de titulares.',
  },
  {
    img: servicio4,
    titulo: 'Dirección de Catastro',
    descripcion: 'Trámites ante Catastro de Provincia de Buenos Aires: DDJJ de sellos, certificado catastral, valuación fiscal, cédula y plancheta.',
  },
  {
    img: servicio5,
    titulo: 'Habilitaciones municipales',
    descripcion: 'Tramitamos habilitaciones y presentaciones ante la Municipalidad de La Plata, obras particulares y más.',
  },
  {
    img: servicio6,
    titulo: 'Registro Civil',
    descripcion: 'Solicitamos partidas (nacimiento, defunción, matrimonio) e inscripción de divorcios tanto en Provincia como en CABA.',
  },
  {
    img: servicio7,
    titulo: 'Mensajería legal y general',
    descripcion: 'Realizamos entregas y trámites en La Plata, CABA, Provincia de Buenos Aires y el interior del país (a consultar).',
  },
  {
    img: servicio8,
    titulo: 'Libre deuda municipal',
    descripcion: 'Solicitamos liquidación de deuda, trámites con apremios, obras particulares, mensura, y notas administrativas o judiciales.',
  },
];


export default function Servicios() {
  return (
    <section id="servicios" className="container py-5 seccion-servicios">
      <h2 className="text-center mb-4">Servicios</h2>
      <p className="descripcion-servicios text-center mb-5">
  Realizamos <strong>gestiones legales y administrativas</strong> ante organismos públicos y privados. Nuestro equipo brinda un servicio <strong>ágil, serio y personalizado</strong> en La Plata, Provincia de Buenos Aires, CABA y todo el país.
</p>

      <div className="grilla-servicios">
        {servicios.map(({ img, titulo, descripcion }, idx) => (
          <ServicioCard
            key={idx}
            img={img}
            titulo={titulo}
            descripcion={descripcion}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
