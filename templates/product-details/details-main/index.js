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

 


    return (
        <section className="product-Gallery innerbanner"> 
        <div className="banner-plans" style={{ backgroundImage: 'url(/static/images/learning.jpeg)' }}>
                <div className="container">
                    <div className="banner-content-ple"> 
                        <h3>{projectTitle}</h3>
                      
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="productdetails">
                <h5>Safety Operations  </h5>
                        <p>{projectDesc}</p>
                </div>
                <div className="outer">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="normalcontent">

                           <div className="noslidecontent">

                               <h5>DUST RACING CAR 3D MODEL</h5> <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> <span>544</span></a>
                           </div>
                           

                            {sliderImages ? <Slider {...settings}>
                                {sliderImages.map((image, index) => {
                                    return (<div className="item next-image-to-normal" key={`slideimage-${index}`}>
                                        <Image src={ImageBaseUrl + image} layout="fill" className="slide-image" />
                                    </div>)
                                })}

                            </Slider> : null}

                               <div className="dustrac">
                               <div className="zoomicon">
                            <a href="#"><img src="/static/images/Icon map-fullsc.png" /></a>
                           </div>
                                  <div className="hingmodel">
                                   <h4>DUST RACING 3D MODEL</h4>
                                   <p>Safety Operations  </p>
                                  </div>
                                 <div className="hingmodelicon">
                                 <button className="btn btn-danger"><i className="fa fa-plus" aria-hidden="true"></i> ADD TO WISHLIST</button> 
                                 <ul>
                                    <li><a href="#"><i class="fa fa-eye" aria-hidden="true"></i> <span>1.08k</span></a></li>
                                    <li><a href="#"><i class="fa fa-heart" aria-hidden="true"></i> <span>78</span></a></li>
                                    <li><a href="#"><i class="fa fa-share" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i></a></li>
                                 </ul>
                                  </div>
                                </div>
                             </div> 

                        </div>
                        <div className="col-lg-4 col-md-12">
                            {/* <div className="shift-content">

                                <h3>{projectTitle}</h3>
                                <p>{projectDesc}
                                    { <a href="#">Read More</a> }
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
                                            { <input type="number" id="quantity" name="quantity" min="1" max="20" value="1" />}
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
                            </div> */}



                            <div className="rectanglemaen">
                            <div className="rectangle">
                            <div className="bordprice">
                                   <div className="bordprice_rupis_ican">  
                                     <h3><span><span class="rupes">₹ </span> {price}</span> <span className="discouns">16% discount</span></h3>
                                     </div>
                                     <div className="bordprice_soal">  
                                     <div className="prodwerp">
                                                        <ul>
                                         <li><a href="#" className="girditemea"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-mobile" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-gamepad" aria-hidden="true"></i></a></li>
                                                           
                                                        </ul>
                                                    </div>
                                      </div>

                                </div>

                                <div className="towcartbutton">
                                <button className="btn btn-danger" disabled=""><i className="fa fa-shopping-cart" aria-hidden="true"></i>  Added in Cart </button>
                                <button className="btn btn-danger"> <i className="fa fa-database" aria-hidden="true"></i> ADD TO WISHLIST</button>

                                </div>
                                  <div className="RecommendedAddons">
                                    <h4>Recommended Addons <img src="/static/images/Icon ionic-md-i.png" /></h4>
                                    <div className="OculusQuest">
                                    <ul className="towcarlist">
                                        <li>
                                        <input type="checkbox" id="Oculus" name="vehicle1" value="Bike" />
                                         <label for="Oculus"> Oculus Quest 2 <strong><img src="/static/images/Icon ionic-md-i.png" /></strong></label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="Clipart" name="vehicle1" value="Bike" />
                                         <label for="Clipart"> Clipart Images PNG/PSD/JPG <strong><img src="/static/images/Icon ionic-md-i.png" /></strong></label>
                                         <ul className="Clipart">
                                            <li>
                                            <input type="checkbox" id="resolution" name="vehicle1" value="Bike" />
                                         <label for="resolution">PSD image in HD resolution <strong><span className="totalru">₹ </span>300</strong> </label>
                                            </li>
                                            <li>
                                            <input type="checkbox" id="Blue" name="vehicle1" value="Bike" />
                                         <label for="Blue">Blue Print<strong><span className="totalru">₹ </span>30</strong> </label>
                                            </li>
                                            <li>
                                            <input type="checkbox" id="dpi" name="dpi" value="Bike" />
                                         <label for="dpi">High resolution 300 dpi Image <strong><span className="totalru">₹ </span>30</strong></label>
                                            </li>
                                         </ul>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="Interior" name="vehicle1" value="Bike" />
                                         <label for="Interior"> Detailed Interior <strong><span className="totalru"><img src="/static/images/Icon ionic-md-i.png" /> ₹ </span>300 </strong></label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="Unity" name="Unity" value="Bike" />
                                         <label for="Unity"> Unity Asset Package (Mobile Ready) <strong><span className="totalru"><img src="/static/images/Icon ionic-md-i.png" /> ₹ </span>200 </strong></label>
                                        </li>
                                    </ul>

                                    </div>
                                  </div>

                            </div>

                            <div className="ProductUSPwill">
                              <ul>
                    <li><h5><i class="fa fa-file-text-o" aria-hidden="true"></i> Product USP will be here</h5></li>
                    <li><h5><i class="fa fa-bar-chart" aria-hidden="true"></i> Product USP will be here</h5></li>
                <li><h5><img src="/static/images/Icon feather-me.png" /> Product USP will be here</h5></li>
                              </ul>

                            </div>
                           

                           <div className="COURSEPREVIEW">
                            <h4>COURSE PREVIEW</h4>
                            <ul className="courslist">
                             <li><h5>License </h5> <h5>Standard <a href="#">Learn More</a></h5> </li>
                             <li><h5>Language </h5> <h5>English, Hindi, Marathi</h5> </li>
                             <li><h5>Level</h5> <h5>Beginner</h5> </li>
                             <li><h5>Compatible with </h5>
                             <h5>
                                <div className="listimg">
                                <div class="bordprice_soal"><div class="prodwerp"><ul><li><a href="#" class="girditemea"><i class="fa fa-desktop" aria-hidden="true"></i></a></li><li><a href="#" class="girditemea"><i class="fa fa-laptop" aria-hidden="true"></i></a></li><li><a href="#" class="girditemea"><i class="fa fa-mobile" aria-hidden="true"></i></a></li><li><a href="#" class="girditemea"><i class="fa fa-gamepad" aria-hidden="true"></i></a></li></ul></div></div>

                             </div><a href="#">more info</a></h5> </li>
                             <li><h5>Downloadable size</h5> <h5>560MB <a href="#">more info</a></h5> </li>
                             <li><h5>Shareable Certificates </h5> <h5>Yes</h5> </li>
                             <li><h5>100% online </h5> <h5>Yes</h5> </li>
                             <li><h5>Flexible Deadlines  </h5> <h5>Yes</h5> </li>
                             <li><h5>Version</h5> <h5> V1.0 </h5> </li>
                             <li><h5>Validated by</h5> <h5>Hella & ASDC</h5> </li>
                             <li><h5>Updated on.</h5><h5>  28th Feb 2022</h5> </li>


                            </ul>
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