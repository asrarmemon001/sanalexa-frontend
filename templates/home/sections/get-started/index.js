import Link from "next/link";
import { useEffect, useState } from "react";
import { plateformList } from "../../../../utils/plateform";
import { ImageBaseUrl } from "../../../../utils/Baseurl";
import { projectList, sectorList } from "../../../../utils/api-Request";
import { Loader } from "../../../../components/Loader/Loader";
import { NoDataFound } from "../../../../components/NoDataFound/NoDataFound";
import ReactPaginate from 'react-paginate';

export default function GetStarted() {


  const [plateformFilterShow, setPlateformFilterShow] = useState(false)
  const [industryFilterShow, setIndustryFilterShow] = useState(false)
  const [ page, setPage ] = useState(1)
  const [ limit, setLimit ] = useState(5)
  const [ totalPages, setTotalPages ] = useState(0)
  const [ search, setSearch ] = useState("")
  const [ loadingIs, setLoading ] = useState(false)
  const [ projectListIs, setProjectList ] = useState([])
  const [ plateform, setplateform ] = useState([])
  const [ sector , setSector ] = useState([])
  const [ sectorListIs, setSectorList ] = useState([])


  const handleOnChange = (event) => {
    setSearch(event.target.value)
  }

  const handlePageClick = (data) => {
    setPage(data?.selected +1)
  }

  const togglePlateformFilter = () => {
    setPlateformFilterShow(!plateformFilterShow)
  }

  const toggleIndustryFilter = () => {
    setIndustryFilterShow(!industryFilterShow)
  }

  const getSectorList = async() => {
    const list = await sectorList()
    const response = list?.data?.data
    if(response){
      setSectorList(response)
    }
  }

  const getProjectList = async() => {
    const data = { page, limit, search }
    setLoading(true)
    const list = await projectList(data)
    const response = list?.data?.data
    if(response){
      setLoading(false)
      setTotalPages(list?.data?.totalPages)
      setProjectList(response)
    }
  }
  

  useEffect(() => {
    getProjectList()
  },[page, search])


  useEffect(() => {
    getSectorList()
  },[])


  return (
    <section className="couressto">
      <div className="container">
        <div className="title">
          <h3>Courses to get you started </h3>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">

            <div className="filltercode" data-aos="fade-right">
              <div className="fillter-inp">
                <div className="main-filter">
                  <div className="filter-header">
                    <div className="filter-title">
                      <i className="fa fa-sliders" aria-hidden="true"></i>
                      <h6 className="mg-none-i pd-left-lv2 font-md">Filters</h6>
                    </div>
                    {/* <button className="button button--md button--link-gray button--icon filter-collapse">
                        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                      </button> */}
                  </div>
                  <div className="allfilter">
                    <ul className="filterkey">
                      <li className={plateformFilterShow ? "current" : ""}>
                        <div className="plus" onClick={togglePlateformFilter}>
                          <i className="fa fa-desktop" aria-hidden="true"></i> <span className="platform">Platform</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i></div>
                        <div className="filterbut">
                          {plateformList?.map((obj, index) => {
                            return(
                              <label className="control" for={obj?.name} key={index}>
                                <input type="checkbox" name={obj?.name} id={obj?.id} />
                                <span className="control__content">
                                  {obj?.name}
                                </span>
                              </label>
                            )
                          })}
                        </div>

                      </li>

                      <li className={industryFilterShow ? "current" : ""}>
                        <div className="plus" onClick={toggleIndustryFilter}><i className="fa fa-industry" aria-hidden="true"></i> <span className="platform">Industrie
                          specific</span> <i className="fa fa-angle-down" aria-hidden="true"></i></div>
                        <div className="filterbut">
                          {sectorListIs?.map((obj, index) => {
                            return(
                              <label className="control" for={obj?.id} key={index}>
                                <input type="checkbox" name={obj?.name} id={obj?.id} />
                                <span className="control__content">
                                  {obj?.name}
                                </span>
                              </label>
                            )
                          })}
                        </div>

                      </li>

                      <li><a href="#" className="show-more">Show more</a></li>
                    </ul>

                  </div>

                </div>
              </div>

              <div className="fillter-serche">

              </div>
            </div>
          </div>
          
          {/* Projects************************ */}

          <div className="col-lg-9 col-md-8">

            <div className="search-container" data-aos="fade-up">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder=" Search Keywords" name="search" value={search} onChange={handleOnChange}/>

            </div>

            <div className="row mb-4">
              {loadingIs ? 
                <Loader /> :
                projectListIs?.length > 0 ? 
                projectListIs.map((obj,index) => {
                  return(
                    <div className=" col-lg-4 col-md-6 mb-4" key={index}>
                      <div className="pharmaceutical-box" data-aos="fade-right">
                        <figure>
                          <img src={ImageBaseUrl + obj?.bannerImage} />
                          <h5 className="Pharmacepo">{obj?.sector?.name}</h5>
                        </figure>
                        <div className="pharmaceutical-contant">
                          <h4>{obj?.projectTitle}</h4>
                          <h3><span>${obj?.price}</span></h3>

                          <div className="buttons">
                            <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                              aria-hidden="true"></i> </button>
                            <button href="#" className="addtubul">Add to Bundle</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }): <NoDataFound />
                }

                {/* Pagination *********************** */}
              <div className="col-12">
              <ReactPaginate
                  breakLabel="..."
                  className="pagination"
                  nextLabel={<i className="fa fa-angle-right" aria-hidden="true"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={totalPages}
                  previousLabel={<i className="fa fa-angle-left" aria-hidden="true"></i>}
                  renderOnZeroPageCount={null}
                />
              </div>


         
            </div>
          </div>
          {/* Projects************************ */}
        </div>
      </div>
    </section>

  )
}
