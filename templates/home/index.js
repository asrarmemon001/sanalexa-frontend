import React, { useEffect } from "react";
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
          <h1>
          SIMUALNIS<br />
LEARN LIBRARY<br />{" "}
          </h1>
          <p>
          Get skilled anywhere<br />
         Start you skilling journey with more than 200+ XR ready courses validated<br />
          by industry and subject matter experts
          </p>
          <div className="homebannerbuton">
          <Link href="#">
            <a className="button-download-launcher">
              {" "}
              <i className="fa fa-download" aria-hidden="true"></i>JOIN FOR FREE
            </a>
          </Link>
          { <Link href="#">
                    <a className="button-download-launcher" ><i className="fa fa-download" aria-hidden="true"></i>
                    EXPLORE FOR BUISNESS</a>
                    </Link> }
                    </div>
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
  );
}
