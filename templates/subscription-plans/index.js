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
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const handleAddtoCart = async (el) => {
        setapicall(true)
        const data = {
            sessionId: getSession(),
            cart: { id: String(el.id), type: "package", quantity: 1, noOfDayMonthYear:el.noOfDayMonthYear, dayMonthYear:el.dayMonthYear },
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
    const listOfSubscriptions = subsciptionList.filter(el => el.project?.length)
    return (
        <>
            <div className="banner-plans">
                <div className="container">
                    <div className="banner-content-ple">
                        <h2>Plans & Subscription</h2>
                        <p>Excepteure sint accaecat cupidatat non proident,sunt in culpa qui officia deserunt </p>
                        <a href="#" className="subscriptiondwonlod">Download launcher</a>
                    </div>

                </div>
            </div>
            <section className="subscription-plans">

                <div className="col-12">
                    {listOfSubscriptions.map((el, i) => {
                        return (<div className={`row bord ${(i % 2 != 0) ? `flex-row-reverse` : ``}`} key={`package-${el.id}`}>
                            <div className="col-md-6  image-p-s">
                                <Image src={`${ImageBaseUrl}${el.bannerImage}`} layout="fill" />
                            </div>
                            <div className="col-md-6 ">
                                <h1>{el.packagesName}</h1>
                                <h4>₹ {el.price} / {el?.noOfDayMonthYear} {el?.dayMonthYear}</h4>
                                <p>{el.packagesDesc}</p>
                                <p style={{ fontWeight: 600 }}>{el.project?.length || 0} Modules</p>
                                <button className="btn btn-danger" onClick={() => {
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
                                            'Buy Subscription'}</button>
                                <Link href={`/plans-and-subscriptions/details/${el.id}`}>
                                    <a className="btn btn-link">Know more</a>
                                </Link>

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