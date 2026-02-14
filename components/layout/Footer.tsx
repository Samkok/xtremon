export function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} Xtremon Studio</span>
        <span>Engineered foundation build</span>
      </div>
    </footer>
  );
}
