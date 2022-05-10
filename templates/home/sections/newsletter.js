export default function NewsletterSection() {
    return (
        <section className="newslettersection">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 text-right">
                        <h4 data-aos="fade-right">join The<small> Simulanis</small></h4>
                    </div>
                    <div className="col-md-7">
                        <div className="newsletter" data-aos="fade-left">
                            <form className="newsletterForm" action="">
                                <input type="text" placeholder="Enter your Email" className="textbox" />
                                <button className="subscribe">Subscribe </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}