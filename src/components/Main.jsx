export default function Main() {
    return (
        <main>
            {/* Sezione 1 */}
            <section className="hero-section bg-dark text-white py-4">
                <div className="container">
                    <h1>Content goes here</h1>
                </div>
            </section>

            {/* Sezione 2 */}
            <section className="icons-section bg-primary py-5 text-white">
                <div className="container d-flex justify-content-between align-items-center text-white g-1">
                    <img src="/buy-comics-digital-comics.png" alt="Digital" className="icon-img" />
                    <span>DIGITAL COMICS</span>
                    <img src="/buy-comics-merchandise.png" alt="Merchandise" className="icon-img" />
                    <span>DC MERCHANDISE</span>
                    <img src="/buy-comics-subscriptions.png" alt="Subscriptions" className="icon-img" />
                    <span>SUBSCRIPTION</span>
                    <img src="/buy-comics-shop-locator.png" alt="Locator" className="icon-img" />
                    <span>COMIC SHOP LOCATOR</span>
                    <img src="/buy-dc-power-visa.svg" alt="Visa" className="icon-img" />
                    <span>DC POWER VISA</span>
                </div>
            </section>
        </main>
    );
}
