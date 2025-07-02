import { motion } from 'framer-motion';

export default function ServicioCard({ img, titulo, descripcion, delay = 0 }) {
  return (
    <motion.div
      className="servicio-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)' }}
      style={{ cursor: 'pointer' }}
    >
      <img src={img} alt={titulo} />
      <div className="servicio-info">
        <h5>{titulo}</h5>
        <p>{descripcion}</p>
      </div>
    </motion.div>
  );
}
