
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const colors = {
  paper: '#fffaf8',
  pink: '#f5dce3',
  line: '#ead4dc',
  ink: '#292329',
  muted: '#786b73',
  accent: '#c65f7d',
  soft: '#f9edf1',
  white: '#ffffff',
};

const displayFont = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontWeight: 700,
  color: colors.ink,
};

export const Recuperar = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(email);
    }

    setSent(true);
  };

  return (
    <div
      style={{
        backgroundColor: colors.soft,
        minHeight: '75vh',
      }}
    >
      <div
        className="container d-flex align-items-center justify-content-center py-5"
        style={{ minHeight: '75vh' }}
      >
        <div
          className="card w-100 shadow-sm"
          style={{
            maxWidth: 460,
            backgroundColor: colors.paper,
            border: `1px solid ${colors.line}`,
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          <div className="card-body p-4 p-md-5">
            <NavLink
              to="/"
              className="text-decoration-none d-inline-block mb-4"
              style={{
                ...displayFont,
                fontSize: 27,
                letterSpacing: '-1px',
              }}
            >
              PASO<span style={{ color: colors.accent }}>.</span>
            </NavLink>

            {sent ? (
              <div>
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: colors.pink,
                    color: colors.accent,
                    fontSize: 28,
                  }}
                >
                  ✓
                </div>

                <h1 className="h2 mb-3" style={displayFont}>
                  Revisa tu correo
                </h1>

                <p
                  className="mb-4"
                  style={{ color: colors.muted, lineHeight: 1.7 }}
                >
                  Si <strong>{email}</strong> está registrado, recibirás
                  instrucciones para restablecer tu contraseña.
                </p>

                <NavLink
                  to="/Login"
                  className="btn btn-lg w-100 text-white"
                  style={{
                    backgroundColor: colors.accent,
                    borderColor: colors.accent,
                    borderRadius: 12,
                    padding: '12px',
                  }}
                >
                  Volver a iniciar sesión
                </NavLink>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p
                    className="text-uppercase small fw-semibold mb-2"
                    style={{
                      color: colors.accent,
                      letterSpacing: 2,
                    }}
                  >
                    Recuperación de cuenta
                  </p>

                  <h1 className="h2 mb-3" style={displayFont}>
                    ¿Olvidaste tu contraseña?
                  </h1>

                  <p
                    className="mb-0"
                    style={{ color: colors.muted, lineHeight: 1.7 }}
                  >
                    No te preocupes. Escribe el correo electrónico asociado
                    a tu cuenta y te indicaremos cómo continuar.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="recuperarEmail"
                      className="form-label fw-semibold"
                      style={{ color: colors.ink }}
                    >
                      Correo electrónico
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      style={{
                        backgroundColor: colors.white,
                        borderColor: colors.line,
                        borderRadius: 12,
                        padding: '12px 15px',
                      }}
                      id="recuperarEmail"
                      placeholder="tucorreo@ejemplo.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white"
                    style={{
                      backgroundColor: colors.accent,
                      borderColor: colors.accent,
                      borderRadius: 12,
                      padding: '12px',
                      fontWeight: 600,
                    }}
                  >
                    Enviar instrucciones
                  </button>

                  <div className="text-center mt-4">
                    <NavLink
                      to="/Login"
                      className="text-decoration-none small fw-semibold"
                      style={{ color: colors.accent }}
                    >
                      ← Volver a iniciar sesión
                    </NavLink>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperar;
