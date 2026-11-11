/* =========================================================
   main.js: builds the page from js/data.js and adds the
   small interactive parts (menu, active link, filters).
   You rarely need to change this file to add content.
   ========================================================= */

/* ---------- Helpers ---------- */

// Turns "in-progress" into "In progress" for display.
function statusLabel(status) {
  const text = status.replace("-", " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Builds a small coloured status pill, e.g. <span class="status status-learning">Learning</span>
function statusPill(status) {
  return `<span class="status status-${status}">${statusLabel(status)}</span>`;
}

// Some pages (the project pages) don't have every list, so we check first.
function fill(id, html) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = html;
}

/* ---------- Skills ---------- */
function renderSkills() {
  const html = PORTFOLIO.skills.map((group) => {
    const items = group.items.map((skill) => {
      // Honesty check: "demonstrated" needs proof.
      if (skill.status === "demonstrated" && !skill.evidence) {
        console.warn(`Skill "${skill.name}" is marked demonstrated but has no evidence link.`);
      }
      const name = skill.evidence
        ? `<a href="${skill.evidence}">${skill.name}</a>`
        : skill.name;
      return `<li><span>${name}</span>${statusPill(skill.status)}</li>`;
    }).join("");

    return `
      <div class="skill-group">
        <h3>${group.group}</h3>
        <ul class="skill-list">${items}</ul>
      </div>`;
  }).join("");

  fill("skill-groups", html);
}

/* ---------- Projects ---------- */
function projectCard(project) {
  const title = project.page
    ? `<a href="${project.page}">${project.title}</a>`
    : project.title;

  const tools = project.tools.map((tool) => `<li>${tool}</li>`).join("");

  // A card with its own page is fully clickable; otherwise show the code link if there is one.
  const codeLink = !project.page && project.code
    ? `<a class="card-link" href="${project.code}" target="_blank" rel="noopener">View the source code</a>`
    : "";

  return `
    <article class="card ${project.page ? "is-linked" : ""}" data-category="${project.category}">
      <div class="card-meta">
        <span>${project.number} · ${project.category}</span>
        ${statusPill(project.status)}
      </div>
      <h3>${title}</h3>
      <p>${project.summary}</p>
      <ul class="tag-list" aria-label="Tools">${tools}</ul>
      ${codeLink}
    </article>`;
}

function renderProjects(category) {
  const list = category === "All"
    ? PORTFOLIO.projects
    : PORTFOLIO.projects.filter((project) => project.category === category);

  const html = list.length
    ? list.map(projectCard).join("")
    : `<p class="empty-note">No projects in this area yet.</p>`;

  fill("project-list", html);
}

function renderProjectFilters() {
  const container = document.getElementById("project-filters");
  if (!container) return;

  // Collect each category once, in the order it first appears.
  const categories = ["All", ...new Set(PORTFOLIO.projects.map((p) => p.category))];

  container.innerHTML = categories.map((category, index) =>
    `<button class="filter-button" type="button" aria-pressed="${index === 0}" data-category="${category}">${category}</button>`
  ).join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");
    if (!button) return;

    container.querySelectorAll(".filter-button").forEach((b) => b.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.category);
  });
}

/* ---------- Knowledge ---------- */
function renderKnowledge() {
  const html = PORTFOLIO.knowledge.map((note) => {
    const title = note.page ? `<a href="${note.page}">${note.title}</a>` : note.title;
    return `
      <article class="card ${note.page ? "is-linked" : ""}">
        <div class="card-meta"><span>${note.area}</span></div>
        <h3>${title}</h3>
        <p>${note.summary}</p>
        <div class="card-formula">${note.formula}</div>
      </article>`;
  }).join("");

  fill("knowledge-list", html);
}

/* ---------- Progress log ---------- */
function renderLog() {
  const html = PORTFOLIO.log.map((entry) => `
    <li>
      <time datetime="${entry.date}">${entry.date}</time>
      <h3>${entry.title}</h3>
      <p>${entry.text}</p>
    </li>`).join("");

  fill("log-list", html);
}

/* ---------- Mobile menu ---------- */
function setupMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const label = toggle.querySelector(".visually-hidden");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    label.textContent = open ? "Close menu" : "Open menu";
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close the menu after choosing a link, or with the Escape key.
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

/* ---------- Header border + active nav link ---------- */
function setupScrollState() {
  const header = document.querySelector(".site-header");
  const links = document.querySelectorAll(".site-nav a[href^='#']");

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  if (!links.length) return;

  // IntersectionObserver tells us which section is in the middle of the screen.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });
}

/* ---------- Start ---------- */
// Scripts are loaded with "defer", so the HTML is ready when this runs.
// data.js is optional on project pages, so we check it exists first.
if (typeof PORTFOLIO !== "undefined") {
  renderSkills();
  renderProjectFilters();
  renderProjects("All");
  renderKnowledge();
  renderLog();
}
setupMenu();
setupScrollState();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
