
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const colors = {
  paper: '#fffaf8',
  pink: '#f5dce3',
  line: '#ead4dc',
  accent: '#c65f7d',
  ink: '#292329',
  muted: '#786b73',
};

const brandStyle = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontWeight: 700,
  letterSpacing: '0.12em',
  color: colors.ink,
  fontSize: '1.8rem',
  textDecoration: 'none',
};

const categories = ['Tenis', 'Tacones y zapatos ', 'Zapatos y nueva coleccion', 'Botas', 'Casual'];

export const Header = () => {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      navigate(`/productos?buscar=${encodeURIComponent(search.trim())}`);
      setMenuOpen(false);
    }
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? colors.accent : colors.ink,
    fontWeight: isActive ? 600 : 400,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  });

  return (
    <header>
      <div
        className="text-center py-2"
        style={{
          backgroundColor: colors.pink,
          color: colors.ink,
          fontSize: '0.8rem',
          letterSpacing: '0.04em',
        }}
      >
        Encuentra tu estilo, un paso a la vez ♡
      </div>

      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor: colors.paper,
          borderBottom: `1px solid ${colors.line}`,
          zIndex: 1030,
        }}
      >
        <div className="container-fluid px-3 px-lg-5">
          <Link to="/" style={brandStyle} className="navbar-brand">
            Zapatos Isabella <span style={{ color: colors.accent, marginLeft: 5 }}>♡</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Abrir o cerrar menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              borderColor: colors.line,
              borderRadius: 10,
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`navbar-collapse ${menuOpen ? 'd-flex' : 'collapse'}`}
            style={{
              flexGrow: 1,
              flexBasis: '100%',
            }}
          >
            <ul
              className="navbar-nav align-items-lg-center mx-lg-auto"
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                gap: '8px',
              }}
            >
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className="nav-link px-3"
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="nav-link dropdown-toggle px-3"
                  aria-expanded={categoryOpen}
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  style={{
                    color: colors.ink,
                    border: 0,
                    background: 'transparent',
                  }}
                >
                  Calzado
                </button>

                {categoryOpen && (
                  <ul
                    className="dropdown-menu show border-0 shadow-sm p-2"
                    style={{
                      position: 'absolute',
                      backgroundColor: colors.paper,
                      borderRadius: 12,
                      minWidth: 210,
                      listStyle: 'none',
                    }}
                  >
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          to={`/productos?categoria=${encodeURIComponent(category)}`}
                          className="dropdown-item py-2"
                          style={{ color: colors.ink, borderRadius: 8 }}
                          onClick={() => {
                            setCategoryOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          {category}
                        </Link>
                      </li>
                    ))}

                    <li>
                      <hr style={{ borderColor: colors.line }} />
                    </li>

                    <li>
                      <Link
                        to="/productos"
                        className="dropdown-item py-2 fw-semibold"
                        style={{ color: colors.accent }}
                        onClick={() => {
                          setCategoryOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        Ver toda la colección →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="nav-item">
                <NavLink
                  to="/rickandmorty"
                  className="nav-link px-3"
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Rick & Morty
                </NavLink>
              </li>
            </ul>

            <form
              className="d-flex gap-2 py-3 py-lg-0"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Buscar zapatos..."
                aria-label="Buscar zapatos"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                style={{
                  borderRadius: 20,
                  borderColor: colors.line,
                  backgroundColor: '#fff',
                  minWidth: 0,
                  width: 'clamp(150px, 18vw, 230px)',
                }}
              />

              <button
                className="btn"
                type="submit"
                style={{
                  backgroundColor: colors.accent,
                  color: '#fff',
                  borderRadius: 20,
                  paddingInline: 18,
                  whiteSpace: 'nowrap',
                }}
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
