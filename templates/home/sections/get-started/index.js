import Link from "next/link";
import Image from 'next/image'
import { useContext, useEffect, useState } from "react";
import { plateformList } from "../../../../utils/plateform";
import { ImageBaseUrl } from "../../../../utils/Baseurl";
import {
  projectList,
  sectorList,
  cartList,
  AddtoCart,
  removeItemBundleList,
} from "../../../../utils/api-Request";
import { Loader } from "../../../../components/Loader/Loader";
import { NoDataFound } from "../../../../components/NoDataFound/NoDataFound";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import ProjectCard from "../../../../components/projectCard/ProjectCard";
import AppContext from "../../../../appContext";
import { getSession } from "../../../../utils/constants";
import Paymentgateway from "../../../../components/paymentgateway/Paymentgateway";

export default function GetStarted() {
  const setCounter = useContext(AppContext);
  let { setCartProduct, state,fetchBundleList} = setCounter;
  let bundleProducts = state.bundleProduct;
  const [plateformFilterShow, setPlateformFilterShow] = useState(false);
  const [bundleList, setBundleList] = useState([]);
  const [industryFilterShow, setIndustryFilterShow] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [loadingIs, setLoading] = useState(false);
  const [projectListIs, setProjectList] = useState([]);
  const [plateform, setplateform] = useState([]);
  const [sector, setSector] = useState([]);
  const [sectorListIs, setSectorList] = useState([]);
  const [cartListIs, setCartList] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [apicall, setapicall] = useState(false);

  const handleOnChange = (event) => {
    setPage(1);
    setSearch(event.target.value);
  };

  const getPlateform = (event) => {
    const { value, checked } = event.target;
    let data = plateform;
    if (checked) {
      data.push(value);
    } else {
      data = data.filter((el) => el != value);
    }
    setplateform(data);
    getProjectList();
  };

  const getSectors = (event) => {
    const { value, checked } = event.target;
    let data = sector;
    if (checked) {
      data.push(value);
    } else {
      data = data.filter((el) => el != value);
    }
    setSector(data);
    getProjectList();
  };

  const handleFilterChange = (event, status) => {
    if (status === "plateform") {
      getPlateform(event);
    } else if (status === "sector") {
      getSectors(event);
    }
  };

  const handlePageClick = (data) => {
    setPage(data?.selected + 1);
  };

  // const handleAddtoCart = async (id, type, quantity) => {
  //   const data = {
  //     sessionId: sessionId,
  //     cart: { id: String(id), type: "project", quantity: 1 },
  //   };
  //   await AddtoCart(data)
  //     .then((res) =>
  //       res?.status === 200
  //         ? toast.success("successfully Added")
  //         : toast.error("somethingwent wrong")
  //     )
  //     .catch((error) => console.log(error));
  //   getCartList();
  //   setCartProduct(cartListIs);
  // };
  const handleRemove = async (id, type) => {
    try {
      const data = {
        sessionId: getSession(),
        id: id,
        type,
      };
      const res = await removeItemBundleList(data)
      if (res.status == 200) {
        toast.success("successfully Removed")
        fetchBundleList()
      }

    } catch (error) {
      toast.error("something went wrong")
      console.log(error, 'handleRemove bundle')
    }
  };

  const togglePlateformFilter = () => {
    setPlateformFilterShow(!plateformFilterShow);
  };

  const toggleIndustryFilter = () => {
    setIndustryFilterShow(!industryFilterShow);
  };

  const getSectorList = async () => {
    const list = await sectorList();
    const response = list?.data?.data;
    if (response) {
      setSectorList(response);
    }
  };
  // console.log(cartListIs);
  const getProjectList = async () => {
    const data = { page, limit, search, plateform, sector };
    setLoading(true);
    const list = await projectList(data);
    const response = list?.data?.data;
    if (response) {
      setLoading(false);
      setTotalPages(list?.data?.totalPages);
      setProjectList(response);
    }
  };

  // const getCartList = async () => {
  //   setLoading(true);
  //   const list = await cartList(sessionId);
  //   const response = list?.data?.data;
  //   console.log(response);
  //   if (response) {
  //     setLoading(false);
  //     setCartList(response);
  //   }
  // };

  useEffect(() => {
    getProjectList();
  }, [page, search, plateform, sector]);
  useEffect(() => {}, []);

  useEffect(() => {
    const key = localStorage.getItem("sessionId");
    setSessionId(key);
    getSectorList();
  }, []);

  // useEffect(() => {
  //   setCartProduct(cartListIs);
  // }, [cartListIs]);

  // useEffect(() => {
  //   getCartList();
  // }, [sessionId]);
  
  let defaultCardNumber = bundleProducts?.length ? 4-bundleProducts?.length : 4

  return (
    <section className="couressto">
      <div className="container">
        <div className="title">
          <h3>COURSES TO GET YOU STARTED </h3>
          <h6> Find the exact right 3D content for your needs Lorem Ipsum is simply dummy text of the printing</h6>
        </div>
        <div className="mb-4 mobwrep h-100 d-flex">
          <div className="d-flex col-md-9 pl-0 col-sm-12 vercel img-no"> 
            {
              bundleProducts?.slice(0,4)?.map((i, key)=>(
                <div className="d-flex flex-column   vercel" key={key}>
                <Image src={`${ImageBaseUrl}${i.productInfo.bannerImage}`} height="180px" width="180px"/>
                <button  onClick={()=>{handleRemove(i.productInfo.id,i.type)}}>x</button>
                  </div>
              ))
            }
            {[...Array(defaultCardNumber)]?.map((i) => (
              <>
              <Image src="/vercel.svg" height="180px" width="180px"/>
              </>

            ))}
             
           
          </div>
          <div className="col-md-3 col-sm-12 text-right pr-0 paddi">
            <div className="flexclas">
            <div className="dolarret">
            ₹ {state?.bundleTotal}
          </div>
            <Paymentgateway 
            className="bg-danger text-white control__content" 
            style={{width:"100px"}} 
            disabled={bundleProducts?.length > 2 && bundleProducts?.length < 5 ? false : true}
            cartListIs={bundleProducts} cartTotal={state?.bundleTotal} type={'bundle'}
            />
                    </div>
                    </div>
        </div>
        <div></div>
      
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
                          <i className="fa fa-desktop" aria-hidden="true"></i>{" "}
                          <span className="platform">Platform</span>
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="filterbut">
                          {plateformList?.map((obj, index) => {
                            return (
                              <label
                                className="control"
                                htmlFor={obj?.id}
                                key={index}
                              >
                                <input
                                  type="checkbox"
                                  checked={plateform?.includes(obj.id)}
                                  name={obj?.name}
                                  value={obj?.id}
                                  id={obj?.id}
                                  onChange={(e) =>
                                    handleFilterChange(e, "plateform")
                                  }
                                />
                                <span
                                  className={
                                    plateform?.includes(obj.id)
                                      ? "bg-danger text-white control__content"
                                      : "control__content"
                                  }
                                >
                                  {obj?.name}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </li>

                      <li className={industryFilterShow ? "current" : ""}>
                        <div className="plus" onClick={toggleIndustryFilter}>
                          <i className="fa fa-industry" aria-hidden="true"></i>{" "}
                          <span className="platform">Industrie specific</span>{" "}
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="filterbut">
                          {sectorListIs?.map((obj, index) => {
                            return (
                              <label
                                className="control"
                                htmlFor={obj?.id}
                                key={index}
                              >
                                <input
                                  type="checkbox"
                                  name={obj?.name}
                                  checked={sector?.includes(obj.id.toString())}
                                  value={obj?.id}
                                  id={obj?.id}
                                  onChange={(e) =>
                                    handleFilterChange(e, "sector")
                                  }
                                />
                                <span
                                  className={
                                    sector?.includes(obj.id.toString())
                                      ? "bg-danger text-white control__content"
                                      : "control__content"
                                  }
                                >
                                  {obj?.name}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </li>

                      <li>
                        <a href="#" className="show-more">
                          Show more
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="fillter-serche"></div>
            </div>
          </div>

          {/* Projects************************ */}

          <div className="col-lg-9 col-md-8">
            <div className="search-container" data-aos="fade-up">
              <div className="search-container-out">
                {/* <i className="fa fa-search" aria-hidden="true"></i> */}
               <input
                type="text"
                placeholder=" Search Keywords"
                name="search"
                value={search}
                onChange={handleOnChange}
              />
              <button className="searchbut">SEARCH</button>
              </div>
              <div className="girditem">
                <a href="#" className="girdfilter active"><i className="fa fa-th" aria-hidden="true"></i></a>
                <a href="#" className="viewfilter"><i className="fa fa-bars" aria-hidden="true"></i></a>
            </div>
            </div>

            <div className="row mb-4 girdsestem">
              {loadingIs ? (
                <Loader />
              ) : projectListIs?.length > 0 ? (
                projectListIs.map((obj, index) => {
                  return (
                    <ProjectCard
                      obj={obj}
                      key={index}
                      classes=" col-lg-4 col-md-6 mb-4"
                    />
                  );
                })
              ) : (
                <NoDataFound />
              )}

              {/* Pagination *********************** */}
              <div className="col-12">
                <ReactPaginate
                  breakLabel="..."
                  className="pagination"
                  nextLabel={
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  }
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={totalPages}
                  previousLabel={
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                  }
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
          {/* Projects************************ */}
        </div>
      </div>
    </section>
  );
}
