import logo from '../assets/favicon.ico';



export default function Header() {
    return (
        <header>
            <img src={logo} alt="DC" className="logo" />
            <nav className="nav">
                <a href="#">Characters</a>
                <a href="#">Comics</a>
                <a href="#">Movies</a>
                <a href="#">Tv</a>
                <a href="#">Games</a>
                <a href="#">Collectibles</a>
                <a href="#">Video</a>
                <a href="#">Fans</a>
                <a href="#">News</a>
                <a href="#">Shop</a>
            </nav>
        </header>
    )
}