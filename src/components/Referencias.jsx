import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Referencias.css';

export default function Referencias() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); 
  // 'once: true' para animar solo una vez
  // margin para activar un poco antes

  return (
    <section id="referencias" className="container py-5 referencias-section" ref={ref}>
      

      <div className="cards-container">
        <motion.div
          className="card card-transparent"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>Así trabajamos</h3>
<ul>
  <li>Primera consulta personalizada</li>
  <li>Elaboración detallada de presupuesto</li>
  <li>Recepción y gestión de documentación</li>
  <li>Seguimiento continuo y actualizado del trámite</li>
  <li>Comunicación permanente con el cliente</li>
  <li>Asesoramiento profesional adaptado a cada caso</li>
  <li>Opciones de pago: efectivo o transferencia bancaria</li>
</ul>

        </motion.div>

     
      </div>
    </section>
  );
}
