
import React from 'react'
import { NavLink } from 'react-router-dom'

const BRAND = 'PASO'

const colors = {
  paper: '#fffaf8',
  pink: '#f5dce3',
  line: '#ead4dc',
  ink: '#292329',
  muted: '#786b73',
  accent: '#c65f7d',
}

const brandStyle = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontWeight: 700,
  letterSpacing: '0.12em',
  color: colors.ink,
}

const headingStyle = {
  color: colors.ink,
  fontWeight: 700,
}

const columns = [
  {
    id: 1,
    title: 'Nuestra tienda',
    links: [
      { label: 'Todo el calzado', to: '/Productos' },
      { label: 'Novedades', to: '/Productos' },
      { label: 'Rick & Morty', to: '/rickandmorty' },
      { label: 'Más populares', to: '/Productos' },
      { label: 'Guía de tallas', to: '/Productos' },
    ],
  },
  {
    id: 2,
    title: 'Encuentra tu estilo',
    links: [
      { label: 'Tenis', to: '/Productos?categoria=Tenis' },
      { label: 'Tacones', to: '/Productos?categoria=Tacones' },
      { label: 'Sandalias', to: '/Productos?categoria=Sandalias' },
      { label: 'Botas', to: '/Productos?categoria=Botas' },
      { label: 'Calzado casual', to: '/Productos?categoria=Casual' },
    ],
  },
  {
    id: 3,
    title: 'Tu cuenta',
    links: [
      { label: 'Iniciar sesión', to: '/Login' },
      { label: 'Mi cuenta', to: '/Login' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.paper,
        borderTop: `1px solid ${colors.line}`,
      }}
    >
      <div className="container py-5">
        <div className="row g-4">

          {/* Información de la marca */}
          <div className="col-12 col-md-4">
            <NavLink
              to="/"
              className="text-decoration-none"
            >
              <p className="fs-2 mb-2" style={brandStyle}>
                {BRAND}
                <span
                  style={{
                    color: colors.accent,
                    marginLeft: '5px',
                  }}
                >
                  ♡
                </span>
              </p>
            </NavLink>

            <p
              className="mb-3"
              style={{
                color: colors.muted,
                maxWidth: 280,
                lineHeight: 1.8,
              }}
            >
              Cada paso cuenta. Encuentra los zapatos que combinan
              con tu personalidad y convierten cada día en una
              oportunidad para destacar.
            </p>

            <p
              className="small mb-0"
              style={{ color: colors.accent }}
            >
              Hecho para tu estilo. ♡
            </p>
          </div>

          {/* Enlaces */}
          {columns.map(({ id, title, links }) => (
            <div key={id} className="col-6 col-md-2">
              <h2
                className="h6 mb-3"
                style={headingStyle}
              >
                {title}
              </h2>

              <ul className="list-unstyled mb-0">
                {links.map(({ label, to }) => (
                  <li key={label} className="mb-2">
                    <NavLink
                      to={to}
                      className="text-decoration-none small"
                      style={{ color: colors.muted }}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información inferior */}
        <div
          className="d-flex flex-column flex-md-row
          justify-content-between align-items-center
          gap-3 pt-4 mt-4 small"
          style={{
            borderTop: `1px solid ${colors.line}`,
            color: colors.muted,
          }}
        >
          <span className="text-center text-md-start">
            © {new Date().getFullYear()} {BRAND}.
            Todos los derechos reservados.
          </span>

          <div className="d-flex gap-3">
            <NavLink
              to="/"
              className="text-decoration-none"
              style={{ color: colors.muted }}
            >
              Privacidad
            </NavLink>

            <NavLink
              to="/"
              className="text-decoration-none"
              style={{ color: colors.muted }}
            >
              Términos y condiciones
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
