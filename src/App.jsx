import React, { useEffect, useMemo, useState } from "react";
import logo from "./assets/logo.jpeg";

/* ---------------- SERVICES DATA (defined FIRST to avoid TDZ error) ---------------- */

const servicesDe = [
  {
    icon: "🛠️",
    title: "IT-Beratung & Support",
    text: "Kompetente Beratung und schneller Support für Ihre IT-Infrastruktur.",
    details: [
      "Analyse Ihrer aktuellen IT-Landschaft",
      "Empfehlungen für Performance, Sicherheit und Kostenoptimierung",
      "Remote- und Vor-Ort-Support nach Bedarf",
    ],
  },
  {
    icon: "🌐",
    title: "Netzwerktechnik & Standortvernetzung",
    text: "Planung, Implementierung und Wartung sicherer Unternehmensnetzwerke.",
    details: [
      "Planung und Aufbau sicherer LAN- und WLAN-Strukturen",
      "Vernetzung mehrerer Standorte (VPN/MPLS)",
      "Monitoring und Fehleranalyse im Netzwerk",
    ],
  },
  {
    icon: "💻",
    title: "Webdesign & Hosting",
    text: "Moderne Webseiten und zuverlässiges Hosting für Ihren Online-Auftritt.",
    details: [
      "Responsives Design für alle Endgeräte",
      "Optimierung für Ladezeiten und Suchmaschinen",
      "Sicheres Hosting inklusive SSL & Backups",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud-Dienste (inkl. Private Cloud)",
    text: "Flexible und sichere Cloud-Lösungen für Daten und Anwendungen.",
    details: [
      "Beratung zu Public-, Private- und Hybrid-Cloud",
      "Migration von Servern und Anwendungen in die Cloud",
      "Sichere Speicherung und verschlüsselte Datenübertragung",
    ],
  },
  {
    icon: "✉️",
    title: "Microsoft 365 & E-Mail-Security",
    text: "Optimale Nutzung von M365 und Schutz vor E-Mail-Bedrohungen.",
    details: [
      "Einrichtung und Verwaltung Ihrer Microsoft 365 Umgebung",
      "Schutz vor Spam, Phishing und Schadsoftware",
      "Schulung Ihrer Mitarbeitenden für sicheres E-Mail-Verhalten",
    ],
  },
  {
    icon: "🧩",
    title: "Managed Services",
    text: "Proaktive Verwaltung und Überwachung Ihrer gesamten IT-Landschaft.",
    details: [
      "24/7-Monitoring von Servern, Clients und Netzwerk",
      "Regelmäßige Wartung und Patch-Management",
      "Transparente Reports zu Verfügbarkeit und Stabilität",
    ],
  },
  {
    icon: "🔐",
    title: "IT-Sicherheitscheck & Schutz",
    text: "Analyse von Schwachstellen und Implementierung von Schutzmaßnahmen.",
    details: [
      "Sicherheitsaudits und Penetrationstests",
      "Empfehlungen zu Firewall-, Endpoint- und Backup-Konzepten",
      "Umsetzung technischer und organisatorischer Maßnahmen",
    ],
  },
  {
    icon: "⬆️",
    title: "Softwareinstallation & Updateservices",
    text: "Professionelle Installation und regelmäßige Updates Ihrer Software.",
    details: [
      "Standardisierte Rollouts neuer Software",
      "Planung und Durchführung von Updates & Upgrades",
      "Dokumentation und Rückfallstrategien (Rollback)",
    ],
  },
  {
    icon: "📱",
    title: "Mobile Device Management (MDM)",
    text: "Sichere Verwaltung Ihrer mobilen Endgeräte im Unternehmen.",
    details: [
      "Zentrale Verwaltung von Smartphones, Tablets und Laptops",
      "Durchsetzung von Sicherheitsrichtlinien (PIN, Verschlüsselung)",
      "Remote-Wipe bei Verlust oder Diebstahl",
    ],
  },
  {
    icon: "🏠",
    title: "Homeoffice-Lösungen",
    text: "Effiziente und sichere Ausstattung für Remote-Arbeitsplätze.",
    details: [
      "VPN- und Remote-Desktop-Lösungen",
      "Integration von Collaboration-Tools (Teams, Zoom usw.)",
      "Sicherheitskonzepte für das Arbeiten von zu Hause",
    ],
  },
  {
    icon: "📦",
    title: "IT-Miete & Modernisierung",
    text: "Flexible Hardware-Miete und strategische Modernisierung.",
    details: [
      "Planung von Hardware-Erneuerungen und Lifecycle-Management",
      "Mietmodelle für Server, Clients und Netzwerk-Komponenten",
      "Transparente Kostenmodelle statt hoher Einmalinvestitionen",
    ],
  },
  {
    icon: "📞",
    title: "Telekommunikation (z. B. VoIP)",
    text: "Moderne Kommunikationslösungen für Ihr Unternehmen.",
    details: [
      "Einrichtung moderner VoIP-Telefonanlagen",
      "Vernetzung von Standorten und mobilen Mitarbeitenden",
      "Integration in CRM- und Ticketsysteme",
    ],
  },
];

const servicesEn = [
  {
    icon: "🛠️",
    title: "IT Consulting & Support",
    text: "Expert consulting and fast support for your IT infrastructure.",
    details: [
      "Analysis of your current IT landscape",
      "Recommendations for performance, security and cost optimization",
      "Remote and on-site support as needed",
    ],
  },
  {
    icon: "🌐",
    title: "Network Technology & Site Connectivity",
    text: "Planning, implementation and maintenance of secure business networks.",
    details: [
      "Design and setup of secure LAN and Wi-Fi",
      "Connecting multiple locations (VPN/MPLS)",
      "Monitoring and troubleshooting",
    ],
  },
  {
    icon: "💻",
    title: "Web Design & Hosting",
    text: "Modern websites and reliable hosting for your online presence.",
    details: [
      "Responsive design for all devices",
      "Optimization for speed and SEO",
      "Secure hosting incl. SSL and backups",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Services (incl. Private Cloud)",
    text: "Flexible and secure cloud solutions for data and applications.",
    details: [
      "Consulting for public, private and hybrid cloud",
      "Migration of servers and applications to the cloud",
      "Secure storage and encrypted transfer",
    ],
  },
  {
    icon: "✉️",
    title: "Microsoft 365 & Email Security",
    text: "Best use of M365 and protection against email threats.",
    details: [
      "Setup and administration of Microsoft 365",
      "Protection against spam, phishing and malware",
      "User awareness training for safe email usage",
    ],
  },
  {
    icon: "🧩",
    title: "Managed Services",
    text: "Proactive management and monitoring of your entire IT environment.",
    details: [
      "24/7 monitoring of servers, endpoints and network",
      "Regular maintenance and patch management",
      "Transparent reports on availability and stability",
    ],
  },
  {
    icon: "🔐",
    title: "IT Security Check & Protection",
    text: "Identify vulnerabilities and implement protection measures.",
    details: [
      "Security audits and penetration testing",
      "Firewall, endpoint and backup recommendations",
      "Implementation of technical and organizational measures",
    ],
  },
  {
    icon: "⬆️",
    title: "Software Installation & Updates",
    text: "Professional installations and regular software updates.",
    details: [
      "Standardized software rollouts",
      "Planning and execution of updates & upgrades",
      "Documentation and rollback strategies",
    ],
  },
  {
    icon: "📱",
    title: "Mobile Device Management (MDM)",
    text: "Secure management of mobile devices in your company.",
    details: [
      "Central management of smartphones, tablets and laptops",
      "Enforcing security policies (PIN, encryption)",
      "Remote wipe in case of loss or theft",
    ],
  },
  {
    icon: "🏠",
    title: "Home Office Solutions",
    text: "Efficient and secure setups for remote workplaces.",
    details: [
      "VPN and remote desktop solutions",
      "Integration of collaboration tools (Teams, Zoom, etc.)",
      "Security concepts for working from home",
    ],
  },
  {
    icon: "📦",
    title: "IT Leasing & Modernization",
    text: "Flexible hardware leasing and strategic modernization.",
    details: [
      "Planning hardware renewals and lifecycle management",
      "Leasing models for servers, clients and network gear",
      "Transparent cost models instead of large one-time investments",
    ],
  },
  {
    icon: "📞",
    title: "Telecommunications (e.g. VoIP)",
    text: "Modern communication solutions for your business.",
    details: [
      "Setup of modern VoIP phone systems",
      "Connecting locations and mobile workers",
      "Integration into CRM and ticketing systems",
    ],
  },
];

const servicesEs = [
  {
    icon: "🛠️",
    title: "Consultoría y soporte IT",
    text: "Asesoría experta y soporte rápido para su infraestructura de TI.",
    details: [
      "Análisis de su entorno IT actual",
      "Recomendaciones sobre rendimiento, seguridad y costes",
      "Soporte remoto y presencial según necesidad",
    ],
  },
  {
    icon: "🌐",
    title: "Redes y conexión entre sedes",
    text: "Planificación, implantación y mantenimiento de redes seguras.",
    details: [
      "Diseño e instalación de LAN y Wi-Fi seguros",
      "Conexión de varias sedes (VPN/MPLS)",
      "Monitorización y resolución de incidencias",
    ],
  },
  {
    icon: "💻",
    title: "Diseño web y hosting",
    text: "Sitios web modernos y hosting fiable para su presencia online.",
    details: [
      "Diseño responsive para todos los dispositivos",
      "Optimización para velocidad y SEO",
      "Hosting seguro con SSL y copias de seguridad",
    ],
  },
  {
    icon: "☁️",
    title: "Servicios en la nube (incl. nube privada)",
    text: "Soluciones cloud flexibles y seguras para datos y aplicaciones.",
    details: [
      "Asesoría sobre cloud pública, privada e híbrida",
      "Migración de servidores y aplicaciones",
      "Almacenamiento seguro y transferencia cifrada",
    ],
  },
  {
    icon: "✉️",
    title: "Microsoft 365 y seguridad de correo",
    text: "Uso óptimo de M365 y protección frente a amenazas por email.",
    details: [
      "Configuración y gestión de Microsoft 365",
      "Protección frente a spam, phishing y malware",
      "Formación de usuarios en uso seguro del correo",
    ],
  },
  {
    icon: "🧩",
    title: "Servicios gestionados",
    text: "Gestión y monitorización proactiva de todo su entorno IT.",
    details: [
      "Monitorización 24/7 de servidores, equipos y redes",
      "Mantenimiento regular y gestión de parches",
      "Informes transparentes de disponibilidad y estabilidad",
    ],
  },
  {
    icon: "🔐",
    title: "Chequeo de seguridad IT y protección",
    text: "Análisis de vulnerabilidades e implantación de medidas de protección.",
    details: [
      "Auditorías de seguridad y pruebas de penetración",
      "Recomendaciones de firewall, endpoint y backups",
      "Aplicación de medidas técnicas y organizativas",
    ],
  },
  {
    icon: "⬆️",
    title: "Instalación de software y actualizaciones",
    text: "Instalación profesional y actualizaciones regulares de su software.",
    details: [
      "Despliegues estandarizados de software",
      "Planificación y ejecución de actualizaciones y upgrades",
      "Documentación y estrategias de rollback",
    ],
  },
  {
    icon: "📱",
    title: "Gestión de dispositivos móviles (MDM)",
    text: "Gestión segura de dispositivos móviles en su empresa.",
    details: [
      "Gestión centralizada de smartphones, tablets y portátiles",
      "Aplicación de políticas de seguridad (PIN, cifrado)",
      "Borrado remoto en caso de pérdida o robo",
    ],
  },
  {
    icon: "🏠",
    title: "Soluciones para teletrabajo",
    text: "Equipamiento eficiente y seguro para puestos de trabajo remotos.",
    details: [
      "Soluciones VPN y escritorio remoto",
      "Integración de herramientas de colaboración (Teams, Zoom, etc.)",
      "Conceptos de seguridad para trabajar desde casa",
    ],
  },
  {
    icon: "📦",
    title: "Alquiler y modernización de IT",
    text: "Alquiler flexible de hardware y modernización estratégica.",
    details: [
      "Planificación de renovaciones de hardware y ciclo de vida",
      "Modelos de alquiler para servidores, equipos y red",
      "Costes transparentes sin grandes inversiones únicas",
    ],
  },
  {
    icon: "📞",
    title: "Telecomunicaciones (p. ej. VoIP)",
    text: "Soluciones de comunicación modernas para su empresa.",
    details: [
      "Configuración de centrales telefónicas VoIP",
      "Conexión de sedes y trabajadores móviles",
      "Integración con CRM y sistemas de tickets",
    ],
  },
];

/* ---------------- TRANSLATIONS ---------------- */

const translations = {
  de: {
    label: "DE",
    nav: {
      brand: "managed4u",
      home: "Startseite",
      services: "Leistungen",
      about: "Über uns",
      contact: "Kontakt",
      itcheck: "IT-Check",
      cta: "Jetzt anfragen",
    },
    hero: {
      pill: "IT-Dienstleistungen für Unternehmen",
      title: "IT neu gedacht. Managed. Sicher. Flexibel.",
      text:
        "Wir bieten Ihnen maßgeschneiderte IT-Lösungen – von Beratung bis Betrieb, damit Ihre Systeme stabil, sicher und zukunftsfähig bleiben.",
      primary: "Jetzt unverbindlich beraten lassen",
      secondary: "Schnellcheck starten",
    },
    about: {
      title: "Ihr ganzheitlicher IT-Dienstleister",
      lead:
        "Wir begleiten Unternehmen jeder Größe – von der strategischen Beratung bis zum täglichen Betrieb Ihrer IT-Landschaft.",
      bullets: [
        "✔ Proaktive Überwachung und 24/7-Bereitschaft",
        "✔ Sicherheitskonzepte nach aktuellen Best Practices",
        "✔ Flexible Lösungen für On-Premises, Cloud & Hybrid",
      ],
      cardTitle: "Warum managed4u?",
      cardText:
        "Kurze Reaktionszeiten, transparente Kommunikation und ein Team, das Ihre IT wirklich versteht.",
      highlight: "98% Kundenzufriedenheit · 15+ Jahre Erfahrung",
    },
    servicesSection: {
      title: "IT-Dienstleistungen",
      subtitle:
        "Alles aus einer Hand – für eine leistungsstarke, sichere und moderne IT.",
      more: "Mehr erfahren",
      modalPrimary: "Jetzt anfragen",
      modalSecondary: "Schließen",
      pick: "Gewünschte Leistung auswählen",
    },
    services: servicesDe,
    itCheck: {
      title: "IT-Check in 60 Sekunden",
      text:
        "Beantworten Sie 5 Fragen und erhalten Sie eine erste Einschätzung Ihrer IT-Situation.",
      progress: (step, total) => `Frage ${step} von ${total}`,
      thanksTitle: "Vielen Dank!",
      thanksText:
        "Ihr IT-Check ist abgeschlossen. Wir melden uns mit einer individuellen Einschätzung und möglichen Handlungsempfehlungen.",
      contactBtn: "Kontakt aufnehmen",
      questions: [
        {
          question: "Wie alt sind Ihre Server?",
          answers: [
            "Weniger als 3 Jahre",
            "3–5 Jahre",
            "Älter als 5 Jahre / Keine Ahnung",
          ],
        },
        {
          question: "Wie oft werden Backups durchgeführt?",
          answers: ["Täglich", "Wöchentlich", "Seltener / Keine Ahnung"],
        },
        {
          question: "Wie wird Ihre IT-Sicherheit geprüft?",
          answers: ["Regelmäßig", "Gelegentlich", "Gar nicht / Keine Ahnung"],
        },
        {
          question: "Nutzen Sie Cloud-Dienste?",
          answers: ["Ja", "Teilweise", "Nein / Unsicher"],
        },
        {
          question: "Gibt es einen Notfallplan?",
          answers: ["Ja", "Teilweise", "Nein / Keine Ahnung"],
        },
      ],
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle:
        "Wir freuen uns auf Ihre Nachricht und beraten Sie gerne unverbindlich.",
      name: "Name*",
      company: "Firma",
      phone: "Telefonnummer",
      email: "E-Mail*",
      interests: "Ich interessiere mich für:",
      messageLabel: "Ihre Nachricht",
      consent: "Ich stimme der Datenverarbeitung zu.",
      submit: "Jetzt Anfrage stellen",
      success: "Nachricht gesendet! (Demo)",
    },
    footer: {
      about:
        "IT-Dienstleistungen für Unternehmen – sicher, flexibel, effizient.",
      nav: "Navigation",
      legal: "Rechtliches",
      contact: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutz",
      addressLine1: "managed4u",
      addressLine2: "Sevilla, Spanien",
      email: "info@managed4u.de",
      rights: (year) => `© ${year} managed4u – Alle Rechte vorbehalten.`,
    },
    floating: {
      label: "Mehr Informationen?",
      phone: "Jetzt anrufen: +49 1522 2907274",
    },
  },

  en: {
    label: "EN",
    nav: {
      brand: "managed4u",
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      itcheck: "IT Check",
      cta: "Request now",
    },
    hero: {
      pill: "IT services for businesses",
      title: "Rethinking IT. Managed. Secure. Flexible.",
      text:
        "We provide tailored IT solutions – from consulting to operations – so your systems remain stable, secure and future-proof.",
      primary: "Get a free consultation",
      secondary: "Start quick check",
    },
    about: {
      title: "Your full-service IT partner",
      lead:
        "We support companies of all sizes – from strategic consulting to day-to-day IT operations.",
      bullets: [
        "✔ Proactive monitoring and 24/7 availability",
        "✔ Security concepts following current best practices",
        "✔ Flexible solutions for on-premises, cloud & hybrid",
      ],
      cardTitle: "Why managed4u?",
      cardText:
        "Fast response times, transparent communication and a team that truly understands your IT.",
      highlight: "98% client satisfaction · 15+ years of experience",
    },
    servicesSection: {
      title: "IT Services",
      subtitle:
        "Everything from a single source – for powerful, secure and modern IT.",
      more: "Learn more",
      modalPrimary: "Request now",
      modalSecondary: "Close",
      pick: "Select desired service",
    },
    services: servicesEn,
    itCheck: {
      title: "IT check in 60 seconds",
      text:
        "Answer 5 short questions and receive an initial assessment of your IT situation.",
      progress: (step, total) => `Question ${step} of ${total}`,
      thanksTitle: "Thank you!",
      thanksText:
        "Your IT check is complete. We will contact you with an individual assessment and recommendations.",
      contactBtn: "Get in touch",
      questions: [
        {
          question: "How old are your servers?",
          answers: ["Less than 3 years", "3–5 years", "More than 5 years / Unsure"],
        },
        {
          question: "How often are backups performed?",
          answers: ["Daily", "Weekly", "Less often / Unsure"],
        },
        {
          question: "How is your IT security reviewed?",
          answers: ["Regularly", "Occasionally", "Not at all / Unsure"],
        },
        {
          question: "Do you use cloud services?",
          answers: ["Yes", "Partly", "No / Unsure"],
        },
        {
          question: "Do you have a disaster recovery plan?",
          answers: ["Yes", "Partly", "No / Unsure"],
        },
      ],
    },
    contact: {
      title: "Contact us",
      subtitle:
        "We look forward to your message and will be happy to advise you without obligation.",
      name: "Name*",
      company: "Company",
      phone: "Phone number",
      email: "E-mail*",
      interests: "I am interested in:",
      messageLabel: "Your message",
      consent: "I agree to the processing of my data.",
      submit: "Request now",
      success: "Message sent! (Demo)",
    },
    footer: {
      about: "IT services for businesses – secure, flexible, efficient.",
      nav: "Navigation",
      legal: "Legal",
      contact: "Contact",
      imprint: "Imprint",
      privacy: "Privacy policy",
      addressLine1: "managed4u",
      addressLine2: "Seville, Spain",
      email: "info@managed4u.de",
      rights: (year) => `© ${year} managed4u – All rights reserved.`,
    },
    floating: {
      label: "More information?",
      phone: "Call now: +49 1522 2907274",
    },
  },

  es: {
    label: "ES",
    nav: {
      brand: "managed4u",
      home: "Inicio",
      services: "Servicios",
      about: "Sobre nosotros",
      contact: "Contacto",
      itcheck: "Chequeo IT",
      cta: "Solicitar ahora",
    },
    hero: {
      pill: "Servicios de TI para empresas",
      title: "Una nueva forma de pensar la TI. Gestionada. Segura. Flexible.",
      text:
        "Ofrecemos soluciones de TI a medida, desde la consultoría hasta la operación diaria, para que sus sistemas sean estables, seguros y preparados para el futuro.",
      primary: "Recibir asesoría sin compromiso",
      secondary: "Iniciar chequeo rápido",
    },
    about: {
      title: "Su proveedor integral de TI",
      lead:
        "Acompañamos a empresas de todos los tamaños, desde la estrategia hasta la operación diaria de su entorno de TI.",
      bullets: [
        "✔ Monitorización proactiva y disponibilidad 24/7",
        "✔ Conceptos de seguridad según las mejores prácticas actuales",
        "✔ Soluciones flexibles para entornos locales, cloud e híbridos",
      ],
      cardTitle: "¿Por qué managed4u?",
      cardText:
        "Respuesta rápida, comunicación transparente y un equipo que entiende su TI.",
      highlight: "98% de satisfacción · más de 15 años de experiencia",
    },
    servicesSection: {
      title: "Servicios de TI",
      subtitle:
        "Todo desde un solo proveedor: para una TI potente, segura y moderna.",
      more: "Más información",
      modalPrimary: "Solicitar ahora",
      modalSecondary: "Cerrar",
      pick: "Seleccione el servicio deseado",
    },
    services: servicesEs,
    itCheck: {
      title: "Chequeo IT en 60 segundos",
      text:
        "Responda a 5 preguntas breves y reciba una primera evaluación de su situación IT.",
      progress: (step, total) => `Pregunta ${step} de ${total}`,
      thanksTitle: "¡Muchas gracias!",
      thanksText:
        "Su chequeo IT ha finalizado. Nos pondremos en contacto con usted con una evaluación y recomendaciones individuales.",
      contactBtn: "Contactar",
      questions: [
        {
          question: "¿Qué antigüedad tienen sus servidores?",
          answers: ["Menos de 3 años", "3–5 años", "Más de 5 años / No lo sé"],
        },
        {
          question: "¿Con qué frecuencia se realizan copias de seguridad?",
          answers: ["Diariamente", "Semanalmente", "Con menos frecuencia / No lo sé"],
        },
        {
          question: "¿Cómo se revisa la seguridad de su IT?",
          answers: ["Regularmente", "Ocasionalmente", "Nunca / No lo sé"],
        },
        {
          question: "¿Utiliza servicios en la nube?",
          answers: ["Sí", "Parcialmente", "No / No lo sé"],
        },
        {
          question: "¿Dispone de un plan de emergencia?",
          answers: ["Sí", "Parcialmente", "No / No lo sé"],
        },
      ],
    },
    contact: {
      title: "Contáctenos",
      subtitle:
        "Estaremos encantados de recibir su mensaje y asesorarle sin compromiso.",
      name: "Nombre*",
      company: "Empresa",
      phone: "Teléfono",
      email: "Correo electrónico*",
      interests: "Estoy interesado en:",
      messageLabel: "Su mensaje",
      consent: "Acepto el tratamiento de mis datos.",
      submit: "Solicitar ahora",
      success: "¡Mensaje enviado! (Demo)",
    },
    footer: {
      about: "Servicios de TI para empresas: seguros, flexibles y eficientes.",
      nav: "Navegación",
      legal: "Legal",
      contact: "Contacto",
      imprint: "Aviso legal",
      privacy: "Política de privacidad",
      addressLine1: "managed4u",
      addressLine2: "Sevilla, España",
      email: "info@managed4u.de",
      rights: (year) => `© ${year} managed4u – Todos los derechos reservados.`,
    },
    floating: {
      label: "¿Más información?",
      phone: "Llámenos: +49 1522 2907274",
    },
  },
};

/* ---------------- NAV ITEMS ---------------- */

const navItems = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
  { key: "itcheck", href: "#it-check" },
];

/* ---------------- NAVBAR ---------------- */

function Navbar({ tNav, lang, setLang, onToggleMenu }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <a href="#hero" className="brand">
            <span className="brand-logo brand-logo-orbit">
              <div className="nav-orbit">
                <span className="nav-orbit-icon n1">🔐</span>
                <span className="nav-orbit-icon n2">☁️</span>
                <span className="nav-orbit-icon n3">🛠️</span>
                <span className="nav-orbit-icon n4">🌐</span>
              </div>
              <img src={logo} alt="managed4u logo" className="nav-logo-img" />
            </span>

            {/* ✅ Removed white managed text in navbar */}
            {/* <span className="brand-text">{tNav.brand}</span> */}
          </a>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.key} href={item.href}>
              {tNav[item.key]}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang-switch">
            {["de", "en", "es"].map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-btn ${lang === code ? "lang-btn-active" : ""}`}
                onClick={() => setLang(code)}
              >
                {translations[code].label}
              </button>
            ))}
          </div>

          <a href="#contact" className="nav-cta blink">
            {tNav.cta}
          </a>

          <button
            type="button"
            className="burger"
            onClick={onToggleMenu}
            aria-label="Toggle menu"
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero({ tHero }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* ✅ pill blinking green */}
        <span className="hero-pill blink-green">{tHero.pill}</span>

        <div className="hero-logo-wrap">
          <div className="orbit">
            <span className="orbit-icon i1">🔐</span>
            <span className="orbit-icon i2">☁️</span>
            <span className="orbit-icon i3">🛠️</span>
            <span className="orbit-icon i4">🌐</span>
            <span className="orbit-icon i5">🧩</span>
            <span className="orbit-icon i6">💻</span>
          </div>

          <div className="hero-logo-core">
            <img src={logo} alt="managed4u logo" className="hero-logo-img" />
          </div>
        </div>

        <h1>{tHero.title}</h1>
        <p>{tHero.text}</p>

        <div className="hero-actions">
          <a href="#contact" className="hero-cta blink">
            {tHero.primary}
          </a>
          <a href="#it-check" className="hero-ghost">
            {tHero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function AboutShort({ tAbout }) {
  return (
    <section id="about" className="section">
      <div className="section-inner about-layout">
        <div className="about-text">
          <h2>{tAbout.title}</h2>
          <p className="about-lead">{tAbout.lead}</p>
          <ul className="about-list">
            {tAbout.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="about-card hover-zoom">
          <h3>{tAbout.cardTitle}</h3>
          <p>{tAbout.cardText}</p>
          <p className="about-highlight">
            <strong>{tAbout.highlight}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES + MODAL ---------------- */

function ServicesSection({
  tServicesSection,
  services,
  selectedTitles,
  setSelectedTitles,
}) {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (title) => {
    setSelectedTitles((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <section id="services" className="section section-light">
      <div className="section-inner">
        <h2>{tServicesSection.title}</h2>
        <p className="section-subtitle">{tServicesSection.subtitle}</p>

        <div className="services-grid">
          {services.map((service) => {
            const checked = selectedTitles.has(service.title);
            return (
              <article key={service.title} className="service-card hover-zoom">
                <div className="service-top">
                  <div className="service-icon">{service.icon || "•"}</div>

                  <label className="service-pick" title={tServicesSection.pick}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleService(service.title)}
                    />
                    <span className="service-pick-label">
                      {tServicesSection.pick}
                    </span>
                  </label>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <button
                  type="button"
                  className="link-button"
                  onClick={() => setActiveService(service)}
                >
                  {tServicesSection.more} →
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {activeService && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveService(null)}
          role="presentation"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveService(null)}
              aria-label="Close"
            >
              ×
            </button>

            <h3>{activeService.title}</h3>
            <p className="modal-intro">{activeService.text}</p>

            {activeService.details && (
              <ul className="modal-list">
                {activeService.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}

            <div className="modal-actions">
              <a
                href="#contact"
                className="modal-primary blink"
                onClick={() => setActiveService(null)}
              >
                {tServicesSection.modalPrimary}
              </a>
              <button
                type="button"
                className="modal-secondary"
                onClick={() => setActiveService(null)}
              >
                {tServicesSection.modalSecondary}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- IT CHECK ---------------- */

function ITCheckTool({ tIt }) {
  const [step, setStep] = useState(0);
  const isFinished = step >= tIt.questions.length;

  return (
    <section id="it-check" className="section section-gray">
      <div className="section-inner">
        <div className="it-card hover-zoom">
          {!isFinished ? (
            <>
              <h2>{tIt.title}</h2>
              <p>{tIt.text}</p>
              <div className="it-progress">
                {tIt.progress(step + 1, tIt.questions.length)}
              </div>

              <h3 className="it-question">{tIt.questions[step].question}</h3>
              <div className="it-answers">
                {tIt.questions[step].answers.map((a) => (
                  <button
                    key={a}
                    type="button"
                    className="it-answer-btn hover-zoom"
                    onClick={() => setStep((s) => s + 1)}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2>{tIt.thanksTitle}</h2>
              <p>{tIt.thanksText}</p>
              <a className="hero-cta blink" href="#contact">
                {tIt.contactBtn}
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function ContactSection({
  tContact,
  services,
  selectedTitles,
  setSelectedTitles,
}) {
  const toggleService = (title) => {
    setSelectedTitles((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <section id="contact" className="section section-gray">
      <div className="section-inner">
        <h2>{tContact.title}</h2>
        <p className="section-subtitle">{tContact.subtitle}</p>

        <div className="contact-layout">
          <form
            className="contact-form hover-zoom"
            onSubmit={(e) => {
              e.preventDefault();
              alert(tContact.success);
            }}
          >
            <div className="contact-row">
              <div className="field">
                <label>{tContact.name}</label>
                <input required />
              </div>
              <div className="field">
                <label>{tContact.company}</label>
                <input />
              </div>
            </div>

            <div className="contact-row">
              <div className="field">
                <label>{tContact.phone}</label>
                <input />
              </div>
              <div className="field">
                <label>{tContact.email}</label>
                <input type="email" required />
              </div>
            </div>

            <div className="field">
              <label>{tContact.interests}</label>
              <div className="checkbox-grid">
                {services.map((s) => (
                  <label key={s.title} className="checkbox-item hover-zoom">
                    <input
                      type="checkbox"
                      checked={selectedTitles.has(s.title)}
                      onChange={() => toggleService(s.title)}
                    />{" "}
                    {s.title}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{tContact.messageLabel}</label>
              <textarea rows="4" />
            </div>

            <div className="field checkbox-item">
              <input type="checkbox" required />
              <span>{tContact.consent}</span>
            </div>

            <button className="hero-cta contact-submit blink" type="submit">
              {tContact.submit}
            </button>
          </form>

          <div className="map-card hover-zoom">
            <h3>Sevilla · Spain</h3>
            <p className="map-subtext">Google Maps (embed)</p>
            <div className="map-container">
              <iframe
                title="Sevilla, Spain"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6376.584654001384!2d-5.9973367!3d37.3890924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1103fe7a8f%3A0x402af51b4664250!2sSeville%2C%20Spain!5e0!3m2!1sen!2sde!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer({ tFooter }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo">managed4u</div>
          <p>{tFooter.about}</p>
        </div>
        <div className="footer-col">
          <h4>{tFooter.nav}</h4>
          <a href="#hero">Hero</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>{tFooter.legal}</h4>
          <a href="#!">{tFooter.imprint}</a>
          <a href="#!">{tFooter.privacy}</a>
        </div>
        <div className="footer-col">
          <h4>{tFooter.contact}</h4>
          <p>{tFooter.addressLine1}</p>
          <p>{tFooter.addressLine2}</p>
          <p>{tFooter.email}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-rights">{tFooter.rights(year)}</span>
        <span className="footer-credit">
          Website development: <strong>Cristian Daniel Toussaint</strong>
        </span>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING CONTACT (original) ---------------- */

function FloatingContact({ floating }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible((window.scrollY || 0) > 220);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="tel:+4915222907274"
      className={`floating-contact ${visible ? "floating-contact-visible" : ""}`}
    >
      <span className="floating-contact-label">{floating.label}</span>
      <span className="floating-contact-phone">{floating.phone}</span>
    </a>
  );
}

/* ---------------- SLIDE CALL BUTTON ---------------- */

function SlideCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible((window.scrollY || 0) > 220);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="tel:+4915222907274"
      className={`slide-call ${visible ? "slide-call-visible" : ""}`}
      aria-label="Call now +49 1522 2907274"
    >
      <span className="slide-call-text">Call now</span>
      <span className="slide-call-phone">+49 1522 2907274</span>
    </a>
  );
}

/* ---------------- MOBILE MENU ---------------- */

function MobileMenu({ tNav, isOpen, onClose, setLang, lang }) {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-brand">{tNav.brand}</span>
          <button className="mobile-close" onClick={onClose} type="button">
            ×
          </button>
        </div>

        <div className="mobile-lang">
          {["de", "en", "es"].map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn ${lang === code ? "lang-btn-active" : ""}`}
              onClick={() => setLang(code)}
            >
              {translations[code].label}
            </button>
          ))}
        </div>

        <nav className="mobile-menu-links">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} onClick={onClose}>
              {tNav[item.key]}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && <div className="mobile-backdrop" onClick={onClose} />}
    </>
  );
}

/* ---------------- MAIN APP ---------------- */

export default function App() {
  const [lang, setLang] = useState("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  const [selectedTitles, setSelectedTitles] = useState(() => new Set());

  useEffect(() => {
    setSelectedTitles(new Set());
  }, [lang]);

  const services = useMemo(() => t.services, [t.services]);

  return (
    <>
      <Navbar
        tNav={t.nav}
        lang={lang}
        setLang={setLang}
        onToggleMenu={() => setMobileMenuOpen((v) => !v)}
      />

      <MobileMenu
        tNav={t.nav}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        setLang={setLang}
        lang={lang}
      />

      <Hero tHero={t.hero} />
      <AboutShort tAbout={t.about} />

      <ServicesSection
        tServicesSection={t.servicesSection}
        services={services}
        selectedTitles={selectedTitles}
        setSelectedTitles={setSelectedTitles}
      />

      <ITCheckTool tIt={t.itCheck} />

      <ContactSection
        tContact={t.contact}
        services={services}
        selectedTitles={selectedTitles}
        setSelectedTitles={setSelectedTitles}
      />

      <Footer tFooter={t.footer} />

      <FloatingContact floating={t.floating} />
      <SlideCallButton />
    </>
  );
}
