import { Link } from "react-router-dom";
import networkImage from "../assets/trivista-tech-banner.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-600">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
        {/* Text */}
        <div className="text-white">
          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            Technology • Innovation • Solutions
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Smart Technology
            <span className="block text-black">
              Solutions for Your Business
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">
            Tri-Vista Business Solutions Ltd. provides reliable technology
            solutions designed to help businesses grow, connect and operate more
            efficiently.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/services"
              className="rounded-lg bg-black px-7 py-3.5 text-center font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-900"
            >
              Explore Our Services
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border-2 border-white px-7 py-3.5 text-center font-bold text-white transition duration-300 hover:bg-white hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl"></div>

          <img
            src={networkImage}
            alt="Technology networking"
            className="relative h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
