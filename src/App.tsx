import { useEffect, useState, type ReactNode } from "react"

type Screen = "splash" | "onboarding" | "auth" | "home" | "categories" | "detail" | "customize" | "schedule" | "cleaner" | "address" | "checkout" | "confirmation" | "tracking" | "bookings" | "chat" | "review" | "offers" | "notifications" | "profile" | "settings" | "help"

const interior =
  "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=1080&q=86"
const interior2 =
  "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?auto=format&fit=crop&w=1080&q=86"
const interior3 =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1080&q=86"
const cleaner1 =
  "https://images.unsplash.com/photo-1690166444493-b3f5fbcd4762?auto=format&fit=crop&w=400&q=85"
const cleaner2 =
  "https://images.unsplash.com/photo-1715443972912-cc425dbcf73e?auto=format&fit=crop&w=400&q=85"

const categories = [
  ["home", "Limpieza del hogar"],
  ["sparkle", "Limpieza profunda"],
  ["building", "Oficinas"],
  ["box", "Mudanza (entrada/salida)"],
  ["droplet", "Cocina y baños"],
  ["window", "Ventanas"],
  ["sofa", "Alfombras y tapicería"],
  ["tools", "Post-obra"],
  ["shirt", "Lavandería y planchado"],
  ["leaf", "Ecológica"],
]

const iconPaths: Record<string, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z" />
      <path d="m19 14 .7 2.3L22 17.5l-2.3 1.2L19 21l-.7-2.3-2.3-1.2 2.3-1.2L19 14Z" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5h10v16M14 9h6v12M8 9h2M8 13h2M8 17h2M17 13h1M17 17h1M2 21h20" />
    </>
  ),
  box: (
    <>
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z" />
      <path d="M12 11v10" />
    </>
  ),
  droplet: <path d="M12 3S6 10 6 15a6 6 0 0 0 12 0c0-5-6-12-6-12Z" />,
  window: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M4 12h16" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 12V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 4 0v6H1v-6a2 2 0 0 1 2-2ZM4 19v2M20 19v2" />
    </>
  ),
  tools: (
    <>
      <path d="m14 6 4-4 4 4-4 4" />
      <path d="m16 8-9 9M5 15l4 4-3 3-4-4 3-3Z" />
      <path d="m13 3 8 8" />
    </>
  ),
  shirt: <path d="m8 4-5 3 2 5 3-1v10h8V11l3 1 2-5-5-3c-1 3-7 3-8 0Z" />,
  leaf: (
    <>
      <path d="M20 4C10 4 4 9 4 17c5 2 13-1 16-13Z" />
      <path d="M4 21c3-7 8-10 13-13" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  message: (
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
    </>
  ),
  back: (
    <>
      <path d="m15 18-6-6 6-6" />
    </>
  ),
  arrow: <path d="m9 18 6-6-6-6" />,
  star: (
    <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M2 10h20" />
    </>
  ),
  track: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="9" width="18" height="12" rx="2" />
      <path d="M12 9v12M3 13h18M7.5 9C4 9 4 4 7 4c2.5 0 5 5 5 5s2.5-5 5-5c3 0 3 5-.5 5" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9a2.5 2.5 0 1 1 3.1 2.4c-.8.3-.8 1-.8 1.6M12 17h.01" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2A17 17 0 0 1 3 5c0-1 1-2 2-2Z" />
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  logout: (
    <>
      <path d="M10 4H4v16h6M14 8l4 4-4 4M8 12h10" />
    </>
  ),
}

function Icon({
  name,
  size = 22,
  filled = false,
}: {
  name: string
  size?: number
  filled?: boolean
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name] || iconPaths.sparkle}
    </svg>
  )
}

