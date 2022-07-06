import React, { useEffect, useState } from "react"
import AOS from "aos";
import { getUser, getProjectAndPackage, getProjectPercentageApi, getFavList } from "../../utils/api-Request"
import { ImageBaseUrl } from "../../utils/Baseurl"

import Link from "next/link";
import TabPanel from "./tabpanel";
import { CircularProgress } from "@mui/material";

export default function LeaningPageTemplate() {
   const [userIs, setUser] = useState("")
   const [projects, setProjects] = useState([])
   const [packages, setPackages] = useState([])
   const [learningProjects, setLearningProjects] = useState([])
   const [learningPackages, setLearningPackages] = useState([])
   const [favProjects, setFavProjects] = useState([])
   const [favPackages, setFavPackages] = useState([])
   const [inProgressProjects, setInProgressProjects] = useState([])
   const [inProgressPackages, setInProgressPackages] = useState([])
   const [percentageData, setPercentageData] = useState([])
   const [activePanel, setActivePanel] = useState(0)
   const [loading, setLoading] = useState(false)

   const getFavData = async() => {
      const favList = await getFavList()
      const response = favList?.data?.data
      if(response?.length){
         const data = response.filter((el => el.itemType === "project"))
         const packIs = response.filter((el => el.itemType === "package"))
         setFavProjects(data)
         setFavPackages(packIs)
      }
   }

   const getUserData = async () => {
      const user = await getUser()
      const response = user?.data?.data
      if (response) {
         setUser(response)
      }
   }

   const getCourses = async () => {
      setLoading(true)
      const coursesData = await getProjectAndPackage()
      const projectPercentageData = await getProjectPercentageApi()
      const response = coursesData?.data?.data

      if (response) {
         console.log(response,'lll')
         if(typeof response?.packages == "object" && Object.keys(response?.packages).length){ 
            setPackages([...Object.values(response?.packages)])
         }
         setProjects(response?.projects)
      }
      if (projectPercentageData) {
         setPercentageData(projectPercentageData?.data?.data)
      }
      setLoading(false)
   }

   useEffect(() => {
      const lProjects = projects?.filter(el => Number(percentageData?.find(l => l.projectId == el.id)?.precentage) >= 100)
      const IProjects = projects?.filter(el => Number(percentageData?.find(l => l.projectId == el.id)?.precentage) < 100)
      setLearningProjects(lProjects)
      setInProgressProjects(IProjects)

   }, [percentageData])

   useEffect(() => {
      AOS.init();
      AOS.refresh();
      getUserData()
      getCourses()
      getFavData()
   }, []);

   console.log("sdcsdsddsd", favPackages)

   const tabPanels = [
      {
         id: "tab-01",
         tab: `In Progress (${(inProgressProjects?.length || 0) + (inProgressPackages?.length || 0)})`,
         panel: <TabPanel projects={inProgressProjects} percentageData={percentageData} packages={inProgressPackages}/>
      },
      {
         id: "tab-02",
         tab: `My Favorites (${(favProjects?.length || 0) + (favPackages?.length || 0)})`,
         panel: <TabPanel projects={favProjects} percentageData={percentageData} packages={favPackages} favorites={true}/>
      },
      {
         id: "tab-03",
         tab: `Learning History (${(learningProjects?.length || 0) + (learningPackages?.length || 0)})`,
         panel: <TabPanel projects={learningProjects} percentageData={percentageData} packages={learningPackages}/>
      },
      {
         id: "tab-04",
         tab: `Purchased Courses (${(projects?.length || 0) + (packages?.length || 0)})`,
         panel: <TabPanel projects={projects} packages={packages} percentageData={percentageData} />
      }
   ]



   return (
      <section className="learning-content">
         <div className="banner-plans" style={{ backgroundImage: 'url(/static/images/learning.jpeg)' }}>
            <div className="container-fuild">
               <div className="learningdef">
                  <div className="learningimg">
                     <img src={`${userIs?.profilePic ? ImageBaseUrl + userIs?.profilePic : "/static/images/user.png"}`} />
                  </div>
                  <div className="banner-content-ple">
                     <h2>{userIs?.name?.toUpperCase()}</h2>
                     <a href="#" className="eidtaccou"><i className="fa fa-pencil" aria-hidden="true"></i> edit Account </a>
                  </div>
               </div>
            </div>
         </div>
         {loading
            ?
            <div className="text-center p-4" style={{minHeight:200}}>
               <CircularProgress />
            </div>
            :
            <>
               <div className="alltabsyel">
                  <ul>
                     {tabPanels.map((el, i) => {
                        return (
                           <li className={activePanel == i ? "active" : ""}><a href="javascript:void(0)" onClick={() => setActivePanel(i)} key={el.id}>{el.tab}</a></li>
                        )
                     })}

                  </ul>
               </div>
               <div className="container">{tabPanels[activePanel].panel} </div>
            </>}
         <section className="banner bannerbottom" style={{ backgroundImage: 'url(/static/images/banner-bottom.jpg)' }}>
            <div className="container">
               <div className="main-banner">
                  <div className="banner-content">
                     <h1>Whan us to deploy paint  Simulator at your site?</h1>
                     <p>Our technical experts will respond to your query at the earliest.</p>
                     <Link href="#"><a className="button-download-launcher">Contact Us</a></Link>
                  </div>
                  {/* <div className="banner-img">
                        <img src="/static/images/right-bott.png" />
                    </div> */}
               </div>
            </div>
         </section>
      </section>
   )
}
