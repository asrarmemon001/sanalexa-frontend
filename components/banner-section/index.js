
export default function BannerSection({children}) {
    return (<section className="banner" style={{backgroundImage:'url(/static/images/banner.jpg)'}}>
        <div className="container">
            <div className="main-banner">
               {children}
            </div>
        </div>
    </section>)
}