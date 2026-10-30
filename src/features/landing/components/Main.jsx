
import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const colors = {
  paper: '#fffaf8',
  white: '#ffffff',
  pink: '#f5dce3',
  line: '#ead4dc',
  ink: '#292329',
  muted: '#786b73',
  accent: '#c65f7d',
  soft: '#f9edf1',
}

const displayFont = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontWeight: 700,
  color: colors.ink,
}

const headingStyle = {
  fontWeight: 600,
  color: colors.ink,
}

const categories = [
  'Todos',
  'Tenis',
  'Tacones y Zapatos ',
  'Zapatos y nueva coleccion',
  'Botas',
  'Casual',
]

const products = [
  {
    id: 1,
    name: 'Tenis Urban Rose',
    note: 'Comodidad para todos tus planes',
    price: '$229.000',
    category: 'Tenis',
    tag: 'Más vendido',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Tacones Elegance',
    note: 'Un toque sofisticado para tu look',
    price: '$279.000',
    category: 'Tacones',
    tag: 'Favorito',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Tenis New force',
    note: 'Ligeras, delicadas y versátiles',
    price: '$149.000',
    category: 'Sandalias',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Botas Alba',
    note: 'Personalidad para cada ocasión',
    price: '$319.000',
    category: 'Botas',
    tag: 'Nuevo',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    name: 'Tenis Cloud',
    note: 'Estilo casual para todos los días',
    price: '$199.000',
    category: 'Tenis',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    name: 'Nueva coleccion de Zapatos',
    note: 'El complemento perfecto para salir',
    price: '$169.000',
    category: 'Sandalias',
    tag: 'Nuevo',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 7,
    name: 'Tenis New Balance',
    note: 'Elegancia que destaca',
    price: '$259.000',
    category: 'Tacones',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 8,
    name: 'Mocasines Chic',
    note: 'Un clásico para combinar',
    price: '$189.000',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80',
  },
]

const services = [
  {
    id: 1,
    title: 'Encuentra tu talla',
    description:
      'Elige tu talla con confianza y encuentra el ajuste ideal para ti.',
    icon: '♡',
  },
  {
    id: 2,
    title: 'Compra con tranquilidad',
    description:
      'Consulta las condiciones de cambios antes de realizar tu compra.',
    icon: '✧',
  },
  {
    id: 3,
    title: 'Tu estilo, donde estés',
    description:
      'Explora nuestra colección y encuentra zapatos para cada ocasión.',
    icon: '✿',
  },
]

