import Link from "next/link";

export default function BannerSection() {
    return (<section className="banner" style={{backgroundImage:'url(/static/images/banner.jpg)'}}>
        <div className="container">
            <div className="main-banner">
                <div className="banner-content" data-aos="fade-right">
                    <h1>Simulanis LEARN Library</h1>
                    <p></p>
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