export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-xl font-bold">RemoteRecruit</h1>

      <div className="hidden md:flex gap-8 text-gray-600">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
      </div>

      <button className="bg-black text-white px-5 py-2 rounded-full hover:opacity-80 transition">
        Get Started
      </button>
    </nav>
  );
}