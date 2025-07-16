import comics from "../db/comics";
import Card from "./Card";

export default function Main() {
    return (
        <main>
            {/* Jumbotron */}
            <div className="jumbo">

            </div>
            {/* Sezione 1 */}
            <div className="hero-section bg-dark text-white py-5">
                <a href="#" className="btn btn-primary rounded-0">Current Series</a>
                <div className="container">
                    <div className="row mt-1">
                        {comics.map(({ id, title, thumb }) => (
                            <div className="col-6 col-md-4 col-lg-2 mb-4" key={id}>
                                <Card title={title} thumb={thumb} />
                            </div>
                        ))}

                    </div>
                    <button className="btn btn-primary d-block mx-auto mt-1 rounded-0">Load More</button>
                </div>
            </div>

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
        </main >
    );
}
