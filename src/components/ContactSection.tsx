export function ContactSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Get in touch
      </h2>
      <p className="text-gray-600 mb-4">
        Have a project in mind or just want to say hello? My inbox is always
        open.
      </p>
      <a
        href="mailto:hello@example.com"
        className="text-blue-600 underline underline-offset-2"
      >
        hello@example.com
      </a>
    </section>
  );
}
