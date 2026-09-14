const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-10">
        {/* Logo & Description */}
        <aside>
          <div className="text-3xl font-bold text-primary">
            ☀️ Weather<span className="text-secondary">ly</span>
          </div>

          <p className="max-w-md text-sm opacity-70">
            Get accurate and up-to-date weather information for cities around
            the world.
          </p>
        </aside>

        {/* Links */}
        <nav>
          <h6 className="footer-title">Explore</h6>

          <div className="grid grid-flow-col gap-5">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Forecast</a>
            <a className="link link-hover">Favorites</a>
          </div>
        </nav>

        {/* Social Links */}
        <nav>
          <h6 className="footer-title">Social</h6>

          <div className="grid grid-flow-col gap-4">
            {/* GitHub */}
            <a
              href="#"
              className="text-2xl hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              💻
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="text-2xl hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              📘
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="text-2xl hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              🐦
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
