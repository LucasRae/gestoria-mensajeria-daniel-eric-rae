import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Contacto() {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oghh5fu',
      'template_mgxpf5s',
      form.current,
      'xeguMl2GF3q7hvbv8'
    )
    .then(() => {
      alert('Mensaje enviado correctamente');
      form.current.reset();
    })
    .catch((error) => {
      alert('Error al enviar: ' + error.text);
    });
  };

  return (
    <section id="contacto" className="container py-5">
      <h2 className="mb-4 text-center text-primary border-bottom pb-2">Contacto</h2>

      <div className="row gy-4">
        {/* Formulario */}
        <form
          ref={form}
          onSubmit={enviarCorreo}
          className="col-12 col-md-7 col-lg-6 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <div className="mb-3">
            <label className="form-label text-light">Apellido y nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Apellido, nombre"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="tucorreo@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Mensaje</label>
            <textarea
              name="mensaje"
              className="form-control"
              rows="6"
              placeholder="Escribí tu mensaje"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Enviar
          </button>
        </form>

        {/* Información lateral */}
        <aside className="col-12 col-md-5 col-lg-4 mx-auto" style={{ maxWidth: '350px' }}>
          {/* Redes sociales */}
          <div className="redes-sociales mb-4 text-center text-light">
            <h3 className="fw-bold mb-3 border-bottom pb-2">Sígueme en redes</h3>
            <div className="d-flex justify-content-center gap-4 fs-3">
              <a
                href="https://www.instagram.com/danielericrae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="instagram text-decoration-none text-light"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/DanielEricRae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="facebook text-decoration-none text-light"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://wa.me/5492215380940"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="whatsapp text-decoration-none text-light"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Horario de atención */}
          <div className="horario-atencion bg-light rounded p-4 shadow-sm text-center text-dark">
            <h3 className="fw-bold mb-3 border-bottom pb-2 text-primary">Horario de atención</h3>

            <div className="dia d-flex align-items-center justify-content-center gap-2 fw-semibold fs-5 mb-1">
              <i className="bi bi-clock text-primary fs-4"></i>
              <span>Lunes — viernes</span>
            </div>
            <div className="hora fs-6 mb-3">8:00 — 18:00</div>

            <div className="dia d-flex align-items-center justify-content-center gap-2 fw-semibold fs-5 mb-1">
              <i className="bi bi-clock text-primary fs-4"></i>
              <span>Sábados</span>
            </div>
            <div className="hora fs-6">10:00 — 13:00</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
