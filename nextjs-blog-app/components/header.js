import Link from "next/link";
import Counter from "./counter";

const Header = () => {
  return (
    <header className="p-20 border border-yellow-400">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/projects">Projects</Link>
        </li>
      </ul>
      <Counter/>
    </header>
  );
};

export default Header;
