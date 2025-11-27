export default function Contact() {
  return (
    <section className="p-6 text-center space-y-4 text-black">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="text-gray-700">Get in touch with the Behind the Saddle team.</p>

      <form className="flex flex-col space-y-3 max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded bg-white border border-gray-300 text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded bg-white border border-gray-300 text-black"
        />
        <textarea
          placeholder="Message"
          className="p-2 rounded bg-white border border-gray-300 text-black h-28"
        ></textarea>

        <button className="bg-[#fa5555] hover:bg-[#fb9292] text-white font-semibold py-2 rounded transition-all">
          Send Message
        </button>
      </form>
    </section>
  );
}
