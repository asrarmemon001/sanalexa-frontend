import React, { useEffect, useState } from "react"
import Slider from "react-slick";
import { Loader } from "../Loader/Loader";
import { NoDataFound } from "../NoDataFound/NoDataFound";
import { projectListFeatured } from "../../utils/api-Request";
import { ImageBaseUrl } from "../../utils/Baseurl";
import { useRouter } from "next/router";
import ProjectCard from "../projectCard/ProjectCard";
export default function FeaturedCourses({ heading }) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalPages, setTotalPages] = useState(0)
  const [search, setSearch] = useState("")
  const [loadingIs, setLoading] = useState(false)
  const [projectListIs, setProjectList] = useState([])
  const router = useRouter()

  const getProjectList = async () => {
    const data = { page: 1, limit: "999", search: "" }
    setLoading(true)
    const list = await projectListFeatured(data)
    const response = list?.data?.data
    if (response) {
      setLoading(false)
      setTotalPages(list?.data?.totalPages)
      if(response.length && response.length < 4){
        const arr = [...response,...response,...response,...response];
        const arn = arr.slice(0,4)
        setProjectList([...arn])
      }else{ 
        setProjectList(response)
      }
      
    }
  }

  useEffect(() => {
    getProjectList()
  }, [page, search])




  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button type="button" onClick={onClick} role="presentation" className="slider-button owl-next"><span aria-label="Next">›</span></button>
    );
  }


  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button type="button" role="presentation" onClick={onClick} className="slider-button owl-prev"><span aria-label="Previous">‹</span></button>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }; 
  return (<section className="what-you-get courses">
    <div className="container">
      <div className="title" data-aos="fade-up">
        <h3>{heading}</h3>
      </div>
      <div className="rowCantainer">

        {loadingIs ?
          <Loader /> :
          projectListIs?.length > 0 ?
            <Slider {...settings} className="coursesSliders">
              {
                projectListIs.map((obj, index) => {
                  return (
                    <ProjectCard key={`sl-${index}`} obj={obj} index={index} classes={"packageItem px-3"}/>
                  )
                })}

      
            </Slider> : <NoDataFound />
        }
      </div>
 
    </div>
  </section>

  )
}