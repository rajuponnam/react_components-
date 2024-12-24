import './head.css';
function Header(){
    return(
      <nav>
        <div className="logo">My Website</div>
        <ul className="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

    );
}
export default Header;