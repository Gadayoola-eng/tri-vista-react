import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <main>
        <Hero />

        <ServicesPreview />

        {/* Why Choose Us */}
        <section className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-semibold text-blue-600">
                WHY TRI-VISTA?
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Technology That Works for Your Business
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                We combine technology, creativity and practical business
                solutions to help organizations build stronger digital
                experiences.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Professional Solutions
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Solutions designed around real business needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Modern Technology
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Modern tools and technologies for today's digital world.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✓</span>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Customer Focused
                    </h3>

                    <p className="mt-1 text-gray-600">
                      We focus on delivering solutions that create value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl sm:p-12">
              <p className="text-lg leading-8">
                Ready to take your business to the next level?
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Let's build something great together.
              </h3>

              <a
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-black px-7 py-3 font-semibold text-white transition hover:bg-gray-900"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}

export default Home;
