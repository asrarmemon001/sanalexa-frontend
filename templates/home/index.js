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
                <h1>META XR <br />Learning <br />EXPERIENCE </h1>
                    <p>Simulator is an impactful alternative #training <br /> method to traditional coating and spray-painting techniques</p> 
                    <Link href="#">
                  <a className="button-download-launcher">  <i className="fa fa-download" aria-hidden="true"></i>Download Launcher</a>
                    </Link>
                    {/* <Link href="#">
                    <a className="button-download-launcher" ><i className="fa fa-unlock" aria-hidden="true"></i>
 Free Access</a>
                    </Link> */}
                </div>
               
            </BannerSection>
            <CategoriesSection />
            <GetStarted />
            <WhatYouGet />
            <SubscriptionPackages heading="SUBSCRIPTION PACKAGE" />
            <FeaturedCourses heading="Featured Courses" />
            <BannerBottom />
            <NewsletterSection />
        </>
    )
} 