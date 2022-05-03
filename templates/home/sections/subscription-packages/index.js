import Link from "next/link";
import Slider from "react-slick";
export default function SubscriptionPackages() {

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button type="button" onClick={onClick} role="presentation" className="slider-button owl-next"><span aria-label="Next">›</span></button>
        );
    }


    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button type="button" role="presentation" onClick={onClick} className="slider-button owl-prev"><span aria-label="Previous">‹</span></button>
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
               
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
              }
            }
          ]
    };
    return (<section className="what-you-get" style={{ backgroundImage: 'url(/static/images/slider-bg.png)' }}>
        <div className="container">
            <div className="title" data-aos="fade-down">
                <h3>Subscription Package</h3>
            </div>
            <div className="rowCantainer">
                <Slider {...settings} className="packegeSlider owl-carousel">
                    <div className="packageItem px-3 mb-2">
                        <figure className="package-img" style={{ backgroundImage: 'url(/static/images/first-package.jpg)' }} />
                        <div className="content-area text-center">
                            <h3>Oil & Gas Package </h3>
                            <Link href="#">
                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                            </Link>
                        </div>
                    </div>
                    <div className="packageItem px-3 mb-2">
                        <figure className="package-img" style={{ backgroundImage: 'url(/static/images/secont-pack.jpg)' }} />
                        <div className="content-area text-center">
                            <h3>Automation Package </h3>
                            <Link href="#">
                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                            </Link>
                        </div>
                    </div>

                    <div className="packageItem px-3 mb-2">
                        <figure className="package-img" style={{ backgroundImage: 'url(/static/images/third-pack.jpg)' }} />
                        <div className="content-area text-center">
                            <h3>Pharmaceutical Package</h3>
                            <Link href="#">
                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                            </Link>
                        </div>
                    </div>
                    <div className="packageItem px-3 mb-2">
                        <figure className="package-img" style={{ backgroundImage: 'url(/static/images/first-package.jpg)' }} />
                        <div className="content-area text-center">
                            <h3>Oil & Gas Package </h3>
                            <Link href="#">
                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                            </Link>
                        </div>
                    </div>
                    <div className="packageItem px-3 mb-2">
                        <figure className="package-img" style={{ backgroundImage: 'url(/static/images/secont-pack.jpg)' }} />
                        <div className="content-area text-center">
                            <h3>Automation Package </h3>
                            <Link href="#">
                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                            </Link>
                        </div>
                    </div>

                    <div className="packageItem px-3 mb-2">
                        <figure className="package-img" style={{ backgroundImage: 'url(/static/images/third-pack.jpg)' }} />
                        <div className="content-area text-center">
                            <h3>Pharmaceutical Package</h3>
                            <Link href="#">
                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>)
}