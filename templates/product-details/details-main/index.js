import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"
import Slider from "react-slick";
import { toast } from "react-toastify";
import AppContext from "../../../appContext";
import { addtoBundleApi, AddtoCart } from "../../../utils/api-Request";
import { ImageBaseUrl } from "../../../utils/Baseurl";
import { getSession } from "../../../utils/constants";
const ProductDetailsMain = ({ productDetails }) => {
    const { id, projectTitle, bannerImage, price, projectDesc, services, isBuyed } = productDetails;
    const apiContext = useContext(AppContext)
    const {
        playTypeModal
    } = apiContext;
    const [apicall, setapicall] = useState(false);
    const [bundleApicall, setBundleApicall] = useState(false);
    const [selectServices, setSelectedServices] = useState([])
    const { state } = apiContext;
    const [sliderImages, setSliderImages] = useState(null)
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

    const handleAddtoCart = async (id, type) => {
        setapicall(true)
        const data = {
            sessionId: getSession(),
            cart: { id: String(id), type: "project", quantity: 1, selectServices },
        };
        await AddtoCart(data)
            .then((res) => {
                if (res?.status == 200) {
                    toast.success("Product added to cart")
                    if (type == 'buy') {
                        router.push('/cart')
                    }
                } else {
                    toast.error("somethingwent wrong");
                }
                apiContext.fetchCartList()
                setapicall(false)
            }
            )
            .catch((error) => { setapicall(false); console.log(error) });
    };


    const handleAddtoBundle = async (id) => {
        setBundleApicall(true)
        const data = {
            sessionId: getSession(),
            bundle: { id: String(id), type: "project", quantity: 1, selectServices },
        };
        await addtoBundleApi(data)
            .then((res) => {
                if (res?.status == 200) {
                    toast.success("Product added to bundle")
                } else {
                    toast.error("something went wrong");
                }
                apiContext.fetchBundleList()
                setBundleApicall(false)
            }
            )
            .catch((error) => { setBundleApicall(false); console.log(error) });
    };



    const isProductExistInBundle = (id) => {
        return Boolean(apiContext.state.bundleProduct?.find(el => el.id == id && el.type == 'project'))
    }

    const handleSelectedServices = (el, selected) => {
        const oldData = selectServices
        if (selected) {
            setSelectedServices([...oldData, el])
        } else {
            const excludeElelment = oldData.filter((l) => !(l.name == el.name && l.price == el.price))
            setSelectedServices([...excludeElelment])
        }

    }
    const isServiceSelected = (el) => {
        const oldData = selectServices
        return oldData.find(l=>(l.name == el.name && l.price == el.price))
    }
    const router = useRouter()
    useEffect(() => {
        setSliderImages([bannerImage])
    }, [router.asPath])

    const calculatePrice=()=>{
        const p = Number(price);
        let sp = 0;
        for(let i = 0; i < selectServices.length; i++){
            sp = sp + Number(selectServices[i].price)
        }
        selectServices?.length ? selectServices.reduce((total, el)=>{
            return Number(total) + Number(el.price)

        }) : 0
        return p + sp
        
    }
    console.log(productDetails);
    return (
        <section className="product-Gallery"> 
        <div className="banner-plans">
                <div className="container">
                    <div className="banner-content-ple">
                        <h2>{packagesName}</h2>
                        <p>{packagesDesc}</p>
                        <p>₹ {price}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="outer">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            {sliderImages ? <Slider {...settings}>
                                {sliderImages.map((image, index) => {
                                    return (<div className="item next-image-to-normal" key={`slideimage-${index}`}>
                                        <Image src={ImageBaseUrl + image} layout="fill" className="slide-image" />
                                    </div>)
                                })}

                            </Slider> : null}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="shift-content">

                                <h3>{projectTitle}</h3>
                                <p>{projectDesc}
                                    {/* <a href="#">Read More</a> */}
                                </p>

                                <h4>₹{calculatePrice()}</h4>
                                <div className="recommended">
                                    {services && services.length
                                        ?
                                        <>
                                            <h4>Recommended Services</h4>
                                            <div className="all-check-box">
                                                {services.map((el, i) => {
                                                    return (
                                                        <div className="form-check" key={`services${i}`}>
                                                            <input className="form-check-input" type="checkbox" id={`service-${el.name}`}  checked={isServiceSelected(el)} onChange={(e) => handleSelectedServices(el, e.target.checked)} />
                                                            <label className="form-check-label" htmlFor={`service-${el.name}`}>
                                                                {el.name} - <span className="text-primary">₹ {el.price}</span>
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </>
                                        :
                                        null}
                                    <div className="detail-all-butoon">
                                        { !isBuyed && <> <div className="cart-but">
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

                                            <button
                                                className={
                                                    isProductExistInCart(id)
                                                        ? "btn btn-danger"
                                                        : "addtubul"
                                                }
                                                onClick={() => {
                                                    !isProductExistInCart(id) ?
                                                        handleAddtoCart(id, 'buy')
                                                        :
                                                        router.push("/cart")
                                                }}
                                            // disabled={
                                            //     isProductExistInCart(id)
                                            //         ? true
                                            //         : false
                                            // }
                                            >
                                                {apicall ? (
                                                    <CircularProgress size={20} />) :
                                                    isProductExistInCart(id)
                                                        ?
                                                        <>
                                                            <i className="fa fa-briefcase" aria-hidden="true"></i> Checkout
                                                        </>
                                                        :
                                                        <>
                                                            <i className="fa fa-briefcase" aria-hidden="true"></i> Buy now
                                                        </>}
                                            </button>
                                        </div>
                                        <div className="bundle">
                                            <button
                                                className={
                                                    'addtubul btn btn-danger'
                                                }
                                                onClick={() => {
                                                    !isProductExistInBundle(id) &&
                                                        handleAddtoBundle(id, 'product', 1);
                                                }}
                                                disabled={
                                                    apiContext?.state?.bundleProduct?.length >= 4 && !isProductExistInBundle(id)
                                                        ? true
                                                        : false
                                                }
                                            >
                                                {bundleApicall ? (
                                                    <CircularProgress size={20} />) :
                                                    isProductExistInBundle(id)
                                                        ? "Added to Bundle"
                                                        :
                                                        'Add to Bundle'}
                                            </button>
                                            <button className="addtubul">Discover Entire Packge</button>
                                        </div>
                                        </>}
                                        {
                                            isBuyed && 
                                            <button className="btn btn-danger my-4 mr-3 text-white" target="_blank" rel="noreferrer" onClick={(e) => playTypeModal('play', productDetails)} data-toggle="tooltip" data-original-title="Play">
                                                Play
                                            </button>
                                        }
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