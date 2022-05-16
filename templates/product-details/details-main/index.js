import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useState } from "react"
import Slider from "react-slick";
import { toast } from "react-toastify";
import AppContext from "../../../appContext";
import { AddtoCart } from "../../../utils/api-Request";
import { ImageBaseUrl } from "../../../utils/Baseurl";
import { getSession } from "../../../utils/constants";
const ProductDetailsMain = ({ productDetails: { id, projectTitle, bannerImage, price, projectDesc } }) => {
    const apiContext = useContext(AppContext)
    const [apicall, setapicall] = useState(false);
    const { state } = apiContext;
    const [sliderImages, setSliderImages] = useState([bannerImage])
    const settings = {
        customPaging: function (i) {
            return (
                <a className="item thum-img">
                    <Image src={ImageBaseUrl + sliderImages[i]} width={10} height={10} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const isProductExistInCart = (id) => {
        return Boolean(apiContext.state.cartProduct?.find(el => el.id == id && el.type == 'project'))
    }

    const handleAddtoCart = async (id) => {
        setapicall(true)
        const data = {
            sessionId: getSession(),
            cart: { id: String(id), type: "project", quantity: 1 },
        };
        await AddtoCart(data)
            .then((res) => {
                if (res?.status == 200) {
                    toast.success("Product added to cart")
                } else {
                    toast.error("somethingwent wrong");
                }
                apiContext.fetchCartList()
                setapicall(false)
            }
            )
            .catch((error) => { setapicall(false); console.log(error) });
    };
    return (
        <section className="product-Gallery">
            <div className="container">
                <div className="outer">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Slider {...settings}>
                                {sliderImages.map((image, index) => {
                                    return (<div className="item next-image-to-normal" key={`slideimage-${index}`}>
                                        <Image  src={ImageBaseUrl + image} layout="fill" className="slide-image" />
                                    </div>)
                                })}

                            </Slider>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="shift-content">

                                <h3>{projectTitle}</h3>
                                <p>{projectDesc}
                                    {/* <a href="#">Read More</a> */}
                                </p>

                                <h4>${price}</h4>
                                <div className="recommended">
                                    <h4>Recommended Services</h4>
                                    <div className="all-check-box">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                User Manual
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Content Library
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Oculus Quest 2
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                HTC Vive
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                XR Station (containing all the deliverables)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="detail-all-butoon">
                                        <div className="cart-but">
                                            {/* <input type="number" id="quantity" name="quantity" min="1" max="20" value="1" /> */}
                                            <button
                                                className={
                                                    isProductExistInCart(id)
                                                        ? "btn btn-danger"
                                                        : "addtubul"
                                                }
                                                onClick={() => {
                                                    !isProductExistInCart(id) &&
                                                        handleAddtoCart(id);
                                                }}
                                                disabled={
                                                    isProductExistInCart(id)
                                                        ? true
                                                        : false
                                                }
                                            >
                                                {apicall ? (
                                                    <CircularProgress size={20} />) :
                                                    isProductExistInCart(id)
                                                        ?
                                                        <>
                                                            <i className="fa fa-cart-plus" aria-hidden="true"></i> Added to cart
                                                        </>
                                                        :
                                                        <>
                                                            <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart
                                                        </>}
                                            </button>
                                            {/* <button className="addtubul"> <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button> */}
                                            <button className="addtubul"><i className="fa fa-briefcase" aria-hidden="true"></i>Buy Now</button>
                                        </div>
                                        <div className="bundle">
                                            <button className="addtubul">Add to bundle</button>
                                            <button className="addtubul">Discover Entire Packge</button>
                                        </div>
                                        <div className="wishlist">
                                            <button className="addtubul"> <i className="fa fa-cart-plus" aria-hidden="true"></i>  Add to wishlist</button>
                                            <button className="addtubul"><i className="fa fa-download" aria-hidden="true"></i> Download launcher</button>
                                            <button className="addtubul"> <i className="fa fa-share-alt" aria-hidden="true"></i> Share</button>
                                        </div>

                                        <div className="devices-available">

                                            <a href="#">Devices Available on</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductDetailsMain