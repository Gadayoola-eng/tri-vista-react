function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347064209935"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tri-Vista on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-green-600"
    >
      💬
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