function Action({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "icon"
  className?: string
}) {
  return (
    <button
      type="button"
      className={`action action-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Header({
  title,
  back,
  right,
}: {
  title: string
  back?: () => void
  right?: ReactNode
}) {
  return (
    <div className="topbar">
      {back ? (
        <Action variant="icon" onClick={back}>
          <Icon name="back" />
        </Action>
      ) : (
        <span className="top-spacer" />
      )}
      <div className="top-title">{title}</div>
      <div className="top-right">
        {right || <span className="top-spacer" />}
      </div>
    </div>
  )
}

function BottomNav({ active, go }: { active: Screen; go: (s: Screen) => void }) {
  const items: [string, string, Screen][] = [
    ["home", "Inicio", "home"],
    ["sparkle", "Servicios", "categories"],
    ["calendar", "Reservas", "bookings"],
    ["message", "Mensajes", "chat"],
    ["user", "Perfil", "profile"],
  ]
  return (
    <nav className="bottom-nav">
      {items.map(([icon, label, screen]) => (
        <button
          type="button"
          key={screen}
          className={active === screen ? "nav-active" : ""}
          onClick={() => go(screen)}
        >
          <Icon name={icon} size={21} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}

function Page({
  children,
  nav,
  go,
  className = "",
}: {
  children: ReactNode
  nav?: Screen
  go: (s: Screen) => void
  className?: string
}) {
  return (
    <main className={`screen ${nav ? "with-nav" : ""} ${className}`}>
      <div className="screen-content">{children}</div>
      {nav && <BottomNav active={nav} go={go} />}
    </main>
  )
}

function Rating({ value = "4.9" }: { value?: string }) {
  return (
    <span className="rating">
      <Icon name="star" size={13} filled />
      {value}
    </span>
  )
}

function StepProgress({ current }: { current: number }) {
  return (
    <div className="progress">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= current ? "done" : ""} />
      ))}
    </div>
  )
}

function Splash({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go} className="splash">
      <button
        type="button"
        className="splash-hit"
        onClick={() => go("onboarding")}
      >
        <div className="brand-mark">
          <Icon name="sparkle" size={42} />
        </div>
        <div className="brand-name">OrdenApp</div>
        <div className="splash-note">
          Organiza, limpia y disfruta tu espacio
        </div>
      </button>
    </Page>
  )
}

const slides = [
  {
    image: interior,
    eyebrow: "VIVE SIN ESFUERZO",
    title: "Tu hogar, cuidado con elegancia",
    body: "Profesionales de confianza y resultados excepcionales, con solo unos toques.",
  },
  {
    image: interior2,
    eyebrow: "A TU MEDIDA",
    title: "Limpieza a tu manera, siempre",
    body: "Personaliza cada detalle, desde tus productos favoritos hasta el horario ideal.",
  },
  {
    image: interior3,
    eyebrow: "TRANQUILIDAD TOTAL",
    title: "Sigue cada momento impecable",
    body: "Mantente al tanto desde la llegada hasta el último detalle con actualizaciones en vivo.",
  },
]

function Onboarding({ go }: { go: (s: Screen) => void }) {
  const [slide, setSlide] = useState(0)
  const item = slides[slide]
  return (
    <Page go={go} className="onboarding">
      <div
        className="onboard-image"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="onboard-logo">
          <Icon name="sparkle" size={19} />
          <b>OrdenApp</b>
        </div>
        <button type="button" className="skip" onClick={() => go("auth")}>
          Omitir
        </button>
      </div>
      <div className="onboard-copy">
        <span className="eyebrow">{item.eyebrow}</span>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        <div className="dots">
          {slides.map((_, i) => (
            <span key={i} className={i === slide ? "active" : ""} />
          ))}
        </div>
        <Action onClick={() => (slide < 2 ? setSlide(slide + 1) : go("auth"))}>
          {slide === 2 ? "Comenzar" : "Continuar"}
          <Icon name="arrow" size={18} />
        </Action>
      </div>
    </Page>
  )
}

function Auth({ go }: { go: (s: Screen) => void }) {
  const [signup, setSignup] = useState(false)
  return (
    <Page go={go} className="auth-page">
      <div className="auth-brand">
        <div className="mini-mark">
          <Icon name="sparkle" />
        </div>
        <b>OrdenApp</b>
      </div>
      <span className="eyebrow">BIENVENIDA A CASA</span>
      <h1>{signup ? "Crea tu cuenta" : "Qué gusto verte de nuevo"}</h1>
      <p className="muted">
        {signup
          ? "Un hogar más luminoso está a unos instantes."
          : "Inicia sesión para continuar a tu espacio más luminoso."}
      </p>
      <div className="form-stack">
        {signup && (
          <label>
            <span>Nombre completo</span>
            <input placeholder="Mariana Herrera" />
          </label>
        )}
        <label>
          <span>Correo electrónico</span>
          <input type="email" placeholder="mariana@ejemplo.com" />
        </label>
        <label>
          <span>Contraseña</span>
          <input type="password" placeholder="••••••••" />
        </label>
      </div>
      {!signup && (
        <button type="button" className="text-link">
          ¿Olvidaste tu contraseña?
        </button>
      )}
      <Action onClick={() => go("home")}>
        {signup ? "Crear cuenta" : "Iniciar sesión"}
        <Icon name="arrow" size={18} />
      </Action>
      <div className="or">
        <span />o continúa con
        <span />
      </div>
      <Action variant="secondary">
        <b>G</b> Continuar con Google
      </Action>
      <p className="auth-switch">
        {signup ? "¿Ya tienes cuenta?" : "¿Eres nueva en OrdenApp?"}{" "}
        <button type="button" onClick={() => setSignup(!signup)}>
          {signup ? "Inicia sesión" : "Crea tu cuenta"}
        </button>
      </p>
    </Page>
  )
}

function Home({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go} nav="home">
      <div className="home-head">
        <div>
          <span>Buenos días,</span>
          <h1>Mariana</h1>
        </div>
        <Action variant="icon" onClick={() => go("notifications")}>
          <Icon name="bell" />
          <i className="notification-dot" />
        </Action>
      </div>
      <button
        type="button"
        className="searchbox"
        onClick={() => go("categories")}
      >
        <Icon name="search" size={20} />
        <span>¿Qué te gustaría limpiar?</span>
      </button>
      <section className="promo-card">
        <div className="promo-copy">
          <span className="pill-gold">PRIMERA LIMPIEZA</span>
          <h2>
            Bienvenida a un
            <br />
            hogar más luminoso.
          </h2>
          <p>20% de descuento en tu primera reserva</p>
          <button type="button" onClick={() => go("detail")}>
            Reservar ahora <Icon name="arrow" size={15} />
          </button>
        </div>
        <img src={interior} alt="Sala luminosa e impecable" />
      </section>
      <div className="section-head">
        <h2>¿Qué necesitas?</h2>
        <button type="button" onClick={() => go("categories")}>
          Ver todo
        </button>
      </div>
      <div className="category-row">
        {categories.slice(0, 4).map(([icon, label]) => (
          <button type="button" key={label} onClick={() => go("categories")}>
            <span>
              <Icon name={icon} />
            </span>
            <b>{label}</b>
          </button>
        ))}
      </div>
      <div className="section-head">
        <h2>Servicios populares</h2>
        <button type="button" onClick={() => go("categories")}>
          Ver todo
        </button>
      </div>
      <button
        type="button"
        className="service-card"
        onClick={() => go("detail")}
      >
        <img src={interior2} alt="Sala moderna y limpia" />
        <div>
          <span className="tiny-pill">LO MÁS QUERIDO</span>
          <h3>Limpieza Signature del hogar</h3>
          <p>
            <Rating /> · 320 reseñas
          </p>
          <b>
            Desde $1,290 <small>/ visita</small>
          </b>
        </div>
      </button>
      <div className="section-head">
        <h2>Profesionales mejor calificadas</h2>
        <button type="button" onClick={() => go("cleaner")}>
          Ver todo
        </button>
      </div>
      <div className="cleaner-mini">
        <img src={cleaner1} alt="Sofía, profesional de limpieza" />
        <div>
          <h3>
            Sofía M. <span>✓</span>
          </h3>
          <p>
            <Rating /> · 248 limpiezas
          </p>
        </div>
        <Action variant="icon" onClick={() => go("cleaner")}>
          <Icon name="arrow" />
        </Action>
      </div>
    </Page>
  )
}

function Categories({ go }: { go: (s: Screen) => void }) {
  const [filter, setFilter] = useState("Todos")
  return (
    <Page go={go} nav="categories">
      <Header
        title="Explora servicios"
        right={
          <Action variant="icon" onClick={() => go("home")}>
            <Icon name="search" />
          </Action>
        }
      />
      <div className="chips">
        {["Todos", "Hogar", "Negocios", "Especializados", "Eco"].map((x) => (
          <button
            type="button"
            key={x}
            className={filter === x ? "active" : ""}
            onClick={() => setFilter(x)}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="category-grid">
        {categories.map(([icon, label], i) => (
          <button type="button" key={label} onClick={() => go("detail")}>
            <span className={`cat-icon tone-${i % 4}`}>
              <Icon name={icon} />
            </span>
            <b>{label}</b>
            <small>{(i % 3) + 2} servicios</small>
            <Icon name="arrow" size={16} />
          </button>
        ))}
      </div>
      <div className="eco-banner">
        <Icon name="leaf" />
        <div>
          <b>Hogar limpio, conciencia tranquila.</b>
          <p>Conoce nuestros servicios con certificación ecológica.</p>
        </div>
        <Icon name="arrow" />
      </div>
    </Page>
  )
}

function Detail({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go} className="detail-page">
      <div
        className="hero-gallery"
        style={{ backgroundImage: `url(${interior2})` }}
      >
        <Action variant="icon" onClick={() => go("categories")}>
          <Icon name="back" />
        </Action>
        <span className="gallery-count">1 / 4</span>
      </div>
      <div className="detail-body">
        <span className="eyebrow">LIMPIEZA DEL HOGAR</span>
        <h1>Limpieza Signature del hogar</h1>
        <div className="detail-meta">
          <Rating />
          <span>4.9 (320 reseñas)</span>
          <span>•</span>
          <Icon name="clock" size={16} />
          <span>3–4 horas</span>
        </div>
        <p className="intro">
          Una renovación minuciosa de arriba abajo, pensada especialmente para
          tu hogar.
        </p>
        <hr />
        <h2>Qué incluye</h2>
        <div className="included">
          {[
            "Superficies y electrodomésticos de cocina",
            "Baños desinfectados",
            "Recámaras y áreas de estar",
            "Pisos aspirados y trapeados",
            "Botes vaciados y repuestos",
            "Toques finales",
          ].map((x) => (
            <div key={x}>
              <span>
                <Icon name="check" size={14} />
              </span>
              {x}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="review-preview"
          onClick={() => go("review")}
        >
          <div>
            <Rating />
            <b>“Absolutamente impecable.”</b>
            <p>Sofía fue atenta, detallista y maravillosa.</p>
            <small>— Maya R. · hace 2 días</small>
          </div>
          <Icon name="arrow" />
        </button>
      </div>
      <div className="sticky-cta">
        <div>
          <small>Desde</small>
          <b>$1,290</b>
        </div>
        <Action onClick={() => go("customize")}>Personalizar</Action>
      </div>
    </Page>
  )
}

function Counter({
  label,
  value,
  set,
}: {
  label: string
  value: number
  set: (n: number) => void
}) {
  return (
    <div className="counter-row">
      <span>{label}</span>
      <div>
        <Action variant="icon" onClick={() => set(Math.max(1, value - 1))}>
          <Icon name="minus" size={17} />
        </Action>
        <b>{value}</b>
        <Action variant="icon" onClick={() => set(value + 1)}>
          <Icon name="plus" size={17} />
        </Action>
      </div>
    </div>
  )
}

const addonOptions: [string, string, number][] = [
  ["droplet", "Interior del refrigerador", 90],
  ["window", "Ventanas interiores", 150],
  ["sofa", "Renovación de sofá", 180],
  ["shirt", "Planchado de ropa", 120],
]

function Customize({ go }: { go: (s: Screen) => void }) {
  const [rooms, setRooms] = useState(2),
    [baths, setBaths] = useState(1),
    [addons, setAddons] = useState<string[]>(["Interior del refrigerador"]),
    [freq, setFreq] = useState("Una vez")
  const subtotal =
    590 +
    rooms * 150 +
    baths * 120 +
    addonOptions
      .filter((a) => addons.includes(a[1]))
      .reduce((s, a) => s + a[2], 0)
  const price = Math.round(subtotal * (freq === "Semanal" ? 0.85 : 1))
  const toggle = (x: string) =>
    setAddons(
      addons.includes(x) ? addons.filter((a) => a !== x) : [...addons, x],
    )
  return (
    <Page go={go}>
      <Header title="Personaliza tu limpieza" back={() => go("detail")} />
      <StepProgress current={1} />
      <section className="form-section">
        <span className="eyebrow">TU ESPACIO</span>
        <h2>Cuéntanos sobre tu hogar</h2>
        <Counter label="Recámaras" value={rooms} set={setRooms} />
        <Counter label="Baños" value={baths} set={setBaths} />
      </section>
      <section className="form-section">
        <span className="eyebrow">CUIDADO EXTRA</span>
        <h2>Agrega un toque más de brillo</h2>
        <div className="addon-grid">
          {addonOptions.map(([ic, x, p]) => (
            <button
              type="button"
              key={x}
              className={addons.includes(x) ? "selected" : ""}
              onClick={() => toggle(x)}
            >
              <Icon name={ic} />
              <b>{x}</b>
              <small>+${p}</small>
              {addons.includes(x) && (
                <i>
                  <Icon name="check" size={12} />
                </i>
              )}
            </button>
          ))}
        </div>
      </section>
      <section className="form-section">
        <span className="eyebrow">FRECUENCIA</span>
        <h2>¿Con qué frecuencia?</h2>
        <div className="frequency">
          {["Una vez", "Semanal", "Quincenal", "Mensual"].map((x) => (
            <button
              type="button"
              className={freq === x ? "selected" : ""}
              onClick={() => setFreq(x)}
              key={x}
            >
              {x}
              {x === "Semanal" && <small>Ahorra 15%</small>}
            </button>
          ))}
        </div>
      </section>
      <div className="sticky-cta">
        <div>
          <small>Total estimado</small>
          <b>${price.toLocaleString("es-MX")}</b>
        </div>
        <Action onClick={() => go("schedule")}>Elegir fecha</Action>
      </div>
    </Page>
  )
}

function Schedule({ go }: { go: (s: Screen) => void }) {
  const [day, setDay] = useState(12),
    [time, setTime] = useState("10:00 a. m.")
  return (
    <Page go={go}>
      <Header title="Elige una fecha" back={() => go("customize")} />
      <StepProgress current={2} />
      <div className="month-head">
        <Action variant="icon">
          <Icon name="back" />
        </Action>
        <h2>Septiembre 2025</h2>
        <Action variant="icon">
          <Icon name="arrow" />
        </Action>
      </div>
      <div className="calendar-grid">
        {["D", "L", "M", "M", "J", "V", "S"].map((d, i) => (
          <b key={i}>{d}</b>
        ))}
        <span />
        {[...Array(30)].map((_, i) => (
          <button
            type="button"
            key={i}
            className={day === i + 1 ? "selected" : i + 1 < 9 ? "disabled" : ""}
            onClick={() => i + 1 >= 9 && setDay(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <section className="form-section slots-section">
        <span className="eyebrow">HORARIOS DISPONIBLES</span>
        <h2>¿Cuándo debemos llegar?</h2>
        <div className="time-slots">
          {[
            "8:00 a. m.",
            "9:00 a. m.",
            "10:00 a. m.",
            "11:30 a. m.",
            "1:00 p. m.",
            "2:30 p. m.",
            "4:00 p. m.",
          ].map((x) => (
            <button
              type="button"
              key={x}
              className={time === x ? "selected" : ""}
              onClick={() => setTime(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </section>
      <div className="info-note">
        <Icon name="clock" />
        <p>
          Tu limpieza tomará aproximadamente <b>3–4 horas</b>.
        </p>
      </div>
      <div className="sticky-cta">
        <div>
          <small>Tu selección</small>
          <b>
            {day} sep · {time}
          </b>
        </div>
        <Action onClick={() => go("cleaner")}>Continuar</Action>
      </div>
    </Page>
  )
}

const cleanerData = [
  {
    name: "Sofía Martínez",
    image: cleaner1,
    rating: "4.98",
    cleans: "248",
    note: "Reconocida por su atención al detalle",
  },
  {
    name: "Daniela Ruiz",
    image: cleaner2,
    rating: "4.96",
    cleans: "191",
    note: "Especialista en limpieza ecológica",
  },
]

function ChooseCleaner({ go }: { go: (s: Screen) => void }) {
  const [selected, setSelected] = useState(0)
  return (
    <Page go={go}>
      <Header title="Elige a tu profesional" back={() => go("schedule")} />
      <StepProgress current={3} />
      <div className="choice-intro">
        <span className="eyebrow">LAS MEJORES OPCIONES PARA TI</span>
        <h1>¿Con quién te gustaría?</h1>
        <p>
          Cada profesional de OrdenApp está verificada, asegurada y capacitada.
        </p>
      </div>
      {cleanerData.map((c, i) => (
        <button
          type="button"
          className={`cleaner-card ${selected === i ? "selected" : ""}`}
          key={c.name}
          onClick={() => setSelected(i)}
        >
          <img src={c.image} alt={c.name} />
          <div className="cleaner-info">
            <div className="verified">
              <h3>{c.name}</h3>
              <span>
                <Icon name="check" size={11} />
              </span>
            </div>
            <p>
              <Rating value={c.rating} /> · {c.cleans} limpiezas
            </p>
            <small>{c.note}</small>
            <div className="tags">
              <span>Mejor calificada</span>
              <span>5 años de experiencia</span>
            </div>
          </div>
          <i className="radio">
            <span />
          </i>
        </button>
      ))}
      <button
        type="button"
        className={`cleaner-card auto ${selected === 2 ? "selected" : ""}`}
        onClick={() => setSelected(2)}
      >
        <span className="auto-icon">
          <Icon name="sparkle" />
        </span>
        <div className="cleaner-info">
          <h3>Mejor disponible</h3>
          <p>Te asignaremos a una profesional mejor calificada</p>
        </div>
        <i className="radio">
          <span />
        </i>
      </button>
      <div className="sticky-cta">
        <div>
          <small>Tu profesional</small>
          <b>
            {selected === 2
              ? "Mejor opción"
              : cleanerData[selected].name.split(" ")[0]}
          </b>
        </div>
        <Action onClick={() => go("address")}>Continuar</Action>
      </div>
    </Page>
  )
}

function MapArt() {
  return (
    <div className="map-art">
      <div className="road r1" />
      <div className="road r2" />
      <div className="road r3" />
      <span className="map-park" />
      <span className="map-water" />
      <div className="map-pin">
        <Icon name="home" size={18} />
      </div>
      <div className="map-label">PARQUE MÉXICO</div>
    </div>
  )
}

function Address({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go}>
      <Header title="Dirección del servicio" back={() => go("cleaner")} />
      <StepProgress current={4} />
      <MapArt />
      <section className="address-sheet">
        <span className="eyebrow">TU DIRECCIÓN</span>
        <h2>¿Dónde debemos limpiar?</h2>
        <label>
          <span>Calle y número</span>
          <div className="input-icon">
            <Icon name="pin" size={18} />
            <input defaultValue="Av. Amsterdam 128" />
          </div>
        </label>
        <div className="form-pair">
          <label>
            <span>Departamento</span>
            <input defaultValue="4B" />
          </label>
          <label>
            <span>Código postal</span>
            <input defaultValue="06100" />
          </label>
        </div>
        <label>
          <span>Indicaciones de acceso</span>
          <textarea placeholder="Interfón, estacionamiento, instrucciones especiales…" />
        </label>
        <label className="checkbox">
          <input type="checkbox" defaultChecked />
          <span>
            <Icon name="check" size={13} />
          </span>
          Guardar esta dirección para la próxima vez
        </label>
      </section>
      <div className="sticky-cta">
        <div>
          <small>Zona de servicio</small>
          <b>Condesa, CDMX</b>
        </div>
        <Action onClick={() => go("checkout")}>Revisar reserva</Action>
      </div>
    </Page>
  )
}

function Checkout({ go }: { go: (s: Screen) => void }) {
  const [tip, setTip] = useState("20%"),
    [promo, setPromo] = useState(false)
  const service = promo ? 1192 : 1490
  const tipAmount =
    tip === "Otro" ? 0 : Math.round((service * parseInt(tip)) / 100)
  const total = service + 90 + tipAmount + 49
  const fmt = (n: number) => "$" + n.toLocaleString("es-MX")
  return (
    <Page go={go}>
      <Header title="Revisa y paga" back={() => go("address")} />
      <StepProgress current={5} />
      <section className="summary-card">
        <div className="summary-top">
          <img src={interior2} alt="Limpieza Signature del hogar" />
          <div>
            <span className="eyebrow">LIMPIEZA SIGNATURE</span>
            <h3>Viernes 12 de septiembre</h3>
            <p>10:00 a. m. · 3–4 horas</p>
          </div>
        </div>
        <hr />
        <div className="summary-line">
          <Icon name="user" />
          <span>Profesional</span>
          <b>Sofía M.</b>
        </div>
        <div className="summary-line">
          <Icon name="pin" />
          <span>Dirección</span>
          <b>Av. Amsterdam 128, 4B</b>
        </div>
        <button type="button" onClick={() => go("customize")}>
          Editar reserva
        </button>
      </section>
      <section className="checkout-section">
        <h2>Código promocional</h2>
        <div className="promo-input">
          <Icon name="gift" />
          <input
            placeholder="Ingresa tu código"
            value={promo ? "BRILLA20" : ""}
            readOnly
          />
          <button type="button" onClick={() => setPromo(true)}>
            {promo ? "Aplicado" : "Aplicar"}
          </button>
        </div>
      </section>
      <section className="checkout-section">
        <h2>Agrega una propina</h2>
        <p>El 100% va directamente a tu profesional.</p>
        <div className="tip-row">
          {["15%", "20%", "25%", "Otro"].map((x) => (
            <button
              type="button"
              key={x}
              className={tip === x ? "selected" : ""}
              onClick={() => setTip(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </section>
      <section className="checkout-section">
        <div className="section-head">
          <h2>Pago</h2>
          <button type="button">Cambiar</button>
        </div>
        <div className="payment-row">
          <span>
            <b>VISA</b>
          </span>
          <div>
            <b>Visa terminación 4242</b>
            <small>Vence 09/28</small>
          </div>
          <Icon name="check" />
        </div>
      </section>
      <section className="price-breakdown">
        {[
          ["Servicio", fmt(service)],
          ["Extras", "$90"],
          [`Propina (${tip})`, fmt(tipAmount)],
          ["Cuota de servicio", "$49"],
        ].map((x) => (
          <div key={x[0]}>
            <span>{x[0]}</span>
            <b>{x[1]}</b>
          </div>
        ))}
        <hr />
        <div className="total">
          <span>Total</span>
          <b>{fmt(total)} MXN</b>
        </div>
      </section>
      <div className="sticky-cta">
        <div>
          <small>Total</small>
          <b>{fmt(total)}</b>
        </div>
        <Action onClick={() => go("confirmation")}>
          <Icon name="lock" size={16} /> Confirmar y pagar
        </Action>
      </div>
    </Page>
  )
}

function Confirmation({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go} className="confirmation">
      <div className="success-orbit">
        <span className="orbit-one" />
        <span className="orbit-two" />
        <div>
          <Icon name="check" size={42} />
        </div>
      </div>
      <span className="eyebrow">RESERVA CONFIRMADA</span>
      <h1>
        Tu hogar más luminoso
        <br />
        ya está en camino.
      </h1>
      <p>Te enviamos los detalles por correo.</p>
      <section className="ticket">
        <span className="ticket-accent" />
        <div className="ticket-head">
          <img src={cleaner1} alt="Sofía" />
          <div>
            <small>TU PROFESIONAL</small>
            <h3>
              Sofía Martínez{" "}
              <i>
                <Icon name="check" size={10} />
              </i>
            </h3>
            <Rating value="4.98" />
          </div>
        </div>
        <hr />
        <div className="ticket-details">
          <div>
            <Icon name="calendar" />
            <span>
              <small>FECHA</small>
              <b>Vie, 12 sep</b>
            </span>
          </div>
          <div>
            <Icon name="clock" />
            <span>
              <small>HORA</small>
              <b>10:00 a. m.</b>
            </span>
          </div>
          <div>
            <Icon name="pin" />
            <span>
              <small>DIRECCIÓN</small>
              <b>Av. Amsterdam 128, 4B</b>
            </span>
          </div>
        </div>
        <small className="booking-id">RESERVA #LC-28491</small>
      </section>
      <Action onClick={() => go("tracking")}>
        Seguir tu reserva <Icon name="arrow" size={18} />
      </Action>
      <Action variant="ghost" onClick={() => go("home")}>
        Volver al inicio
      </Action>
    </Page>
  )
}

function Tracking({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go}>
      <Header
        title="Seguimiento en vivo"
        back={() => go("bookings")}
        right={
          <Action variant="icon" onClick={() => go("chat")}>
            <Icon name="message" />
          </Action>
        }
      />
      <div className="track-map">
        <MapArt />
        <div className="cleaner-bubble">
          <img src={cleaner1} alt="Sofía" />
          <span>
            <b>Sofía</b>
            <small>a 8 min</small>
          </span>
        </div>
      </div>
      <section className="tracking-sheet">
        <span className="status-pill">
          <i /> EN CAMINO
        </span>
        <h1>Sofía va hacia tu casa</h1>
        <p>
          Llegada estimada a las <b>9:52 a. m.</b>
        </p>
        <div className="timeline">
          {[
            ["check", "Reserva confirmada", "9:12 a. m."],
            ["check", "Profesional asignada", "9:14 a. m."],
            ["track", "En camino", "Ahora"],
            ["sparkle", "Limpieza en curso", ""],
            ["home", "Finalizada", ""],
          ].map((x, i) => (
            <div className={i < 3 ? "active" : ""} key={x[1]}>
              <span>
                <Icon name={x[0]} size={15} />
              </span>
              <b>{x[1]}</b>
              <small>{x[2]}</small>
            </div>
          ))}
        </div>
        <div className="contact-card">
          <img src={cleaner1} alt="Sofía" />
          <div>
            <b>Sofía Martínez</b>
            <small>Tu profesional de OrdenApp</small>
          </div>
          <Action variant="icon">
            <Icon name="phone" />
          </Action>
          <Action variant="icon" onClick={() => go("chat")}>
            <Icon name="message" />
          </Action>
        </div>
        <Action variant="secondary" onClick={() => go("help")}>
          ¿Necesitas ayuda con esta reserva?
        </Action>
      </section>
    </Page>
  )
}

function Bookings({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("Próximas")
  return (
    <Page go={go} nav="bookings">
      <Header title="Mis reservas" />
      <div className="segment">
        {["Próximas", "En curso", "Historial"].map((x) => (
          <button
            type="button"
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      {tab === "Próximas" && (
        <>
          <div className="date-label">VIERNES 12 DE SEPTIEMBRE</div>
          <section className="booking-card">
            <div className="booking-image">
              <img src={interior2} alt="Hogar limpio" />
              <span>CONFIRMADA</span>
            </div>
            <div className="booking-body">
              <div>
                <h3>Limpieza Signature del hogar</h3>
                <p>
                  <Icon name="clock" size={15} /> 10:00 a. m. · 3–4 horas
                </p>
                <p>
                  <Icon name="pin" size={15} /> Av. Amsterdam 128, 4B
                </p>
              </div>
              <div className="booking-cleaner">
                <img src={cleaner1} alt="Sofía" />
                <span>
                  <small>CON</small>
                  <b>Sofía M.</b>
                </span>
                <Rating />
              </div>
              <Action onClick={() => go("tracking")}>Ver estado en vivo</Action>
              <Action variant="secondary" onClick={() => go("chat")}>
                Escribir a Sofía
              </Action>
            </div>
          </section>
        </>
      )}
      {tab === "En curso" && (
        <section className="empty-state">
          <span>
            <Icon name="track" size={35} />
          </span>
          <h2>Sin limpiezas activas</h2>
          <p>
            Cuando comience una limpieza, podrás seguir cada actualización aquí.
          </p>
        </section>
      )}
      {tab === "Historial" && (
        <>
          <section className="history-card">
            <img src={interior3} alt="Sala limpia" />
            <div>
              <small>28 AGO · FINALIZADA</small>
              <h3>Limpieza profunda del hogar</h3>
              <p>Sofía M. · $2,190</p>
              <button type="button" onClick={() => go("review")}>
                Califica tu limpieza
              </button>
            </div>
          </section>
          <section className="history-card">
            <img src={interior} alt="Sala limpia" />
            <div>
              <small>30 JUL · FINALIZADA</small>
              <h3>Limpieza Signature del hogar</h3>
              <p>Daniela R. · $1,590</p>
              <button type="button" onClick={() => go("detail")}>
                Reservar de nuevo
              </button>
            </div>
          </section>
        </>
      )}
    </Page>
  )
}

function Chat({ go }: { go: (s: Screen) => void }) {
  const [messages, setMessages] = useState([
    "¡Hola, Mariana! Voy en camino y llegaré unos minutos antes de las 10.",
    "¡Perfecto, gracias! En la recepción te darán acceso.",
  ])
  const [text, setText] = useState("")
  const send = () => {
    if (text.trim()) {
      setMessages([...messages, text])
      setText("")
    }
  }
  return (
    <Page go={go} nav="chat">
      <div className="chat-head">
        <Action variant="icon" onClick={() => go("home")}>
          <Icon name="back" />
        </Action>
        <img src={cleaner1} alt="Sofía" />
        <div>
          <h3>
            Sofía Martínez{" "}
            <span>
              <Icon name="check" size={9} />
            </span>
          </h3>
          <p>
            <i /> En línea
          </p>
        </div>
        <Action variant="icon">
          <Icon name="phone" />
        </Action>
      </div>
      <div className="booking-banner">
        <Icon name="calendar" />
        <div>
          <small>PRÓXIMA LIMPIEZA</small>
          <b>Vie, 12 sep · 10:00 a. m.</b>
        </div>
        <button type="button" onClick={() => go("tracking")}>
          Ver
        </button>
      </div>
      <div className="messages">
        <span className="chat-date">HOY, 9:24 A. M.</span>
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${i % 2 ? "mine" : "theirs"}`}>
            {i % 2 === 0 && <img src={cleaner1} alt="" />}
            <p>
              {m}
              <small>
                {i === messages.length - 1
                  ? "Leído · 9:27 a. m."
                  : "9:24 a. m."}
              </small>
            </p>
          </div>
        ))}
      </div>
      <div className="composer">
        <Action variant="icon">
          <Icon name="plus" />
        </Action>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Escribe a Sofía…"
        />
        <Action variant="icon" onClick={send}>
          <Icon name="send" />
        </Action>
      </div>
    </Page>
  )
}

