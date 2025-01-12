import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
