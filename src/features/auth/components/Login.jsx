
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const colors = {
  paper: '#fffaf8',
  pink: '#f5dce3',
  line: '#ead4dc',
  ink: '#292329',
  muted: '#786b73',
  accent: '#c65f7d',
  white: '#ffffff',
};

const displayFont = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontWeight: 700,
  color: colors.ink,
};

const inputStyle = {
  backgroundColor: colors.white,
  borderColor: colors.line,
  borderRadius: '12px',
  padding: '12px 14px',
};

export const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({
        email,
        password,
        remember,
      });
    } else {
      alert('El inicio de sesión todavía no está conectado a un sistema de autenticación.');
    }
  };

  return (
    <main
      style={{
        backgroundColor: colors.paper,
        backgroundImage: `linear-gradient(135deg, ${colors.paper}, ${colors.pink})`,
      }}
    >
      <div
        className="container d-flex align-items-center justify-content-center py-5"
        style={{ minHeight: '75vh' }}
      >
        <div
          className="card w-100 overflow-hidden"
          style={{
            maxWidth: 460,
            backgroundColor: colors.white,
            border: `1px solid ${colors.line}`,
            borderRadius: '24px',
            boxShadow: '0 12px 40px rgba(100, 55, 75, 0.08)',
          }}
        >
          <div className="card-body p-4 p-md-5">

            {/* Marca */}
            <NavLink
              to="/"
              className="text-decoration-none d-inline-block mb-4"
              style={displayFont}
            >
              <span style={{ fontSize: '1.8rem', letterSpacing: '0.12em' }}>
                PASO
              </span>
              <span
                className="ms-2"
                style={{ color: colors.accent }}
              >
                ♡
              </span>
            </NavLink>

            {/* Encabezado */}
            <div className="mb-4">
              <p
                className="small mb-2"
                style={{
                  color: colors.accent,
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                }}
              >
                QUÉ BUENO TENERTE AQUÍ
              </p>

              <h1
                className="mb-3"
                style={{
                  ...displayFont,
                  fontSize: '2.2rem',
                  lineHeight: 1.2,
                }}
              >
                ¡Hola de nuevo!
              </h1>

              <p
                className="mb-0"
                style={{ color: colors.muted, lineHeight: 1.7 }}
              >
                Inicia sesión para explorar tus pedidos y
                disfrutar de tu experiencia PASO.
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="loginEmail"
                  className="form-label fw-semibold small"
                  style={{ color: colors.ink }}
                >
                  Correo electrónico
                </label>

                <input
                  type="email"
                  className="form-control"
                  style={inputStyle}
                  id="loginEmail"
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="loginPassword"
                  className="form-label fw-semibold small"
                  style={{ color: colors.ink }}
                >
                  Contraseña
                </label>

                <input
                  type="password"
                  className="form-control"
                  style={inputStyle}
                  id="loginPassword"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="loginRemember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    style={{ accentColor: colors.accent }}
                  />

                  <label
                    className="form-check-label small"
                    htmlFor="loginRemember"
                    style={{ color: colors.muted }}
                  >
                    Recordarme
                  </label>
                </div>

                <NavLink
                  to="/recuperar"
                  className="small text-decoration-none"
                  style={{ color: colors.accent }}
                >
                  ¿Olvidaste tu contraseña?
                </NavLink>
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 text-white"
                style={{
                  backgroundColor: colors.accent,
                  borderColor: colors.accent,
                  borderRadius: '30px',
                  padding: '12px',
                }}
              >
                Iniciar sesión →
              </button>

              <div className="d-flex align-items-center my-4">
                <hr
                  className="flex-grow-1 m-0"
                  style={{ borderColor: colors.line, opacity: 1 }}
                />

                <span
                  className="px-3 small"
                  style={{ color: colors.muted }}
                >
                  Tu estilo comienza aquí
                </span>

                <hr
                  className="flex-grow-1 m-0"
                  style={{ borderColor: colors.line, opacity: 1 }}
                />
              </div>

              <p className="text-center small mb-0" style={{ color: colors.muted }}>
                ¿Todavía no tienes una cuenta?

                <NavLink
                  to="/Registro"
                  className="text-decoration-none fw-semibold ms-1"
                  style={{ color: colors.accent }}
                >
                  Regístrate
                </NavLink>
              </p>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