function Review({ go }: { go: (s: Screen) => void }) {
  const [stars, setStars] = useState(5),
    [sent, setSent] = useState(false)
  if (sent)
    return (
      <Page go={go} className="review-done">
        <div className="success-small">
          <Icon name="check" size={35} />
        </div>
        <h1>Gracias, Mariana.</h1>
        <p>Tu opinión nos ayuda a que cada limpieza brille todavía más.</p>
        <Action onClick={() => go("bookings")}>Listo</Action>
      </Page>
    )
  return (
    <Page go={go}>
      <Header title="Califica tu limpieza" back={() => go("bookings")} />
      <div className="review-hero">
        <img src={cleaner1} alt="Sofía" />
        <span>
          <b>Sofía Martínez</b>
          <small>Limpieza profunda · 28 ago</small>
        </span>
      </div>
      <div className="rating-question">
        <span className="eyebrow">¿CÓMO NOS FUE?</span>
        <h1>¿Qué tal estuvo tu limpieza?</h1>
        <p>Tu opinión significa mucho para nosotros.</p>
        <div>
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              type="button"
              onClick={() => setStars(i)}
              key={i}
              className={i <= stars ? "active" : ""}
            >
              <Icon name="star" size={33} filled />
            </button>
          ))}
        </div>
        <b>
          {stars === 5 ? "Excepcional" : stars === 4 ? "Muy buena" : "Gracias"}
        </b>
      </div>
      <section className="review-form">
        <h2>¿Qué destacó?</h2>
        <div className="chips wrap">
          {[
            "Atención al detalle",
            "Puntualidad",
            "Amabilidad",
            "Profesionalismo",
            "Excelente comunicación",
          ].map((x) => (
            <button type="button" key={x}>
              {x}
            </button>
          ))}
        </div>
        <label>
          <span>Comparte unas palabras</span>
          <textarea placeholder="Cuéntanos tu experiencia…" />
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          <span>
            <Icon name="check" size={13} />
          </span>
          Publicar mi reseña
        </label>
      </section>
      <div className="sticky-cta single">
        <Action onClick={() => setSent(true)}>Enviar reseña</Action>
      </div>
    </Page>
  )
}

