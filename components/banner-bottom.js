import Link from "next/link";

export default function BannerBottom() {
    return (
        <section className="banner bannerbottom" style={{ backgroundImage: 'url(/static/images/banner-bottom.jpg)' }}>
            <div className="container">
                <div className="main-banner">
                    <div className="banner-content" data-aos="fade-right">
                        <h1>Some Text <br />
                            <span>Some more</span> occaecat</h1>
                        <p>Lorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration.</p>
                        <Link href="#"><a className="button-download-launcher">download launcher</a></Link>
                    </div>
                    <div className="banner-img" data-aos="fade-left">
                        <img src="/static/images/right-bott.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}