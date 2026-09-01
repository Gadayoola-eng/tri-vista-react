import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

function ServicesPreview() {
  const services = [
    {
      icon: "💻",
      title: "Web Design",
      description:
        "Modern and responsive websites designed to give businesses a strong online presence.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "User-friendly mobile applications designed around your business needs.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description:
        "Professional online stores that help businesses reach customers and sell online.",
    },
    {
      icon: "🌐",
      title: "Computer Networking",
      description:
        "Reliable networking solutions for better connectivity and productivity.",
    },
    {
      icon: "🔧",
      title: "Website Maintenance",
      description:
        "Ongoing website updates, improvements, troubleshooting and technical support.",
    },
    {
      icon: "⚙️",
      title: "IT Solutions",
      description:
        "Technology solutions that help organizations operate more efficiently.",
    },
  ];

  return (
    <section className="bg-gray-50 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold text-blue-600">WHAT WE DO</span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Technology Services
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            We provide practical technology solutions designed to support
            businesses in a modern digital environment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block rounded-lg bg-black px-7 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
