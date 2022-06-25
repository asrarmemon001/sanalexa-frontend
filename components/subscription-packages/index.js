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
    const { sectors } = apiContext.state;
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
            const r = response.filter(el=>el.project?.length == 1) 
            if(r.length && r.length < 3){
                const arr = [...r,...r,...r,...r];
                const arn = arr
                setPackList([...arn])
              }else{ 
                setPackList(r)
              } 
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

    const getSectorName = (id) => {
        return sectors?.find(el => el.id == id)?.name
    } 
    return (<section className="what-you-get" style={{ backgroundImage: 'url(/static/images/slider-bg.png)' }}>
        <div className="container">
            <div className="title" data-aos="fade-down">
                <h3>{heading}</h3>
                <h6>Find the exact right 3D content for your needs, including AR/VR, gaming, </h6>
            </div>
            <div className="rowCantainer">
                <Slider {...settings} className="packegeSlider">
                    {loadingIs ?
                        <Loader /> :
                        packListIs?.length > 0 ?
                            packListIs?.map((obj, index) => {
                                return (
                                    obj.project?.length
                                        ?
                                        <div className="packageItem px-3 mb-2" key={index}>
                                            <figure className="package-img" style={{ backgroundImage: `url('${ImageBaseUrl + obj?.bannerImage}')` }}>
                                                <p>{getSectorName(obj.sector)}</p>
                                            </figure>
                                            <div className="content-area">
                                                <h3>{obj?.packagesName}</h3>
                                                <div className="discriptions-c">
                                                <p>{obj?.packagesDesc}</p>
                                                <p>{obj.project?.length} {obj.project?.length > 1 ? `Courses` : `Course`}</p>
                                                </div>
                                                <div className="review-item">
                                                    <div className="review-icon">
                                                        <ul>
                                                            <li><i className="fa fa-user" aria-hidden="true"></i> 45,896</li>
                                                        </ul>
                                                    </div>
                                                    <div className="prodwerp">
                                                        <ul>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-mobile" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-gamepad" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <h6 className="mb-2">₹ {obj?.price}</h6>


                                                {!obj.isBuyed && <button className="btn btn-danger w-100 p-3" onClick={() => {
                                                    !isPackageExistInCart(obj.id) &&
                                                        handleAddtoCart(obj?.id);
                                                }}
                                                    disabled={
                                                        isPackageExistInCart(obj.id)
                                                            ? true
                                                            : false
                                                    } style={{ borderRadius: 6 }}><i className="fa fa-shopping-cart" aria-hidden="true"></i>{apicall ? (
                                                        <CircularProgress size={20} />) :
                                                        isPackageExistInCart(obj.id)
                                                            ?
                                                            "Added in Cart"
                                                            :
                                                            'Pay & Subscription'}</button>}
                                                {obj.isBuyed && <button className="btn btn-danger w-100 p-3" onClick={() => {
                                                    !isPackageExistInCart(obj.id) &&
                                                        handleAddtoCart(obj?.id);
                                                }}
                                                    disabled={
                                                        isPackageExistInCart(obj.id)
                                                            ? true
                                                            : false
                                                    } style={{ borderRadius: 6 }}>{apicall ? (
                                                        <CircularProgress size={20} />) :
                                                        isPackageExistInCart(obj.id)
                                                            ?

                                                            "Added in Cart"
                                                            :
                                                            'Re Subscripe'}</button>}

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