import Link from "next/link";

export default function BannerBottom() {
    return (
        <section className="banner bannerbottom" style={{ backgroundImage: 'url(/static/images/banner-bottom.jpg)' }}>
            <div className="container">
                <div className="main-banner">
                    <div className="banner-content">
                        <h1>Want us to deploy paint   Simulator at your site?</h1>
                        <p>Our technical experts will respond to your query at the earliest.</p>
                         <Link href="#"><a className="button-download-launcher">Contact Us</a></Link>
                    </div>
                    {/* <div className="banner-img">
                        <img src="/static/images/right-bott.png" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}