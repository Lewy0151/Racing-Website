export default function Contact() {
  return (
    <section className="p-6 text-center space-y-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="text-gray-300">Get in touch with the Behind the Saddle team.</p>
      <form className="flex flex-col space-y-3 max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded bg-gray-900 border border-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded bg-gray-900 border border-gray-700"
        />
        <textarea
          placeholder="Message"
          className="p-2 rounded bg-gray-900 border border-gray-700 h-28"
        />
        <button className="bg-white text-black font-semibold py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
