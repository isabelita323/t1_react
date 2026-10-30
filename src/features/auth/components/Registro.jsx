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

export const Registro = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setError('');

    if (onSubmit) {
      onSubmit({ name, email, password });
    } else {
      alert('El registro todavía no está conectado a un sistema de autenticación.');
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
          className="card w-100"
          style={{
            maxWidth: 460,
            backgroundColor: colors.white,
            border: `1px solid ${colors.line}`,
            borderRadius: 24,
            boxShadow: '0 12px 40px rgba(100, 55, 75, 0.08)',
          }}
        >
          <div className="card-body p-4 p-md-5">
            <NavLink
              to="/"
              className="text-decoration-none d-inline-block mb-4"
              style={displayFont}
            >
              <span style={{ fontSize: '1.8rem', letterSpacing: '0.12em' }}>
                PASO
              </span>
              <span className="ms-2" style={{ color: colors.accent }}>♡</span>
            </NavLink>

            <div className="mb-4">
              <p
                className="small mb-2"
                style={{ color: colors.accent, letterSpacing: '0.12em', fontWeight: 600 }}
              >
                ÚNETE A PASO
              </p>
              <h1 className="mb-2" style={{ ...displayFont, fontSize: '2.2rem' }}>
                Crea tu cuenta
              </h1>
              <p className="mb-0" style={{ color: colors.muted, lineHeight: 1.7 }}>
                Regístrate para disfrutar de tu experiencia PASO.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="registroNombre" className="form-label fw-semibold small">
                  Nombre
                </label>
                <input
                  id="registroNombre"
                  className="form-control"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  style={{ borderColor: colors.line, borderRadius: 12, padding: '12px 14px' }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="registroEmail" className="form-label fw-semibold small">
                  Correo electrónico
                </label>
                <input
                  id="registroEmail"
                  type="email"
                  className="form-control"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  style={{ borderColor: colors.line, borderRadius: 12, padding: '12px 14px' }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="registroPassword" className="form-label fw-semibold small">
                  Contraseña
                </label>
                <input
                  id="registroPassword"
                  type="password"
                  className="form-control"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={8}
                  style={{ borderColor: colors.line, borderRadius: 12, padding: '12px 14px' }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="registroConfirmacion" className="form-label fw-semibold small">
                  Confirmar contraseña
                </label>
                <input
                  id="registroConfirmacion"
                  type="password"
                  className="form-control"
                  autoComplete="new-password"
                  value={passwordConfirmation}
                  onChange={(event) => setPasswordConfirmation(event.target.value)}
                  required
                  minLength={8}
                  aria-describedby={error ? 'registroError' : undefined}
                  style={{ borderColor: colors.line, borderRadius: 12, padding: '12px 14px' }}
                />
              </div>

              {error && (
                <p id="registroError" className="small text-danger" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-lg w-100 text-white mt-2"
                style={{
                  backgroundColor: colors.accent,
                  borderColor: colors.accent,
                  borderRadius: 30,
                  padding: 12,
                }}
              >
                Crear cuenta
              </button>
            </form>

            <p className="text-center small mt-4 mb-0" style={{ color: colors.muted }}>
              ¿Ya tienes una cuenta?
              <NavLink
                to="/Login"
                className="text-decoration-none fw-semibold ms-1"
                style={{ color: colors.accent }}
              >
                Inicia sesión
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registro;
