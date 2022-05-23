import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { AddtoCart, packageList } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { Loader } from "../Loader/Loader";
import { NoDataFound } from "..//NoDataFound/NoDataFound";
import { getSession } from "../../utils/constants";
import { toast } from "react-toastify";
import AppContext from "../../appContext";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

export default function SubscriptionPackages({ heading }) {
    const apiContext = useContext(AppContext)
    const [packListIs, setPackList] = useState([])
    const [loadingIs, setLoading] = useState(false)
    const router = useRouter()
    const [apicall, setapicall] = useState(false);
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

    const handleAddtoCart = async (id) => {
        setapicall(true)
        const data = {
            sessionId: getSession(),
            cart: { id: String(id), type: "package", quantity: 1 },
        };
        await AddtoCart(data)
            .then((res) => {
                if (res?.status == 200) {
                    toast.success("Package added to cart")
                } else {
                    toast.error("somethingwent wrong");
                }
                apiContext.fetchCartList()
                router.push("/cart")
                setapicall(false)
            }
            )
            .catch((error) => { setapicall(false); console.log(error) });
    };

    const isPackageExistInCart = (id) => {
        return Boolean(apiContext.state.cartProduct?.find(el => el.id == id && el.type == 'package'))
    }

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
                                    obj.project?.length
                                    ?
                                    <div className="packageItem px-3 mb-2" key={index}>
                                        <figure className="package-img" style={{ backgroundImage: `url(${ImageBaseUrl + obj?.bannerImage})` }} />
                                        <div className="content-area text-center">
                                            <h3 className="mb-2">{obj?.packagesName}</h3>
                                            <h6 className="mb-2">₹ {obj?.price}</h6>

                                            <button className="btn btn-danger w-100 p-3" onClick={() => {
                                                !isPackageExistInCart(obj.id) &&
                                                    handleAddtoCart(obj?.id);
                                            }}
                                                disabled={
                                                    isPackageExistInCart(obj.id)
                                                        ? true
                                                        : false
                                                } style={{ borderRadius: 40 }}>{apicall ? (
                                                    <CircularProgress size={20} />) :
                                                    isPackageExistInCart(obj.id)
                                                    ?
                                                    "Added in Cart"
                                                    :
                                                    'Pay & Subscription'}</button>

                                        </div>
                                    </div>
                                    :
                                    null
                                )
                            }) :
                            <NoDataFound />
                    }
                </Slider>
            </div>
        </div>
    </section>)
}