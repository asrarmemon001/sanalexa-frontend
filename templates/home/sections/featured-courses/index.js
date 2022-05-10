import React, { useEffect, useState } from "react"
import Slider from "react-slick";
import { Loader } from "../../../../components/Loader/Loader";
import { NoDataFound } from "../../../../components/NoDataFound/NoDataFound";
import { projectListFeatured } from "../../../../utils/api-Request";
import { ImageBaseUrl } from "../../../../utils/Baseurl";
export default function FeaturedCourses() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalPages, setTotalPages] = useState(0)
  const [search, setSearch] = useState("")
  const [loadingIs, setLoading] = useState(false)
  const [projectListIs, setProjectList] = useState([])


  const getProjectList = async () => {
    const data = { page: 1, limit: "999", search: "" }
    setLoading(true)
    const list = await projectListFeatured(data)
    const response = list?.data?.data
    if (response) {
      setLoading(false)
      setTotalPages(list?.data?.totalPages)
      setProjectList(response)
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
        <h3>Featured Courses</h3>
      </div>
      <div className="rowCantainer">

        {loadingIs ?
          <Loader /> :
          projectListIs?.length > 0 ?
            <Slider {...settings} className="coursesSlider owl-carousel">
              {
                projectListIs.map((obj, index) => {
                  return (

                    <div className="packageItem px-3">
                      <div className="pharmaceutical-box">
                        <figure>
                          <img src={ImageBaseUrl + obj?.bannerImage} />
                          <h5 className="Pharmacepo">{obj?.sector?.name}</h5>
                        </figure>
                        <div className="pharmaceutical-contant">
                          <h4>{obj?.projectTitle}</h4>
                          <h3><span>${obj?.price}</span></h3>

                          <div className="buttons">
                            <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i>
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i> </button>
                            <button href="#" className="addtubul">Add to Bundle</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </Slider> : <NoDataFound />
        }
      </div>


    </div>
  </section>

  )
}