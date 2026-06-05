"use client";

export default function Navbar() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Updates", url: "/updates" }
  ];

  return (
    <>
      <div className="border-1 text-center">
        {navLinks.map((link) => (
          <a key={link.url} href={link.url} className="text-white mr-4 text-2xl">
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
