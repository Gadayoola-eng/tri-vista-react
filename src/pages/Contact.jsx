import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import WhatsAppButton from "../components/WhatsAppButton";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("Sending message...");

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      console.log("EMAILJS SUCCESS:", response.status, response.text);

      setStatus("✓ Message sent successfully! We will get back to you soon.");

      form.current.reset();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      setStatus(
        `✕ Failed to send message: ${error?.text || "Please try again later."}`,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-white text-gray-900">
      {/* CONTACT SECTION */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Get In Touch
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              We'd Love To Hear From You
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether you need a new website, mobile application, networking
              solution, software development, or technical support, send us a
              message and our team will get back to you.
            </p>

            {/* EMAIL */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                ✉️
              </div>

              <div>
                <h3 className="font-bold text-lg">Email</h3>

                <p className="text-gray-600">Your Email Address</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                📞
              </div>

              <div>
                <h3 className="font-bold text-lg">Phone</h3>

                <p className="text-gray-600">+234 706 420 9935</p>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
                💬
              </div>

              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>

                <p className="text-gray-600">Chat with us directly</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white border border-gray-100 rounded-3xl p-7 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mb-8">
              Fill in the form below and we'll get back to you.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* NAME */}
              <div>
                <label htmlFor="from_name" className="block font-semibold mb-2">
                  Your Name
                </label>

                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="from_email"
                  className="block font-semibold mb-2"
                >
                  Email Address
                </label>

                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={sending}
                className={`w-full py-4 rounded-xl font-semibold text-white transition ${
                  sending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {sending ? "Sending..." : "Send Message →"}
              </button>

              {/* STATUS */}
              {status && (
                <div
                  className={`text-center font-semibold p-3 rounded-xl ${
                    status.startsWith("✓")
                      ? "bg-green-50 text-green-600"
                      : status.startsWith("✕")
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}

export default Contact;
