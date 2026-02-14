export function Navbar() {
  return (
    <header className="border-b border-neutral-800 bg-black/70 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-semibold tracking-tight">Xtremon</span>
        <nav className="flex gap-6 text-sm text-neutral-300">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </header>
  );
}
