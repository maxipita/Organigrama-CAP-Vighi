// ---------- ICONS ----------
const ICONS = {
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.5.5.9 1.2 1 2.5h6c.1-1.3.5-2 1-2.5A6 6 0 0 0 12 2Z"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>',
};

// ---------- ROLE DETAILS ----------
const NODE_DATA = {
  asistente: {
    description:
      "Brinda soporte ejecutivo y administrativo a la Dirección Ejecutiva y a la Dirección Médica, asegurando la coordinación eficiente de los procesos institucionales y el seguimiento de las prioridades estratégicas de la organización.",
    items: [
      "Coordinación de agendas institucionales",
      "Organización y documentación de reuniones ejecutivas",
      "Monitoreo de compromisos y planes de acción",
      "Gestión administrativa de la Dirección",
      "Soporte en relaciones institucionales y comerciales",
    ],
  },
  exec: {
    items: [
      "Definición de la estrategia corporativa",
      "Desarrollo y expansión institucional",
      "Alianzas estratégicas",
      "Sostenibilidad económica y financiera",
      "Liderazgo organizacional",
    ],
  },
  medica: {
    items: [
      "Estrategia médica institucional",
      "Calidad y seguridad diagnóstica",
      "Innovación tecnológica aplicada a Anatomía Patológica",
      "Patología Digital e Inteligencia Artificial",
      "Desarrollo científico y académico",
      "Relaciones institucionales",
      "Expansión nacional y regional",
      "Definición de estándares médicos y de calidad",
    ],
  },
  comercial: {
    items: [
      "Implementar la estrategia comercial de la organización",
      "Gestionar y maximizar la rentabilidad en la búsqueda de financiamiento externo (bancos)",
      "Seguimiento y gestión de la relación comercial con proveedores",
      "Identificar oportunidades de crecimiento y expansión territorial",
      "Desarrollar nuevos clientes e instituciones de salud",
      "Gestionar la relación con clientes estratégicos",
      "Elaborar propuestas comerciales y negociar contratos",
      "Analizar el mercado y detectar oportunidades de negocio",
      "Coordinar acciones de fidelización y satisfacción de clientes",
      "Desarrollar alianzas estratégicas con instituciones y empresas del sector",
      "Supervisar el posicionamiento institucional y la comunicación corporativa",
      "Participar en la planificación y ejecución de proyectos de expansión nacional y regional",
      "Monitorear indicadores comerciales y objetivos de crecimiento",
      "Realizar seguimiento de la rentabilidad de clientes y unidades de negocio",
    ],
  },
  administrativa: {
    items: [
      "Supervisar la gestión administrativa integral de la organización",
      "Coordinar los procesos de facturación y cobranzas",
      "Controlar el cumplimiento de los circuitos administrativos internos",
      "Elaborar y monitorear presupuestos",
      "Realizar seguimiento de costos, gastos y rentabilidad",
      "Supervisar compras y abastecimiento de insumos",
      "Garantizar el cumplimiento de normativas administrativas y regulatorias",
      "Elaborar reportes de gestión para la Dirección",
      "Impulsar la mejora continua y la eficiencia de los procesos administrativos",
    ],
  },
  tecnologia: {
    items: [
      "Sistemas (SGV)",
      "Integración con historias clínicas",
      "Patología digital",
      "Inteligencia Artificial",
      "Automatización de procesos",
    ],
  },
  supervision: {
    items: [
      "Gestión del Heat Map",
      "Seguimiento de indicadores",
      "Auditoría de procesos",
      "Mejora continua",
      "Optimización operativa",
      "Interacción con áreas de IT",
      "Nexo con Dirección Médica",
    ],
  },
  subdireccion: {
    description:
      "La Subdirección Médica tiene como misión acompañar a la Dirección Médica en la gestión integral de la actividad asistencial y diagnóstica de CAP Vighi.",
    items: [
      "Coordinar y supervisar la actividad diaria del cuerpo médico",
      "Asegurar el cumplimiento de los tiempos de respuesta diagnóstica",
      "Monitorear la calidad técnica y científica de los informes",
      "Promover la estandarización de criterios diagnósticos y plantillas",
      "Liderar la implementación de mejoras operativas",
      "Participar en la capacitación y desarrollo profesional",
      "Actuar como nexo entre la Dirección Médica y el equipo médico",
      "Impulsar proyectos de innovación y transformación digital",
      "Promover trabajos científicos en sociedades nacionales e internacionales",
      "Supervisión y coordinación de asistencia a congresos y jornadas del equipo médico",
    ],
  },
  "area-medica": {
    items: [
      "Patólogos Staff",
      "Patólogos Subespecialistas",
      "Citología",
      "Inmunohistoquímica",
      "Biología Molecular",
      "Inmunofluorescencia",
    ],
  },
  "area-tecnica": {
    items: [
      "Macroscopía",
      "Histotecnología",
      "Inclusión",
      "Corte",
      "Coloración",
      "Montaje",
      "Escaneo digital",
      "Archivo",
    ],
  },
  "area-administrativa": {
    items: [
      "Ingreso de muestras",
      "Facturación",
      "Convenios",
      "Atención al cliente",
      "Gestión documental",
    ],
  },
  "area-logistica": {
    items: [
      "Mensajería",
      "Distribución y retiro de muestras",
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Inject icons
  document.querySelectorAll(".node-icon").forEach((el) => {
    const name = el.dataset.icon;
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });

  setupModal();
  drawConnectors();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawConnectors, 120);
  });
});

