import ceo from "../assets/ceo.png";
import director from "../assets/dir.png";
import ictDirector from "../assets/network.jpg";

function Team() {
  const teamMembers = [
    {
      name: "Mr Olusegun Patrick O.",
      role: "Chairman",
      image: ceo,
      alt: "Chairman",
    },
    {
      name: "Mr Ajayi Olusola",
      role: "Director Of Logistics",
      image: director,
      alt: "Director Of Logistics",
    },
    {
      name: "Mr Olatunde Olayinka",
      role: "ICT Director",
      description: "Computer Networking & IT Support",
      image: ictDirector,
      alt: "ICT Director",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -right-24
                          w-96 h-96
                          bg-blue-500/20
                          rounded-full blur-3xl"
          ></div>

          <div
            className="absolute -bottom-24 -left-24
                          w-96 h-96
                          bg-blue-700/20
                          rounded-full blur-3xl"
          ></div>
        </div>

        <div
          className="relative max-w-7xl mx-auto
                        px-6 py-24 md:py-32
                        text-center"
        >
          <span
            className="inline-block
                           px-4 py-2 mb-5
                           rounded-full
                           bg-white/10
                           border border-white/20
                           text-blue-200
                           text-sm
                           font-semibold
                           tracking-wider"
          >
            OUR TEAM
          </span>

          <h1
            className="text-4xl md:text-6xl
                         font-bold
                         tracking-tight
                         mb-6"
          >
            The Faces Behind Tri-Vista
          </h1>

          <p
            className="max-w-3xl mx-auto
                        text-lg md:text-xl
                        text-blue-100
                        leading-relaxed"
          >
            Meet the people behind Tri-Vista Business Solutions Ltd.
          </p>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="text-blue-600
                           font-semibold
                           uppercase
                           tracking-wider"
          >
            Meet Our Team
          </span>

          <h2
            className="text-3xl md:text-5xl
                         font-bold
                         mt-3 mb-6"
          >
            The Faces Behind Tri-Vista
          </h2>

          <p
            className="text-gray-600
                        text-lg
                        leading-relaxed"
          >
            Get to know the people who help drive Tri-Vista Business Solutions
            Ltd. forward.
          </p>
        </div>
      </section>

      {/* =========================
          TEAM MEMBERS
      ========================== */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1
                          md:grid-cols-2
                          lg:grid-cols-3
                          gap-8"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group
                           bg-white
                           rounded-3xl
                           overflow-hidden
                           border border-gray-100
                           shadow-lg
                           hover:shadow-2xl
                           hover:-translate-y-2
                           transition-all
                           duration-500"
              >
                {/* IMAGE AREA */}
                <div
                  className="relative
                                bg-gradient-to-br
                                from-blue-50
                                to-gray-100
                                pt-10
                                px-6
                                flex
                                justify-center
                                overflow-hidden"
                >
                  {/* Decorative circle */}
                  <div
                    className="absolute
                                  w-64 h-64
                                  rounded-full
                                  bg-blue-600/10
                                  blur-2xl"
                  ></div>

                  {/* Person's image */}
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="relative
                               z-10
                               w-56
                               h-56
                               md:w-64
                               md:h-64
                               object-cover
                               rounded-full
                               border-8
                               border-white
                               shadow-xl
                               group-hover:scale-105
                               transition-transform
                               duration-500"
                  />
                </div>

                {/* INFORMATION */}
                <div className="p-8 text-center">
                  <h3
                    className="text-xl
                                 md:text-2xl
                                 font-bold
                                 text-gray-900"
                  >
                    {member.name}
                  </h3>

                  <p
                    className="mt-2
                                text-blue-600
                                font-semibold"
                  >
                    {member.role}
                  </p>

                  {member.description && (
                    <p
                      className="mt-3
                                  text-gray-600
                                  leading-relaxed"
                    >
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          OUR TEAM VALUES
      ========================== */}
      <section
        className="bg-gray-50
                          px-6
                          py-20
                          md:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-blue-600
                             font-semibold
                             uppercase
                             tracking-wider"
            >
              What Drives Us
            </span>

            <h2
              className="text-3xl
                           md:text-5xl
                           font-bold
                           mt-3"
            >
              Working Together
            </h2>

            <p
              className="max-w-2xl
                          mx-auto
                          mt-5
                          text-gray-600
                          text-lg
                          leading-relaxed"
            >
              Our team brings together leadership, logistics, ICT and technical
              expertise to support the vision of Tri-Vista Business Solutions
              Ltd.
            </p>
          </div>

          <div
            className="grid
                          md:grid-cols-3
                          gap-8"
          >
            {/* Leadership */}
            <div
              className="bg-white
                            rounded-2xl
                            p-8
                            border border-gray-100
                            shadow-sm
                            hover:shadow-xl
                            transition"
            >
              <div
                className="w-14 h-14
                              rounded-xl
                              bg-blue-100
                              text-blue-600
                              flex
                              items-center
                              justify-center
                              text-2xl
                              mb-6"
              >
                👔
              </div>

              <h3
                className="text-xl
                             font-bold
                             mb-3"
              >
                Leadership
              </h3>

              <p
                className="text-gray-600
                            leading-relaxed"
              >
                Strong leadership guiding the organization toward its goals and
                continued growth.
              </p>
            </div>

            {/* Logistics */}
            <div
              className="bg-white
                            rounded-2xl
                            p-8
                            border border-gray-100
                            shadow-sm
                            hover:shadow-xl
                            transition"
            >
              <div
                className="w-14 h-14
                              rounded-xl
                              bg-blue-100
                              text-blue-600
                              flex
                              items-center
                              justify-center
                              text-2xl
                              mb-6"
              >
                🚚
              </div>

              <h3
                className="text-xl
                             font-bold
                             mb-3"
              >
                Logistics
              </h3>

              <p
                className="text-gray-600
                            leading-relaxed"
              >
                Effective coordination and logistics support to keep our
                operations running smoothly.
              </p>
            </div>

            {/* ICT */}
            <div
              className="bg-white
                            rounded-2xl
                            p-8
                            border border-gray-100
                            shadow-sm
                            hover:shadow-xl
                            transition"
            >
              <div
                className="w-14 h-14
                              rounded-xl
                              bg-blue-100
                              text-blue-600
                              flex
                              items-center
                              justify-center
                              text-2xl
                              mb-6"
              >
                💻
              </div>

              <h3
                className="text-xl
                             font-bold
                             mb-3"
              >
                ICT & IT Support
              </h3>

              <p
                className="text-gray-600
                            leading-relaxed"
              >
                Computer networking and IT support helping provide dependable
                technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="px-6 py-20">
        <div
          className="max-w-5xl mx-auto
                        rounded-3xl
                        bg-gradient-to-r
                        from-blue-700
                        to-blue-950
                        text-white
                        px-8
                        py-14
                        md:px-16
                        text-center
                        shadow-xl"
        >
          <h2
            className="text-3xl
                         md:text-4xl
                         font-bold
                         mb-5"
          >
            Let's Work Together
          </h2>

          <p
            className="text-blue-100
                        text-lg
                        max-w-2xl
                        mx-auto
                        mb-8"
          >
            Have a project in mind or need professional technology support? Get
            in touch with Tri-Vista today.
          </p>

          <a
            href="/contact"
            className="inline-flex
                       items-center
                       bg-white
                       text-blue-700
                       px-7
                       py-3
                       rounded-xl
                       font-semibold
                       hover:bg-blue-50
                       transition"
          >
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Team;
