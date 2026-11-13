/* =========================================================
   PORTFOLIO CONTENT
   This is the file you edit most often.
   main.js reads these lists and builds the HTML for you,
   so adding a project = adding one { ... } block below.

   Status values:
     skills:   "planned" | "learning" | "demonstrated"
     projects: "planned" | "in-progress" | "completed"

   Honesty rule: a skill may only be "demonstrated" if it has
   an "evidence" link to a project that proves it.
   main.js prints a warning in the browser console otherwise.
   ========================================================= */

const PORTFOLIO = {

  /* ---------- SKILLS ---------- */
  skills: [
    {
      group: "Electrical engineering",
      items: [
        { name: "Voltage, current and resistance", status: "learning" },
        { name: "Basic circuit theory", status: "learning" },
        { name: "Electronic components", status: "learning" },
        { name: "Circuit analysis", status: "planned" },
        { name: "Sensors and microcontrollers", status: "planned" }
      ]
    },
    {
      group: "Programming",
      items: [
        { name: "HTML and CSS", status: "learning" },
        { name: "JavaScript", status: "learning" },
        { name: "Git and GitHub", status: "learning" },
        { name: "Python", status: "planned" },
        { name: "C and C++", status: "planned" }
      ]
    },
    {
      group: "Mathematics and physics",
      items: [
        { name: "Algebra and functions", status: "learning" },
        { name: "Electricity and magnetism", status: "learning" },
        { name: "Mechanics", status: "planned" },
        { name: "Calculus", status: "planned" },
        { name: "Applied mathematics", status: "planned" }
      ]
    }
    /* Example of a demonstrated skill (only once it is true):
       { name: "Ohm's law calculations", status: "demonstrated", evidence: "projects/led-resistor.html" } */
  ],

  /* ---------- PROJECTS ----------
     category must be one of: "Electronics", "Programming", "Maths & physics", "Simulation"
     page:  link to the project's own page (leave "" until it exists)
     code:  link to source code on GitHub (leave "" if there is none) */
  projects: [
    {
      number: "01",
      title: "This portfolio website",
      category: "Programming",
      status: "in-progress",
      summary: "A hand-built site in HTML, CSS and JavaScript, hosted on GitHub Pages, that grows with every project.",
      tools: ["HTML", "CSS", "JavaScript", "Git"],
      page: "",
      code: "https://github.com/Manuopus/electrical-engineering-portfolio"
    },
    {
      number: "02",
      title: "Measuring LED current with an Arduino Nano",
      category: "Electronics",
      status: "planned",
      summary: "Predict the LED current at 5, 10 and 20 kΩ, then measure it with the Nano as a voltmeter to test Ohm's law.",
      tools: ["Arduino Nano", "Breadboard", "C++", "Ohm's law"],
      page: "projects/led-resistor.html",
      code: ""
    },
    {
      number: "03",
      title: "Voltage divider in a circuit simulator",
      category: "Simulation",
      status: "planned",
      summary: "Model a two-resistor divider in Falstad, predict the output voltage by hand and compare it with the simulation.",
      tools: ["Falstad", "Kirchhoff's laws"],
      page: "",
      code: ""
    }
  ],

  /* ---------- ENGINEERING KNOWLEDGE ----------
     Short study notes. "page" can link to a longer explanation later. */
  knowledge: [
    {
      area: "Circuit theory",
      title: "Ohm's law",
      summary: "The current through a resistor is proportional to the voltage across it.",
      formula: "U = R · I",
      page: "projects/led-resistor.html#theory"
    },
    {
      area: "Circuit theory",
      title: "Electrical power",
      summary: "How much energy per second a component converts, usually into heat or light.",
      formula: "P = U · I = I² · R",
      page: ""
    },
    {
      area: "Circuit theory",
      title: "Series and parallel resistors",
      summary: "Series resistances add up; in parallel the reciprocals add up.",
      formula: "R = R₁ + R₂   |   1/R = 1/R₁ + 1/R₂",
      page: ""
    }
  ],

  /* ---------- PROGRESS LOG ----------
     Newest entry first. Dates as YYYY-MM-DD. */
  log: [
    {
      date: "2026-11-11",
      title: "Built the first version of this portfolio",
      text: "Structured the site with HTML, styled it with CSS and moved all content into a data file so new projects take one edit."
    },
    {
      date: "2026-11-11",
      title: "Created the GitHub repository",
      text: "Set up electrical-engineering-portfolio as a public repository so every change is visible."
    }
  ]
};
