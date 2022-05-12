import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { packageList } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { Loader } from "../Loader/Loader";
import { NoDataFound } from "..//NoDataFound/NoDataFound";

export default function SubscriptionPackages({ heading }) {
    const [packListIs, setPackList] = useState([])
    const [loadingIs, setLoading] = useState(false)

    const getPackageList = async () => {
        setLoading(true)
        const list = await packageList()
        const response = list?.data?.data
        if (response) {
            setLoading(false)
            setPackList(response)
        }
    }

    useEffect(() => {
        getPackageList()
    }, [])

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
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };
    return (<section className="what-you-get" style={{ backgroundImage: 'url(/static/images/slider-bg.png)' }}>
        <div className="container">
            <div className="title" data-aos="fade-down">
                <h3>{heading}</h3>
            </div>
            <div className="rowCantainer">
                <Slider {...settings} className="packegeSlider owl-carousel">
                    {loadingIs ?
                        <Loader /> :
                        packListIs?.length > 0 ?
                            packListIs?.map((obj, index) => {
                                return (
                                    <div className="packageItem px-3 mb-2" key={index}>
                                        <figure className="package-img" style={{ backgroundImage: `url(${ImageBaseUrl + obj?.bannerImage})` }} />
                                        <div className="content-area text-center">
                                            <h3>{obj?.packagesName}</h3>
                                            <Link href="#">
                                                <a className="button-download-launcher border-only">Pay & Subscription</a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }) :
                            <NoDataFound />
                    }
                </Slider>
            </div>
        </div>
    </section>)
}