function Offers({ go }: { go: (s: Screen) => void }) {
  return (
    <Page go={go}>
      <Header title="Ofertas y membresía" back={() => go("profile")} />
      <section className="membership-hero">
        <div className="member-logo">
          <Icon name="sparkle" />
          <span>
            ORDENAPP<b>+</b>
          </span>
        </div>
        <h1>
          Más brillo.
          <br />
          Más seguido.
        </h1>
        <p>
          Cuidado premium y ahorros exclusivos para hogares que aman brillar.
        </p>
        <div className="member-price">
          <b>$199</b>
          <span> MXN / mes</span>
        </div>
        <Action>Prueba gratis por 14 días</Action>
        <small>Cancela cuando quieras. Sin compromiso.</small>
      </section>
      <section className="benefits">
        <span className="eyebrow">BENEFICIOS PARA MIEMBROS</span>
        {[
          [
            "gift",
            "15% de descuento en cada limpieza",
            "Ahorra automáticamente, siempre.",
          ],
          [
            "calendar",
            "Agenda prioritaria",
            "Primer acceso a los horarios más solicitados.",
          ],
          [
            "sparkle",
            "Extra premium gratis",
            "Un servicio adicional de cortesía cada mes.",
          ],
          [
            "user",
            "Profesional preferida",
            "Conserva a la profesional que más te gusta.",
          ],
        ].map((x) => (
          <div key={x[1]}>
            <span>
              <Icon name={x[0]} />
            </span>
            <div>
              <b>{x[1]}</b>
              <p>{x[2]}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="offer-card">
        <span>POR TIEMPO LIMITADO</span>
        <h2>Regala un poco de brillo</h2>
        <p>Recomienda a una amiga y ambas reciben $250.</p>
        <Action variant="secondary">Comparte tu invitación</Action>
      </section>
    </Page>
  )
}

function Notifications({ go }: { go: (s: Screen) => void }) {
  const notices = [
    [
      "track",
      "Sofía va en camino",
      "Tu profesional llegará alrededor de las 9:52 a. m.",
      "Hace 2 min",
    ],
    [
      "calendar",
      "Tu limpieza está confirmada",
      "Viernes 12 de septiembre a las 10:00 a. m.",
      "Hace 1 h",
    ],
    [
      "gift",
      "Una oferta luminosa para ti",
      "Disfruta 20% de descuento en un extra ecológico.",
      "Ayer",
    ],
    [
      "sparkle",
      "Tu hogar está reluciente",
      "Tu limpieza del 28 de agosto terminó. ¿Cómo nos fue?",
      "28 ago",
    ],
  ]
  return (
    <Page go={go}>
      <Header
        title="Notificaciones"
        back={() => go("home")}
        right={
          <button type="button" className="text-link">
            Marcar todo como leído
          </button>
        }
      />
      <div className="date-label">NUEVAS</div>
      <div className="notification-list">
        {notices.map((n, i) => (
          <button
            type="button"
            key={n[1]}
            onClick={() =>
              go(i === 0 ? "tracking" : i === 3 ? "review" : "bookings")
            }
          >
            <span className={`notice-icon n${i}`}>
              <Icon name={n[0]} />
            </span>
            <div>
              <b>{n[1]}</b>
              <p>{n[2]}</p>
              <small>{n[3]}</small>
            </div>
            {i < 2 && <i />}
          </button>
        ))}
      </div>
    </Page>
  )
}

function Profile({ go }: { go: (s: Screen) => void }) {
  const rows: [string, string, Screen][] = [
    ["calendar", "Mis reservas", "bookings"],
    ["pin", "Direcciones guardadas", "address"],
    ["card", "Métodos de pago", "checkout"],
    ["gift", "Ofertas y OrdenApp+", "offers"],
    ["bell", "Notificaciones", "notifications"],
    ["settings", "Configuración", "settings"],
    ["help", "Centro de ayuda", "help"],
  ]
  return (
    <Page go={go} nav="profile">
      <Header title="Perfil" />
      <section className="profile-head">
        <div className="avatar">
          MH
          <span>
            <Icon name="sparkle" size={13} />
          </span>
        </div>
        <div>
          <h1>Mariana Herrera</h1>
          <p>mariana@ejemplo.com</p>
          <span className="member-chip">MIEMBRO ORDENAPP</span>
        </div>
      </section>
      <section className="profile-stats">
        <div>
          <b>12</b>
          <small>Limpiezas</small>
        </div>
        <div>
          <b>4.9</b>
          <small>Tu calificación</small>
        </div>
        <div>
          <b>2 años</b>
          <small>Con nosotros</small>
        </div>
      </section>
      <div className="menu-list">
        {rows.map(([ic, label, target]) => (
          <button type="button" key={label} onClick={() => go(target)}>
            <span>
              <Icon name={ic} />
            </span>
            <b>{label}</b>
            {label === "Ofertas y OrdenApp+" && <small>Ahorra 15%</small>}
            <Icon name="arrow" size={17} />
          </button>
        ))}
      </div>
      <button type="button" className="signout">
        <Icon name="logout" /> Cerrar sesión
      </button>
      <p className="version">OrdenApp · Versión 1.0</p>
    </Page>
  )
}

function Settings({ go }: { go: (s: Screen) => void }) {
  const [push, setPush] = useState(true),
    [sms, setSms] = useState(false),
    [eco, setEco] = useState(true)
  return (
    <Page go={go}>
      <Header title="Configuración" back={() => go("profile")} />
      <div className="settings-group">
        <span className="eyebrow">PREFERENCIAS</span>
        <Toggle label="Notificaciones push" value={push} set={setPush} />
        <Toggle label="Mensajes SMS" value={sms} set={setSms} />
        <Toggle
          label="Preferir productos ecológicos"
          value={eco}
          set={setEco}
        />
      </div>
      <div className="settings-group">
        <span className="eyebrow">CUENTA</span>
        {[
          "Información personal",
          "Contraseña y seguridad",
          "Idioma",
          "Preferencias de privacidad",
        ].map((x) => (
          <button type="button" className="setting-row" key={x}>
            <b>{x}</b>
            <Icon name="arrow" size={17} />
          </button>
        ))}
      </div>
      <div className="settings-group">
        <span className="eyebrow">LEGAL</span>
        {["Términos y condiciones", "Aviso de privacidad"].map((x) => (
          <button type="button" className="setting-row" key={x}>
            <b>{x}</b>
            <Icon name="arrow" size={17} />
          </button>
        ))}
      </div>
      <button type="button" className="delete-account">
        Eliminar mi cuenta
      </button>
    </Page>
  )
}

function Toggle({
  label,
  value,
  set,
}: {
  label: string
  value: boolean
  set: (v: boolean) => void
}) {
  return (
    <div className="toggle-row">
      <b>{label}</b>
      <button
        type="button"
        onClick={() => set(!value)}
        className={value ? "on" : ""}
      >
        <span />
      </button>
    </div>
  )
}

function Help({ go }: { go: (s: Screen) => void }) {
  const [open, setOpen] = useState("")
  return (
    <Page go={go}>
      <Header title="Centro de ayuda" back={() => go("profile")} />
      <section className="help-hero">
        <span>
          <Icon name="help" size={28} />
        </span>
        <h1>¿En qué podemos ayudarte?</h1>
        <div className="searchbox">
          <Icon name="search" />
          <input placeholder="Busca respuestas…" />
        </div>
      </section>
      <div className="section-head help-title">
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq">
        {[
          "¿Cómo reprogramo mi reserva?",
          "¿Qué incluye la limpieza del hogar?",
          "¿Puedo pedir a la misma profesional?",
          "¿Qué pasa si no quedo satisfecha?",
          "¿Cómo funcionan las propinas?",
        ].map((x) => (
          <button
            type="button"
            key={x}
            onClick={() => setOpen(open === x ? "" : x)}
          >
            <span>
              <b>{x}</b>
              {open === x && (
                <p>
                  Puedes gestionarlo directamente desde Mis reservas. Selecciona
                  tu reserva y elige la opción que necesites. Nuestro equipo de
                  atención siempre está para ayudarte.
                </p>
              )}
            </span>
            <Icon name={open === x ? "minus" : "plus"} size={18} />
          </button>
        ))}
      </div>
      <section className="support-card">
        <span>
          <Icon name="message" />
        </span>
        <div>
          <h3>¿Aún necesitas ayuda?</h3>
          <p>Nuestro equipo responde normalmente en menos de 5 minutos.</p>
        </div>
        <Action onClick={() => go("chat")}>Chatea con nosotros</Action>
      </section>
    </Page>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash")
  const go = (next: Screen) => {
    setScreen(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  useEffect(() => {
    const t = setTimeout(() => screen === "splash" && go("onboarding"), 2200)
    return () => clearTimeout(t)
  }, [screen])
  const pages: Record<Screen, ReactNode> = {
    splash: <Splash go={go} />,
    onboarding: <Onboarding go={go} />,
    auth: <Auth go={go} />,
    home: <Home go={go} />,
    categories: <Categories go={go} />,
    detail: <Detail go={go} />,
    customize: <Customize go={go} />,
    schedule: <Schedule go={go} />,
    cleaner: <ChooseCleaner go={go} />,
    address: <Address go={go} />,
    checkout: <Checkout go={go} />,
    confirmation: <Confirmation go={go} />,
    tracking: <Tracking go={go} />,
    bookings: <Bookings go={go} />,
    chat: <Chat go={go} />,
    review: <Review go={go} />,
    offers: <Offers go={go} />,
    notifications: <Notifications go={go} />,
    profile: <Profile go={go} />,
    settings: <Settings go={go} />,
    help: <Help go={go} />,
  }
  return (
    <div className="app-shell">
      <div className="phone-frame" key={screen}>
        {pages[screen]}
      </div>
    </div>
  )
}
