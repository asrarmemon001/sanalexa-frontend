import { CircularProgress } from "@mui/material"
import AOS from "aos"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import AppContext from "../../appContext"
import BannerSection from "../../components/banner-section"
import { AddtoCart } from "../../utils/api-Request"
import { ImageBaseUrl } from "../../utils/Baseurl"
import { getSession } from "../../utils/constants"

const SubscriptionPlansListTemplates = ({ subsciptionList }) => {
    const apiContext = useContext(AppContext)
    const router = useRouter()
    const [apicall, setapicall] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const handleAddtoCart = async (el) => {
        setapicall(true)
        let data = {
            sessionId: getSession(),
            cart: { id: String(el.id), type: "package", quantity: 1 },
        };

        if (Boolean(el?.noOfDayMonthYear) && Boolean(el?.dayMonthYear)) {
            data.cart.noOfDayMonthYear = el.noOfDayMonthYear;
            data.cart.dayMonthYear = el.dayMonthYear;
        }

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
    const listOfSubscriptions = subsciptionList.filter(el => el.project?.length)
    return (
        <>
        

            <section className="banner palneandbundel" style={{backgroundImage:'url(/static/images/banner.jpeg)'}}>
        <div className="container">
            <div className="main-banner">

            <div className="banner-content">
                <h1>PLANS & <br />SUBSCRIPTIONS</h1>
            <p>Simulator is an impactful alternative #training  method to <br />traditional coating and spray-painting techniques</p>
            <a className="button-download-launcher" href="/#"> <i className="fa fa-download" aria-hidden="true"></i>Download Launcher</a>
            </div>

            </div>
        </div>
    </section>
            <section className="subscription-plans">

                <div className="col-12 serction">
                    {listOfSubscriptions.map((el, i) => {
                        return (<div className={`row bord ${(i % 2 != 0) ? `flex-row-reverse` : ``}`} key={`package-${el.id}`}>
                            <div className="col-md-6  image-p-s">
                                <Image src={`${ImageBaseUrl}${el.bannerImage}`} layout="fill" />
                            </div>
                            <div className="col-md-6 rightColmn rightt">
                                <div className="bordprice">
                                   <div className="bordprice_rupis_ican">  
                                     <h3><span><span class="rupes">₹ </span> 200</span> <span className="discouns">899 16% discount</span></h3>
                                     </div>
                                     <div className="bordprice_soal">  
                                     <div className="prodwerp">
                                                        <ul>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-mobile" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="fa fa-gamepad" aria-hidden="true"></i></a></li>
                                                            <li><a href="#" className="girditemea"><i className="cutomeicon" style={{ backgroundImage: 'url(/static/images/iconfive.png)' }}></i></a></li>
                                                        </ul>
                                                    </div>
                                      </div>

                                </div>
                                <h1>{el.packagesName}</h1>
                                <p className="safetyope">Safety Operations  </p>
                                {/* {Boolean(el?.noOfDayMonthYear) && Boolean(el?.dayMonthYear)
                                    ?
                                    <h4>₹ {el.price} / {el?.noOfDayMonthYear} {el?.dayMonthYear}</h4>
                                    :
                                    <h4>₹ {el.price}</h4>
                                } */}

                                <p>{el.packagesDesc}</p>
                                <div className="customddrowpdowncontainer">
                                <div className="customdp" style={{ fontWeight: 600 }}>{el.project?.length || 0}  Training Modules   <i className="fa fa-angle-down" aria-hidden="true"></i>
</div>
                                <div className="customdrowpdownContent">

                                </div>
                                </div>

                                { !el.isBuyed && <button className="btn btn-danger" onClick={() => {
                                    !isPackageExistInCart(el.id) &&
                                        handleAddtoCart(el);
                                }}
                                    disabled={
                                        isPackageExistInCart(el.id)
                                            ? true
                                            : false
                                    } ><svg xmlns='http://www.w3.org/2000/svg' width='32.551' height='32.551' viewBox='162.676 25.102 32.551 32.551'><path d='M191.973 34.868h-26.041v-3.255h26.04v3.255Zm-3.256-9.766h-19.53v3.255h19.53v-3.255Zm6.51 16.276v13.02a3.265 3.265 0 0 1-3.254 3.256h-26.041a3.265 3.265 0 0 1-3.256-3.256v-13.02a3.265 3.265 0 0 1 3.256-3.255h26.04a3.265 3.265 0 0 1 3.256 3.255Zm-9.765 6.51-9.765-5.322v10.628l9.765-5.306Z' fill-rule='evenodd' data-name='Icon material-subscriptions'/></svg> {apicall ? (
                                        <CircularProgress size={20} />) :
                                        isPackageExistInCart(el.id)
                                            ?
                                            " Added in Cart"
                                            :
                                            'Buy Subscription'} </button>}
                                            { el.isBuyed && <button className="btn btn-danger" onClick={() => {
                                    !isPackageExistInCart(el.id) &&
                                        handleAddtoCart(el);
                                }}
                                    disabled={
                                        isPackageExistInCart(el.id)
                                            ? true
                                            : false
                                    } >{apicall ? (
                                        <CircularProgress size={20} />) :
                                        isPackageExistInCart(el.id)
                                            ?
                                            "Added in Cart"
                                            :
                                            'Resubscribe'}</button>}
                                            <button className="btn btn-danger"> <svg xmlns='http://www.w3.org/2000/svg' width='32.551' height='32.551' viewBox='162.676 25.102 32.551 32.551'><path d='M191.973 34.868h-26.041v-3.255h26.04v3.255Zm-3.256-9.766h-19.53v3.255h19.53v-3.255Zm6.51 16.276v13.02a3.265 3.265 0 0 1-3.254 3.256h-26.041a3.265 3.265 0 0 1-3.256-3.256v-13.02a3.265 3.265 0 0 1 3.256-3.255h26.04a3.265 3.265 0 0 1 3.256 3.255Zm-9.765 6.51-9.765-5.322v10.628l9.765-5.306Z' fill-rule='evenodd' data-name='Icon material-subscriptions'/></svg> ADD TO WISHLIST</button>
                                

                            </div>

                        </div>

                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default SubscriptionPlansListTemplates