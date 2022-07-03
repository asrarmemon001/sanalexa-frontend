import React, { useEffect } from "react"
import AOS from "aos";
import FeaturedCourses from "../../components/featured-courses";
import SubscriptionPackages from "../../components/subscription-packages";
import BannerBottom from "../../components/banner-bottom";
import NewsletterSection from "../../components/newsletter";
import ShiftHandoverFaq from "./shift-handover-faq";
import ShiftHandover from "./shift-handover";
import ProductDetailsMain from "./details-main"
export default function ProductDetailsTemplate({ productDetails }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <ProductDetailsMain productDetails={productDetails}/>
            <ShiftHandover productDetails={productDetails}/> 
            <FeaturedCourses heading="POPULAR 3D MODELS" /> 
            <NewsletterSection />
        </>
    )
} 