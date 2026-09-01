import WhatsAppButton from "../components/WhatsAppButton";

function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-semibold mb-6">
              About Tri-Vista
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Technology That Moves
              <span className="text-blue-400"> Businesses Forward.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Tri-Vista Business Solutions Ltd. provides modern technology
              solutions designed to help businesses connect, grow and operate
              more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              A Technology Partner You Can Trust
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Tri-Vista Business Solutions Ltd. is a technology-focused business
              dedicated to providing practical and innovative digital solutions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              We work with businesses, organizations and individuals to provide
              technology services that solve real-world problems and improve the
              way people work.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our approach combines creativity, technical knowledge and
              customer-focused service to deliver solutions that are functional,
              reliable and easy to use.
            </p>
          </div>

          {/* Image / Logo */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3" />

            <div className="relative bg-white rounded-3xl shadow-xl p-8">
              <img
                src="/logo.png"
                alt="Tri-Vista Business Solutions"
                className="w-full max-w-sm mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Building With Technology
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Technology continues to change the way businesses operate. Tri-Vista
            was created with the goal of helping businesses take advantage of
            these changes through accessible, professional and reliable
            technology solutions.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className="group bg-gray-50 rounded-3xl p-8 md:p-10
                          border border-gray-100
                          hover:shadow-xl hover:-translate-y-2
                          transition-all duration-300"
          >
            <div
              className="w-14 h-14 flex items-center justify-center
                            rounded-2xl bg-blue-600 text-white text-2xl mb-6"
            >
              🎯
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>

            <p className="text-gray-600 leading-relaxed">
              To provide reliable, innovative and accessible technology
              solutions that help our clients solve problems, improve
              productivity and achieve their goals.
            </p>
          </div>

          {/* Vision */}
          <div
            className="group bg-gray-950 text-white rounded-3xl p-8 md:p-10
                          hover:shadow-xl hover:-translate-y-2
                          transition-all duration-300"
          >
            <div
              className="w-14 h-14 flex items-center justify-center
                            rounded-2xl bg-blue-600 text-white text-2xl mb-6"
            >
              🚀
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>

            <p className="text-gray-300 leading-relaxed">
              To become a trusted technology solutions provider recognized for
              innovation, quality and the positive impact we create for
              businesses and communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              What We Stand For
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Innovation */}
            <div
              className="bg-white rounded-2xl p-7 shadow-sm
                            hover:shadow-xl hover:-translate-y-2
                            transition-all duration-300"
            >
              <div className="text-4xl mb-5">💡</div>

              <h3 className="text-xl font-bold mb-3">Innovation</h3>

              <p className="text-gray-600">
                We continuously explore better ways to use technology to solve
                problems.
              </p>
            </div>

            {/* Integrity */}
            <div
              className="bg-white rounded-2xl p-7 shadow-sm
                            hover:shadow-xl hover:-translate-y-2
                            transition-all duration-300"
            >
              <div className="text-4xl mb-5">🤝</div>

              <h3 className="text-xl font-bold mb-3">Integrity</h3>

              <p className="text-gray-600">
                We believe in honesty, transparency and responsible service.
              </p>
            </div>

            {/* Excellence */}
            <div
              className="bg-white rounded-2xl p-7 shadow-sm
                            hover:shadow-xl hover:-translate-y-2
                            transition-all duration-300"
            >
              <div className="text-4xl mb-5">⭐</div>

              <h3 className="text-xl font-bold mb-3">Excellence</h3>

              <p className="text-gray-600">
                We strive to deliver high-quality solutions and professional
                service.
              </p>
            </div>

            {/* Customer Focus */}
            <div
              className="bg-white rounded-2xl p-7 shadow-sm
                            hover:shadow-xl hover:-translate-y-2
                            transition-all duration-300"
            >
              <div className="text-4xl mb-5">❤️</div>

              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>

              <p className="text-gray-600">
                Our clients and their goals remain at the center of what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              More Than Just Technology
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              We don't simply provide technology. We focus on understanding the
              problem first and then creating a solution that makes sense for
              the client.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <h3 className="font-bold">Professional Service</h3>
                  <p className="text-gray-600">
                    We maintain a professional approach from planning to
                    delivery.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <h3 className="font-bold">Modern Solutions</h3>
                  <p className="text-gray-600">
                    We use modern technologies to create efficient solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <div>
                  <h3 className="font-bold">Reliable Support</h3>
                  <p className="text-gray-600">
                    We remain available to help our clients maintain their
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-6xl mb-6">💻</div>

            <h3 className="text-3xl font-bold mb-5">
              Technology Built Around Your Needs
            </h3>

            <p className="text-blue-100 leading-relaxed mb-8">
              Whether you need a website, software solution, networking service
              or technical support, our goal is to provide a solution that works
              for you.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-blue-700
                         px-7 py-3 rounded-xl font-semibold
                         hover:bg-gray-100 transition"
            >
              Work With Us →
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Let's discuss how technology can help your business grow.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-blue-600
                       hover:bg-blue-700
                       px-8 py-4 rounded-xl
                       font-semibold transition"
          >
            Contact Tri-Vista
          </a>
        </div>
      </section>

      {/* WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}

export default About;
