import techBanner from "../assets/trivista-tech-banner.png";

function Services() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Modern, responsive, and fast websites for businesses.",
      icon: "💻",
    },

    {
      title: "Mobile App Development",
      description: "Android and cross-platform mobile applications.",
      icon: "📱",
    },

    {
      title: "Computer Networking",
      description:
        "Network design, installation, configuration, and maintenance for homes, offices, and organizations.",
      icon: "🌐",
    },

    {
      title: "Website Maintenance",
      description: "Updates, security, backups, and performance monitoring.",
      icon: "🛠️",
    },

    {
      title: "E-commerce Solutions",
      description: "Online stores with payment and product management.",
      icon: "🛒",
    },

    {
      title: "Software Development",
      description: "Custom software solutions for business operations.",
      icon: "⚙️",
    },

    {
      title: "Digital Marketing",
      description: "Online advertising, social media, and brand promotion.",
      icon: "📈",
    },

    {
      title: "Graphics Design & Branding",
      description: "Logos, flyers, banners, and corporate branding.",
      icon: "🎨",
    },

    {
      title: "IT Consulting & Training",
      description: "Expert advice and tech training for individuals and teams.",
      icon: "👨‍💻",
    },
  ];

  const otherServices = [
    {
      title: "Food Supply",
      description: "Reliable supply of food items for events and businesses.",
      icon: "🍲",
    },

    {
      title: "Catering Services",
      description: "Professional catering for weddings, parties, and events.",
      icon: "🍽️",
    },

    {
      title: "Logistics & Delivery",
      description: "Fast and safe delivery of goods and services.",
      icon: "🚚",
    },
  ];

  return (
    <main className="services-page">
      {/* =================================
          SERVICES HERO
      ================================= */}

      <section className="services-hero">
        {/* LEFT SIDE */}

        <div className="services-hero-content">
          <span className="services-label">
            TRI-VISTA BUSINESS SOLUTIONS LTD.
          </span>

          <h1>
            Smart Technology
            <br />
            <span>Solutions</span>
          </h1>

          <p>
            Professional technology solutions designed to help businesses grow,
            connect and operate more efficiently.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="services-hero-image">
          <img src={techBanner} alt="Tri-Vista digital technology solutions" />
        </div>
      </section>

      {/* =================================
          TECHNOLOGY SERVICES
      ================================= */}

      <section className="services-section">
        <div className="services-heading">
          <span>WHAT WE DO</span>

          <h2>
            Our Technology
            <br />
            Services
          </h2>

          <p>
            We provide reliable technology and digital solutions designed to
            meet the needs of businesses, organizations and individuals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =================================
          OTHER SERVICES
      ================================= */}

      <section className="other-services">
        <div className="services-heading">
          <span>MORE FROM TRI-VISTA</span>

          <h2>Other Services</h2>
        </div>

        <div className="services-grid">
          {otherServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