// ---------- CONNECTORS ----------
function rectRelativeTo(el, container) {
  const r = el.getBoundingClientRect();
  const c = container.getBoundingClientRect();
  return {
    left: r.left - c.left,
    right: r.right - c.left,
    top: r.top - c.top,
    bottom: r.bottom - c.top,
    centerX: (r.left + r.right) / 2 - c.left,
    centerY: (r.top + r.bottom) / 2 - c.top,
  };
}

function drawConnectors() {
  const container = document.getElementById("chart-grid");
  const svg = document.getElementById("connectors");
  svg.innerHTML = "";

  // arrow marker
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="var(--line-color)"></path>
    </marker>`;
  svg.appendChild(defs);

  const get = (id) => document.getElementById(id);

  // Direct vertical link with arrow (exec -> medica)
  lineWithArrow(svg, container, get("exec"), get("medica"), "down");

  // Side branches (same row, arrow points into the target box)
  sideBranch(svg, container, get("exec"), get("asistente"), "left");
  sideBranch(svg, container, get("medica"), get("tecnologia"), "left");
  sideBranch(svg, container, get("medica"), get("supervision"), "right");

  // Fan-outs
  fanOut(svg, container, get("medica"), [get("administrativa"), get("comercial"), get("subdireccion")]);
  fanOut(svg, container, get("administrativa"), [get("area-administrativa"), get("area-logistica")]);
  fanOut(svg, container, get("subdireccion"), [get("area-medica"), get("area-tecnica")]);
}

function addPath(svg, d, withArrow) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "var(--line-color)");
  path.setAttribute("stroke-width", "2");
  if (withArrow) path.setAttribute("marker-end", "url(#arrow)");
  svg.appendChild(path);
}

// Vertical straight line from one node down to another, with arrowhead
function lineWithArrow(svg, container, fromEl, toEl, direction) {
  const a = rectRelativeTo(fromEl, container);
  const b = rectRelativeTo(toEl, container);
  if (direction === "down") {
    addPath(svg, `M ${a.centerX} ${a.bottom} L ${b.centerX} ${b.top}`, true);
  }
}

// Horizontal branch between two same-row nodes (the parent's edge to the child's edge)
function sideBranch(svg, container, parentEl, childEl, direction) {
  const p = rectRelativeTo(parentEl, container);
  const c = rectRelativeTo(childEl, container);
  const y = c.centerY;
  if (direction === "left") {
    addPath(svg, `M ${p.centerX} ${y} L ${c.right} ${y}`, true);
  } else {
    addPath(svg, `M ${p.centerX} ${y} L ${c.left} ${y}`, true);
  }
}

// One parent fans out (down) into several children
function fanOut(svg, container, parentEl, childEls) {
  const p = rectRelativeTo(parentEl, container);
  const children = childEls.map((el) => rectRelativeTo(el, container));

  const startY = p.bottom;
  const endY = Math.min(...children.map((c) => c.top));
  const midY = startY + (endY - startY) / 2;

  // trunk
  addPath(svg, `M ${p.centerX} ${startY} L ${p.centerX} ${midY}`, false);

  // distribution bar
  if (children.length > 1) {
    const xs = children.map((c) => c.centerX);
    addPath(svg, `M ${Math.min(...xs)} ${midY} L ${Math.max(...xs)} ${midY}`, false);
  }

  // drop into each child
  children.forEach((c) => {
    addPath(svg, `M ${c.centerX} ${midY} L ${c.centerX} ${c.top}`, true);
  });
}

// ---------- MODAL ----------
function setupModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  const roleEl = document.getElementById("modal-role");
  const nameEl = document.getElementById("modal-name");
  const iconEl = document.getElementById("modal-icon");
  const descEl = document.getElementById("modal-description");
  const listEl = document.getElementById("modal-list");

  document.querySelectorAll(".node").forEach((node) => {
    node.addEventListener("click", () => {
      const role = node.dataset.role || "";
      const name = node.dataset.name || "";
      const iconName = node.querySelector(".node-icon")?.dataset.icon || "user";
      const extra = NODE_DATA[node.id] || {};

      roleEl.textContent = role;
      nameEl.textContent = name || "Vacante / a definir";
      iconEl.innerHTML = ICONS[iconName] || ICONS.user;

      if (extra.description) {
        descEl.textContent = extra.description;
        descEl.style.display = "block";
      } else {
        descEl.textContent = "";
        descEl.style.display = "none";
      }

      listEl.innerHTML = "";
      if (extra.items && extra.items.length) {
        extra.items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          listEl.appendChild(li);
        });
        listEl.style.display = "block";
      } else {
        listEl.style.display = "none";
      }

      overlay.classList.add("is-open");
    });
  });

  const close = () => overlay.classList.remove("is-open");
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
