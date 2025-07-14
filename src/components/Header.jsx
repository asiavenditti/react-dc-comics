export default function Header() {
    return (
        <header>
            <div className="container d-flex justify-content-between align-items-center py-4">
                <img src="/dc-logo.png" alt="DC" className="logo" />
                <nav className="nav d-flex gap-2">
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
            </div>
        </header>
    );
}
