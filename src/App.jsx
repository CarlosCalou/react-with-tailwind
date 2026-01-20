export default function App() {
  return (
    <header className="bg-black text-amber-50 px-42 py-7 flex justify-between items-center">
      <a
        className="text-3xl tracking-wide font-semibold hover:text-amber-200"
        href="/"
      >
        bikcraft
      </a>
      <nav className="">
        <ul className="flex gap-8">
          <li>
            <a
              className="capitalize text-[1.1rem] hover:text-yellow-300 tracking-wide font-medium"
              href="/products"
            >
              product
            </a>
          </li>
          <li>
            <a
              className="capitalize text-[1.1rem] hover:text-yellow-300 tracking-wide font-medium "
              href="/about"
            >
              about
            </a>
          </li>
          <li>
            <a
              className="capitalize text-[1.1rem] hover:text-yellow-300 tracking-wide font-medium"
              href="/contact"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
