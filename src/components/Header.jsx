import navItems from "../db/nav";

export default function Header() {
    return (
        <header>
            <div className="container d-flex justify-content-between align-items-center py-4">
                <img src="./dc-logo.png" alt="DC" className="logo" />
                {/* Nav dinamica */}
                <nav className="nav d-flex gap-3">
                    {navItems.map(({ id, label, href }) => (
                        <a key={id} href={href}>
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
