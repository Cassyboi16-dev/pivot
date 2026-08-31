"use client";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy", url: "/privacy" },
    { label: "Terms", url: "/terms" },
    { label: "Cookies", url: "/cookies" },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Pivot (1) (1).png"
                alt="Pivot Logo"
                className="w-12 h-12"
              />
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                PIVOT
              </h1>
            </div>
            <p className="text-sm text-white/70">
              Personalized Innovation in Tech
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:hello@pivot.com"
                className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm block"
              >
                hello@pivot.com
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 bg-white/10 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 bg-white/10 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © {currentYear} PIVOT. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Crafted with <span className="text-red-400">❤</span> for innovation
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
