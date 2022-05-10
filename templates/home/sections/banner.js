import Link from "next/link";

export default function BannerSection() {
    return (<section className="banner" style={{backgroundImage:'url(/static/images/banner.jpg)'}}>
        <div className="container">
            <div className="main-banner">
                <div className="banner-content" data-aos="fade-right">
                    <h1>excepteur sint
                        occaecat cupidatat</h1>
                    <p>Lorem ipsum is the filler text that typically demonstrates the font and style of a
                        text in a document or visual demonstration.</p>
                    <Link href="#">
                        <a className="button-download-launcher">download launcher</a>
                    </Link>
                </div>
                <div className="banner-img" data-aos="fade-left">
                    <img src="/static/images/image2.png" />
                </div>
            </div>
        </div>
    </section>)
}