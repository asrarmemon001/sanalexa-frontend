import { useState } from "react"
import Slider from "react-slick";
const ProductDetailsMain = () => {
    const [sliderImages, setSliderImages] = useState([`/static/images/course.png`,`/static/images/course.png`,`/static/images/course.png`, `/static/images/course.png`])
    const settings = {
        customPaging: function (i) {
            return (
                // <>
                    <a className="item thum-img">
                        <img src={sliderImages[i]} />
                    </a>
                // </>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="product-Gallery">
            <div className="container">
                <div className="outer">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">                          

                            <Slider {...settings}>
                                {sliderImages.map((image, index) => {
                                    return (<div className="item">
                                        <img key={`slideimage-${index}`} src={image} className="slide-image"/>
                                    </div>)
                                })}

                            </Slider>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="shift-content">

                                <h3>Shift handover</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the <a href="#">Read More</a></p>

                                <h4><span>$100.00</span>$95.00</h4>
                                <div className="recommended">
                                    <h4>Recommended Services</h4>
                                    <div className="all-check-box">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                User Manual
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Content Library
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Oculus Quest 2
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                HTC Vive
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                XR Station (containing all the deliverables)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="detail-all-butoon">
                                        <div className="cart-but">
                                            <input type="number" id="quantity" name="quantity" min="1" max="20" value="1" />
                                            <button className="addtubul"> <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
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