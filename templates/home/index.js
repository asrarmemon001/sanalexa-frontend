import React, { useEffect } from "react"
import BannerSection from "./sections/banner"; 
import CategoriesSection from "./sections/categories"; 
import GetStarted from "./sections/get-started"; 
import WhatYouGet from "./sections/what-you-get";
import AOS from "aos"; 
import SubscriptionPackages from "../../components/subscription-packages";
import FeaturedCourses from "../../components/featured-courses";
import BannerBottom from "../../components/banner-bottom";
import NewsletterSection from "../../components/newsletter";

export default function HomePageTemplate() {
    useEffect(() => { 
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <BannerSection />
            <CategoriesSection/>
            <GetStarted/>
            <WhatYouGet/>
            <SubscriptionPackages heading="Subscription Package"/>  
            <FeaturedCourses heading="Featured Courses"/>
            <BannerBottom/>
            <NewsletterSection/>
        </>
    )
} 