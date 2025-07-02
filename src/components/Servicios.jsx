import React from 'react';
import ServicioCard from './ServicioCard';
import servicio1 from '../assets/Ciudad.jpg';
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
    titulo: 'Localización verificación y constatación de domicilio',
    descripcion: 'El equipo se encarga de acercarse a la ubicación en concreto para LOCALIZAR, VERIFICAR y CONSTATAR la EXISTENCIA del domicilio real de la persona, de manera que se le FACILITE al NOTIFICADOR. A continuación se entrega un informe escrito donde especifique: Cómo llegar y una descripción del lugar, adjuntando fotos del mismo.',
  },
  {
    img: servicio2,
    titulo: 'Diligenciamientos judiciales',
    descripcion: 'Cédula de notificación y oficios a las reparticiones públicas y privadas. Presentaciones en los juzgados de paz Prov. Buenos Aires.',
  },
  {
    img: servicio3,
    titulo: 'Registro de la propiedad',
    descripcion: 'Inscripciones: Subastas, sucesiones: cesión de derechos hereditarios, partición.Solicitud de informe de dominio, inhibición, consulta al índice de titulares, etc.',
  },
  {
    img: servicio4,
    titulo: 'Dirección de Catastro Provincia de Buenos Aires',
    descripcion: 'Declaración Jurada (DDJJ) de sellos. - Certificado de Catastro. - Valuación fiscal. - Cédula y plancheta catastral.',
  },
  {
    img: servicio5,
    titulo: 'Habilitación municipal En la Ciudad de La Plata',
    descripcion: '',
  },
  {
    img: servicio6,
    titulo: 'Registro Civil Provincia de Buenos y CABA',
    descripcion: 'Solicitud de partidas (Mat, Def, Nac.). Inscripción de divorcio.',
  },
  {
    img: servicio7,
    titulo: 'Mensajería en general',
    descripcion: 'Ciudad de La Plata - Provincia de Buenos Aires - CABA - Resto del país (a consultar)',
  },
  {
    img: servicio8,
    titulo: 'Libre deuda Municipal',
    descripcion: 'Liquidación de deuda con Apremio. Diligenciamiento de Plano - Obras particulares, mensura, etc. Nota - Trámites administrativos y / o judicial a consultar',
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="container py-5 seccion-servicios">
      <h2 className="text-center mb-4">Servicios</h2>
      <p className="descripcion-servicios text-center mb-5">
        Ofrecemos un completo abanico de soluciones en gestoría y mensajería. Nuestra experiencia asegura un servicio ágil, confiable y personalizado para cada cliente.
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
