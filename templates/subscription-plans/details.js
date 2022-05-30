import { CircularProgress } from "@mui/material"
import AOS from "aos"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import AppContext from "../../appContext"
import BannerSection from "../../components/banner-section"
import { NoDataFound } from "../../components/NoDataFound/NoDataFound"
import { AddtoCart } from "../../utils/api-Request"
import { ImageBaseUrl } from "../../utils/Baseurl"
import { getSession } from "../../utils/constants"

const SubscriptionPlanDetailsTemplates = ({ subsciptionDetails }) => {
    const { packagesName, packagesDesc, bannerImage, price, projects } = subsciptionDetails;
    console.log(projects, 'subsciptionDetails')
    return (
        <>
            <div className="banner-plans">
                <div className="container">
                    <div className="banner-content-ple">
                        <h2>{packagesName}</h2>
                        <p>{packagesDesc}</p>
                        <p>₹ {price}</p>
                    </div>

                </div>
            </div>
            <section className="subscription-plans">

                <div className="col-12">
                    {projects && projects.length
                        ?
                        projects.map((el, i) => {
                            return (<div className={`row bord ${(i % 2 != 0) ? `flex-row-reverse` : ``}`} key={`package-${el.id}`}>
                                <div className="col-md-6  image-p-s">
                                    <Image src={`${ImageBaseUrl}${el.bannerImage}`} layout="fill" />
                                </div>
                                <div className="col-md-6 ">
                                    <h1>{el.projectTitle}</h1>
                                    <h4>{el.projectDesc}</h4>

                                    <Link href={`/product-details/${el.id}`}>
                                        <a className="btn btn-link">Know more</a>
                                    </Link>


                                </div>

                            </div>

                            )
                        })
                        :
                        <NoDataFound />}
                </div>
            </section>
        </>
    )
}
export default SubscriptionPlanDetailsTemplates