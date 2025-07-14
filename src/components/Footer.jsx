export default function Footer() {
    return (
        <footer>
            {/* Footer Top */}
            <section className="footer-top bg-dark text-white py-5">
                <div className="container d-flex justify-content-between">
                    <div className="footer-links d-flex">
                        <div>
                            <ul>
                                <h5>DC Comics</h5>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                            </ul>

                            <ul className="mt-4">
                                <h5>Shop</h5>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>


                        <ul>
                            <h5>DC</h5>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Jobs</a></li>
                        </ul>

                        <ul>
                            <h5>SITES</h5>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Footer Bottom */}
            <section className="footer-bottom bg-dark text-white py-4">
                <div className="container d-flex justify-content-between align-items-center">

                    <button className="btn btn-outline-primary text-white rounded-0">SIGN-UP NOW!</button>
                    <div className="social d-flex align-items-center gap-3">
                        <span className="me-2 text-primary fw-bold">FOLLOW US</span>
                        <img src="/footer-facebook.png" alt="Facebook" className="social-icon" />
                        <img src="/footer-twitter.png" alt="Twitter" className="social-icon" />
                        <img src="/footer-youtube.png" alt="YouTube" className="social-icon" />
                        <img src="/footer-pinterest.png" alt="Pinterest" className="social-icon" />
                        <img src="/footer-periscope.png" alt="Location" className="social-icon" />
                    </div>
                </div>
            </section>
        </footer>
    );
}
