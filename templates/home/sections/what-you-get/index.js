import Link from "next/link";

export default function WhatYouGet() {
    return (<section className="what-you-get" style={{ backgroundImage: 'url(/static/images/what-bg.png)' }}>
        <div className="container">
            <div className="title" data-aos="fade-up">
                <h3>What You Get</h3>
            </div>
            <div className="row row-center justify-content-center">
                <div className=" col-lg-4 col-md-6">
                    <div className="listItem" data-aos="fade-right">
                        <figure><img src="/static/images/web.png" /></figure>
                        <h3>Learn Anywhere On Web <br />
                            or mobile</h3>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="listItem" data-aos="fade-up">
                        <figure><img src="/static/images/rock.png" /></figure>
                        <h3>Advance Professionally <br />
                            with quality content</h3>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="listItem" data-aos="fade-left">
                        <figure><img src="/static/images/notes.png" /></figure>
                        <h3>Top Industry Standard <br /> content</h3>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="listItem" data-aos="fade-right">
                        <figure><img src="/static/images/book.png" /></figure>
                        <h3>Access Variety of Courses <br />
                            ranging from begninner <br />
                            to advanced</h3>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="listItem" data-aos="fade-left">
                        <figure><img src="/static/images/cirtificate.png" /></figure>
                        <h3>Acquire Industry Recognized <br />
                            certifications</h3>
                    </div>
                </div>

            </div>
            <div className="text-center" data-aos="fade-down">
                <Link href="#">
                    <a className="button-download-launcher">download launcher</a>
                </Link>
            </div>
        </div>
    </section>
    )
}