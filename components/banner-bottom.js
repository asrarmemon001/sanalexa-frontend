import Link from "next/link";

export default function BannerBottom() {
    return (
        <section className="banner bannerbottom" style={{ backgroundImage: 'url(/static/images/banner-bottom.jpg)' }}>
            <div className="container">
                <div className="main-banner">
                    <div className="banner-content">
                        <h1>Simulanis 
 <br />
                            <span>LEARN Library</span></h1>
                         <Link href="#"><a className="button-download-launcher">download launcher</a></Link>
                    </div>
                    <div className="banner-img">
                        <img src="/static/images/right-bott.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}