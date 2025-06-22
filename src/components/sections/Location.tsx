
export const Location = () => {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-green-900">
          Location
        </h2>
        <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Restaurant Location"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.4771711501947!2d-77.15731678429268!3d38.84045035747291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3c3c6b3b1d9%3A0x3c4c5c5c5c5c5c5c!2s3813+S+George+Mason+Dr%2C+Falls+Church%2C+VA+22041!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
