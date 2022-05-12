import React, { useEffect } from "react"
import BannerSection from "./sections/banner";
import BannerBottom from "./sections/banner-bottom";
import CategoriesSection from "./sections/categories";
import FeaturedCourses from "./sections/featured-courses";
import GetStarted from "./sections/get-started";
import NewsletterSection from "./sections/newsletter";
import SubscriptionPackages from "./sections/subscription-packages";
import WhatYouGet from "./sections/what-you-get";
import AOS from "aos";
import {generateSessionId} from "../../utils/helper-functions"

export default function HomePageTemplate() {
    useEffect(() => {
        if(!localStorage.getItem('sessionId')){
            const sessionKey = generateSessionId()
            console.log(sessionKey)
            localStorage.setItem('sessionId',sessionKey)
        }  
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <BannerSection />
            <CategoriesSection/>
            <GetStarted/>
            <WhatYouGet/>
            <SubscriptionPackages/>  
            <FeaturedCourses/>
            <BannerBottom/>
            <NewsletterSection/>
        </>
    )
} 