import React, { useEffect } from "react"
import CategoriesSection from "./sections/categories";
import GetStarted from "./sections/get-started";
import WhatYouGet from "./sections/what-you-get";
import AOS from "aos";
import SubscriptionPackages from "../../components/subscription-packages";
import FeaturedCourses from "../../components/featured-courses";
import BannerBottom from "../../components/banner-bottom";
import NewsletterSection from "../../components/newsletter";
import BannerSection from "../../components/banner-section";
import Link from "next/link";

export default function HomePageTemplate() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <BannerSection>
                <div className="banner-content" data-aos="fade-right">
                    <h1>Simulanis LEARN Library</h1>
                    <p></p>
                    <Link href="#">
                        <a className="button-download-launcher">download launcher</a>
                    </Link>
                </div>
                <div className="banner-img" data-aos="fade-left">
                    <img src="/static/images/image2.png" />
                </div>
            </BannerSection>
            <CategoriesSection />
            <GetStarted />
            <WhatYouGet />
            <SubscriptionPackages heading="Subscription Package" />
            <FeaturedCourses heading="Featured Courses" />
            <BannerBottom />
            <NewsletterSection />
        </>
    )
} 