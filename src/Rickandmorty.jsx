import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'https://rickandmortyapi.com/api/character'

const colors = {
  cream: '#f7f3ec',
  sand: '#ece3d6',
  terracotta: '#c98f7d',
  ink: '#2b2622',
  muted: '#7a6f66',
}

const serif = { fontFamily: "Georgia, 'Times New Roman', serif", color: colors.ink }

const statusColors = {
  Alive: '#5b9a6b',
  Dead: '#b85c5c',
  unknown: '#9a9a9a',
}

// Devuelve hasta 5 números de página alrededor de la página actual
const getPageNumbers = (current, total, size = 5) => {
  let start = Math.max(1, current - Math.floor(size / 2))
  const end = Math.min(total, start + size - 1)
  start = Math.max(1, end - size + 1)
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export const Rickandmorty = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  // Espera 500 ms después de que dejas de escribir antes de buscar
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim())
      setPage(1) // cada búsqueda nueva empieza en la página 1
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    const controller = new AbortController()

    async function getCharacters() {
      setLoading(true)
      setError(null)
      try {
        const { data } = await axios.get(API_URL, {
          params: { page, name: debouncedSearch || undefined },
          signal: controller.signal,
        })
        setCharacters(data.results)
        setTotalPages(data.info.pages)
        setLoading(false)
      } catch (err) {
        if (axios.isCancel(err)) return
        setCharacters([])
        setTotalPages(1)
        // La API responde 404 cuando no hay personajes con ese nombre
        if (err.response?.status !== 404) {
          setError('No pudimos cargar los personajes. Intenta de nuevo.')
        }
        setLoading(false)
      }
    }

    getCharacters()
    // Cancela la petición si el usuario cambia de página o sale del componente
    return () => controller.abort()
  }, [page, debouncedSearch])

  const goToPage = (n) => {
    if (n < 1 || n > totalPages || n === page) return
    setPage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ backgroundColor: colors.cream }}>
      <div className="container py-5">
        <h1 className="text-center mb-1" style={serif}>Rick and Morty</h1>
        <p className="text-center mb-4" style={{ color: colors.muted }}>
          Página {page} de {totalPages}
        </p>

        {/* Buscador: filtra solo, sin botón */}
        <div className="mx-auto mb-5" style={{ maxWidth: 420 }}>
          <input
            type="search"
            className="form-control form-control-lg rounded-pill px-4"
            style={{ backgroundColor: '#fff', borderColor: colors.sand }}
            placeholder="Buscar personaje por nombre..."
            aria-label="Buscar personaje por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && characters.length === 0 && (
          <p className="text-center" style={{ color: colors.muted }}>
            No se encontraron personajes con ese nombre.
          </p>
        )}

        {loading ? (
          <p className="text-center" style={{ color: colors.muted }}>Cargando personajes...</p>
        ) : (
          <div className="row g-4">
            {characters.map(({ id, name, image, status, species, location }) => (
              <div key={id} className="col-6 col-md-4 col-lg-3">
                <article className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <img src={image} alt={name} className="card-img-top" />
                  <div className="card-body">
                    <h2 className="h6 mb-1" style={serif}>{name}</h2>
                    <p className="small mb-2 d-flex align-items-center" style={{ color: colors.muted }}>
                      <span
                        className="rounded-circle d-inline-block me-2"
                        style={{ width: 10, height: 10, backgroundColor: statusColors[status] }}
                      />
                      {status} - {species}
                    </p>
                    <p className="small mb-0" style={{ color: colors.muted }}>
                      {location.name}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}

        {/* Paginación */}
        {!error && totalPages > 1 && (
          <nav aria-label="Paginación de personajes" className="mt-5">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2">
              <button
                type="button"
                className="btn btn-sm rounded-pill px-3"
                style={{ borderColor: colors.sand, color: colors.muted, backgroundColor: '#fff' }}
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
              >
                ← Anterior
              </button>

              {getPageNumbers(page, totalPages).map((n) => (
                <button
                  key={n}
                  type="button"
                  className="btn btn-sm rounded-pill px-3"
                  style={
                    n === page
                      ? { backgroundColor: colors.terracotta, borderColor: colors.terracotta, color: '#fff' }
                      : { borderColor: colors.sand, color: colors.muted, backgroundColor: '#fff' }
                  }
                  onClick={() => goToPage(n)}
                  aria-current={n === page ? 'page' : undefined}
                >
                  {n}
                </button>
              ))}

              <button
                type="button"
                className="btn btn-sm rounded-pill px-3"
                style={{ borderColor: colors.sand, color: colors.muted, backgroundColor: '#fff' }}
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
              >
                Siguiente →
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Rickandmorty