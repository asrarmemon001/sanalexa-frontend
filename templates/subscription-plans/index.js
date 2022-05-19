import Image from "next/image"
import Link from "next/link"
import BannerSection from "../../components/banner-section"
import { ImageBaseUrl } from "../../utils/Baseurl"

const SubscriptionPlansListTemplates = ({ subsciptionList }) => {
    return (
        <>
            <BannerSection>
                <div className="banner-content" data-aos="fade-right">
                    <h1>plans and subscriptions</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <Link href="#">
                        <a className="button-download-launcher">download launcher</a>
                    </Link>
                </div>
                <div className="banner-img" data-aos="fade-left">
                    <img src="/static/images/image2.png" />
                </div>
            </BannerSection>
            <section className="subscription-plans">
                <div className="container">
                    <h1 className="mb-4">Plans & Subscription</h1>

                    <div className="col-12">
                        {subsciptionList.map((el, i) => {
                            return (
                                <div className={`row ${(i % 2 != 0) ? `flex-row-reverse` : ``}`} key={`package-${el.id}`}>
                                    <div className="col-md-6 mb-5 image-p-s">
                                        <Image src={`${ImageBaseUrl}${el.bannerImage}`} layout="fill" />
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <h1>{el.packagesName}</h1>
                                        <p>{el.packagesDesc}</p>
                                        <p style={{ fontWeight: 600 }}>0 Modules</p>
                                        <button className="btn btn-info">Buy Subscription</button>
                                        <button className="btn btn-link">Know more</button>

                                    </div>

                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default SubscriptionPlansListTemplates