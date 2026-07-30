import mirror from "@/assets/seashell-mirror.png";

const Hero = () => {
  return (
    <section className="relative mx-4 overflow-hidden rounded-sm md:mx-8">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        {/* Background image */}
        <img
          src={mirror}
          alt="Handmade seashell mirror inspired by the Caspian shore"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16">
          <span className="mb-4 text-[11px] uppercase tracking-[0.4em] text-white/80">
            Seashell Azerbaijan
          </span>

          <h1
            className="max-w-2xl text-4xl font-light leading-[1.1] text-white md:text-6xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Handcrafted Beauty Inspired By The Sea
          </h1>

          <p className="mt-5 max-w-md text-sm text-white/85 md:text-base">
            Unique creations of art, elegance and nature — each piece handmade
            with seashells from the Caspian shore.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="border border-white/80 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-neutral-900"
            >
              Explore Collection
            </a>
            <a
              href="#handmade"
              className="border border-white/50 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white/90 transition hover:border-white"
            >
              Shop Handmade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
