// ---------- ICONS ----------
const ICONS = {
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.5.5.9 1.2 1 2.5h6c.1-1.3.5-2 1-2.5A6 6 0 0 0 12 2Z"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
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
  fanOut(svg, container, get("medica"), [get("admin"), get("comercial"), get("subdireccion")]);
  fanOut(svg, container, get("admin"), [get("logistica"), get("paps"), get("biopsias")]);
  fanOut(svg, container, get("subdireccion"), [get("ihq"), get("supervisor"), get("patologos")]);
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

// Vertical (or horizontal) straight line from one node to another, with arrowhead
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

  document.querySelectorAll(".node").forEach((node) => {
    node.addEventListener("click", () => {
      const role = node.dataset.role || "";
      const name = node.dataset.name || "";
      const iconName = node.querySelector(".node-icon")?.dataset.icon || "user";

      roleEl.textContent = role;
      nameEl.textContent = name || "Vacante / a definir";
      iconEl.innerHTML = ICONS[iconName] || ICONS.user;

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