export const Main = () => {
  const [active, setActive] = useState('Todos')
  const [searchParams, setSearchParams] = useSearchParams()
  const [email, setEmail] = useState('')

  const searchTerm = searchParams.get('buscar') || ''
  const requestedCategory = searchParams.get('categoria') || ''
  const requestedProduct = searchParams.get('producto') || ''
  const selectedProduct = products.find(
    (product) => product.id === Number(requestedProduct),
  )

  const visible = products.filter((product) => {
    const matchesCategory =
      active === 'Todos' || product.category === active

    const matchesSearch =
      `${product.name} ${product.note} ${product.category}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    const matchesUrlCategory =
      !requestedCategory ||
      product.category.toLowerCase() === requestedCategory.toLowerCase()

    return matchesCategory && matchesSearch && matchesUrlCategory
  })

  const selectCategory = (category) => {
    setActive(category)

    const nextParams = new URLSearchParams(searchParams)
    nextParams.delete('categoria')
    nextParams.delete('buscar')

    if (category !== 'Todos') {
      nextParams.set('categoria', category)
    }

    setSearchParams(nextParams, { preventScrollReset: true })
  }

  const submitSearch = (event) => {
    event.preventDefault()

    const nextParams = new URLSearchParams(searchParams)
    nextParams.delete('categoria')

    if (searchTerm.trim()) {
      nextParams.set('buscar', searchTerm.trim())
    } else {
      nextParams.delete('buscar')
    }

    setSearchParams(nextParams)
    setActive('Todos')
  }

  const handleNewsletter = (event) => {
    event.preventDefault()

    // Aún no se envía el correo a ningún servicio.
    alert('¡Gracias por tu interés en PASO! Pronto tendremos novedades.')
    setEmail('')
  }

  if (requestedProduct) {
    return (
      <main style={{ backgroundColor: colors.paper }}>
        <section className="container py-5">
          <Link
            to="/Productos"
            className="text-decoration-none d-inline-block mb-4"
            style={{ color: colors.accent }}
          >
            ← Volver a la colección
          </Link>

          {selectedProduct ? (
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-100"
                  loading="eager"
                  decoding="async"
                  width={800}
                  height={900}
                  style={{
                    aspectRatio: '4 / 4.5',
                    objectFit: 'cover',
                    borderRadius: 20,
                  }}
                />
              </div>
              <div className="col-12 col-md-6">
                <p
                  className="text-uppercase small mb-2"
                  style={{ color: colors.accent, letterSpacing: '0.15em' }}
                >
                  {selectedProduct.category}
                </p>
                <h1 className="display-5 mb-3" style={displayFont}>
                  {selectedProduct.name}
                </h1>
                <p className="fs-5" style={{ color: colors.muted }}>
                  {selectedProduct.note}
                </p>
                <p className="fs-4 fw-bold" style={{ color: colors.accent }}>
                  {selectedProduct.price}
                </p>
                <Link
                  to="/Productos"
                  className="btn rounded-pill px-4 text-white"
                  style={{
                    backgroundColor: colors.accent,
                    borderColor: colors.accent,
                  }}
                >
                  Seguir explorando
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <h1 className="h2 mb-3" style={displayFont}>
                No encontramos ese producto
              </h1>
              <Link
                to="/Productos"
                className="btn rounded-pill px-4 text-white"
                style={{
                  backgroundColor: colors.accent,
                  borderColor: colors.accent,
                }}
              >
                Ver la colección
              </Link>
            </div>
          )}
        </section>
      </main>
    )
  }

  const heroImage =
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80&fm=webp'

  return (
    <main style={{ backgroundColor: colors.paper }}>

      {/* Portada */}
      <section
        style={{
          backgroundColor: colors.soft,
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-4 py-lg-4">

            <div className="col-12 col-lg-6">
              <span
                className="d-inline-block mb-3 px-3 py-2 rounded-pill"
                style={{
                  backgroundColor: colors.pink,
                  color: colors.accent,
                  fontSize: '0.8rem',
                }}
              >
                TU ESTILO, TU ESENCIA ♡
              </span>

              <h1
                className="display-3 mb-3"
                style={{ ...displayFont, lineHeight: 1.15 }}
              >
                Cada paso tiene su propio estilo.
              </h1>

              <p
                className="fs-5 mb-4"
                style={{
                  color: colors.muted,
                  maxWidth: 480,
                  lineHeight: 1.8,
                }}
              >
                Descubre zapatos que combinan contigo.
                Encuentra ese par que convierte cualquier
                momento en una ocasión especial.
              </p>

              <a
                href="#calzado"
                className="btn btn-lg rounded-pill px-4 text-white"
                style={{
                  backgroundColor: colors.accent,
                  borderColor: colors.accent,
                }}
              >
                Descubrir colección →
              </a>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-lg-end">
              <div
                className="overflow-hidden w-100"
                style={{
                  borderRadius: '38% 38% 16px 16px',
                  backgroundColor: colors.pink,
                }}
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      `${heroImage}&w=600 600w, ` +
                      `${heroImage}&w=900 900w, ` +
                      `${heroImage}&w=1200 1200w`
                    }
                    sizes="(max-width: 992px) 100vw, 50vw"
                  />
                  <img
                    src={heroImage}
                    alt="Colección de calzado femenino"
                    className="w-100"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width={1200}
                    height={800}
                    sizes="(max-width: 992px) 100vw, 50vw"
                    style={{
                      height: 'clamp(220px, 28vw, 360px)',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </picture>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="calzado" className="container py-5">

        <div className="text-center mb-4">
          <p
            className="mb-2"
            style={{
              color: colors.accent,
              letterSpacing: '0.15em',
              fontSize: '0.8rem',
            }}
          >
            ENCUENTRA TU FAVORITO
          </p>

          <h2
            className="display-5 mb-3"
            style={displayFont}
          >
            Nuestra colección
          </h2>

          <p style={{ color: colors.muted }}>
            Un par para cada versión de ti.
          </p>
        </div>

        {/* Buscador conectado a la URL */}
        <form
          className="row justify-content-center mb-4"
          onSubmit={submitSearch}
        >
          <div className="col-12 col-md-7 col-lg-5">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-start-pill"
                placeholder="Busca tenis, tacones, sandalias..."
                aria-label="Buscar calzado"
                value={searchTerm}
                onChange={(event) => {
                  const nextParams = new URLSearchParams(searchParams)
                  const value = event.target.value

                  if (value.trim()) {
                    nextParams.set('buscar', value)
                  } else {
                    nextParams.delete('buscar')
                  }

                  setSearchParams(nextParams, {
                    replace: true,
                    preventScrollReset: true,
                  })
                }}
                style={{
                  borderColor: colors.line,
                  padding: '12px 18px',
                }}
              />

              <button
                type="submit"
                className="btn text-white rounded-end-pill px-4"
                style={{
                  backgroundColor: colors.accent,
                  borderColor: colors.accent,
                }}
              >
                Buscar
              </button>
            </div>
          </div>
        </form>

        {/* Filtros */}
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
          role="group"
          aria-label="Filtrar por categoría"
        >
          {categories.map((category) => {
            const isActive = requestedCategory
              ? category.toLowerCase() === requestedCategory.toLowerCase()
              : active === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={isActive}
                className="btn rounded-pill px-4"
                style={
                  isActive
                    ? {
                        backgroundColor: colors.accent,
                        borderColor: colors.accent,
                        color: colors.white,
                      }
                    : {
                        backgroundColor: colors.white,
                        borderColor: colors.line,
                        color: colors.ink,
                      }
                }
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Tarjetas de productos */}
        <div className="row g-4">
          {visible.map(({ id, name, note, price, tag, image }) => (
            <div key={id} className="col-6 col-md-4 col-lg-3">
              <article
                className="card h-100 overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.line}`,
                  borderRadius: '16px',
                }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ backgroundColor: colors.soft }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-100"
                    loading="lazy"
                    decoding="async"
                    width={500}
                    height={560}
                    sizes="(max-width: 992px) 50vw, 25vw"
                    style={{
                      aspectRatio: '4 / 4.5',
                      objectFit: 'cover',
                    }}
                  />

                  {tag && (
                    <span
                      className="badge position-absolute top-0 start-0 m-2 rounded-pill"
                      style={{
                        backgroundColor: colors.pink,
                        color: colors.accent,
                      }}
                    >
                      {tag}
                    </span>
                  )}
                </div>

                <div className="card-body d-flex flex-column">
                  <h3
                    className="h6 mb-2"
                    style={headingStyle}
                  >
                    {name}
                  </h3>

                  <p
                    className="small mb-3"
                    style={{ color: colors.muted }}
                  >
                    {note}
                  </p>

                  <div className="mt-auto">
                    <p
                      className="fw-bold mb-3"
                      style={{ color: colors.accent }}
                    >
                      {price}
                    </p>

                    <Link
                      to={`/Productos?producto=${id}`}
                      className="btn btn-sm w-100 rounded-pill"
                      style={{
                        borderColor: colors.accent,
                        color: colors.accent,
                      }}
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-5">
            <p className="fs-5" style={{ color: colors.muted }}>
              No encontramos zapatos con esos criterios. ♡
            </p>

            <button
              type="button"
              className="btn rounded-pill px-4"
              onClick={() => {
                setActive('Todos')
                setSearchParams({})
              }}
              style={{
                backgroundColor: colors.accent,
                color: colors.white,
              }}
            >
              Ver toda la colección
            </button>
          </div>
        )}

      </section>

      {/* Beneficios */}
      <section
        style={{
          backgroundColor: colors.white,
          borderTop: `1px solid ${colors.line}`,
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 style={displayFont}>
              Queremos acompañarte
            </h2>

            <p style={{ color: colors.muted }}>
              Una experiencia de compra pensada para ti.
            </p>
          </div>

          <div className="row g-4">
            {services.map(({ id, title, description, icon }) => (
              <div key={id} className="col-12 col-md-4">
                <div
                  className="h-100 p-4 text-center"
                  style={{
                    backgroundColor: colors.soft,
                    borderRadius: '16px',
                  }}
                >
                  <div
                    className="mb-3"
                    style={{
                      color: colors.accent,
                      fontSize: '2rem',
                    }}
                  >
                    {icon}
                  </div>

                  <h3 className="h5 mb-2" style={headingStyle}>
                    {title}
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: colors.muted,
                      lineHeight: 1.7,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suscripción */}
      <section
        style={{
          backgroundColor: colors.pink,
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-8 col-lg-6">

              <p
                className="mb-2"
                style={{ color: colors.accent }}
              >
                UNA NOTA ESPECIAL PARA TI ♡
              </p>

              <h2
                className="mb-3"
                style={{
                  ...displayFont,
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                }}
              >
                Tu próximo favorito te espera.
              </h2>

              <p
                className="mb-4"
                style={{ color: colors.muted }}
              >
                Déjanos tu correo para conocer las novedades
                de PASO y nuestras próximas colecciones.
              </p>

              <form
                className="input-group"
                onSubmit={handleNewsletter}
              >
                <input
                  type="email"
                  className="form-control rounded-start-pill border-0"
                  placeholder="Tu correo electrónico"
                  aria-label="Correo electrónico"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  style={{ padding: '14px 20px' }}
                />

                <button
                  type="submit"
                  className="btn text-white rounded-end-pill px-4"
                  style={{
                    backgroundColor: colors.accent,
                    borderColor: colors.accent,
                  }}
                >
                  Suscribirme
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Main
