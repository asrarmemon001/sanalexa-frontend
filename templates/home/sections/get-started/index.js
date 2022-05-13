import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { plateformList } from "../../../../utils/plateform";
import { ImageBaseUrl } from "../../../../utils/Baseurl";
import {
  projectList,
  sectorList,
  cartList,
  AddtoCart,
  BundlesList,
  AddtoBundle,
} from "../../../../utils/api-Request";
import { Loader } from "../../../../components/Loader/Loader";
import { NoDataFound } from "../../../../components/NoDataFound/NoDataFound";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import ProjectCard from "../../../../components/projectCard/ProjectCard";
import AppContext from "../../../../appContext";

export default function GetStarted() {
  const setCounter = useContext(AppContext);
  let { setCartProductCount, setBundleCount } = setCounter;

  const [plateformFilterShow, setPlateformFilterShow] = useState(false);
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
  const [bundleListIs, setbundleList] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [apicall, setapicall] = useState(false);

  const handleOnChange = (event) => {
    setPage(1)
    setSearch(event.target.value);
  };

  useEffect(() => {
    const sessionkey = localStorage.getItem("sessionId");
    setSessionId(sessionkey);
  }, []);

  const getPlateform = (event) => {
    const { value, checked } = event.target;
    let data = plateform;
    if (checked) {
      data.push(value);
    } else {
      data.pop(value);
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
      data.pop(value);
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

  const handleAddtoCart = async (id, type, quantity) => {
    console.log(id, type, quantity);
    const data = {
      sessionId: localStorage.getItem("sessionId"),
      cart: { id: String(id), type: "project", quantity: 1 },
    };
    await AddtoCart(data)
      .then((res) =>
        res?.status === 200
          ? toast.success("successfully Added")
          : toast.error("somethingwent wrong")
      )
      .catch((error) => console.log(error));
    getCartList();
    setCartProductCount(cartListIs?.length);
  };

  const handleAddtoBundle = async (id, type, quantity) => {
    console.log(id, type, quantity);
    const data = {
      sessionId: localStorage.getItem("sessionId"),
      bundle: { id: String(id), type: "project", quantity: 1 },
    };
    await AddtoBundle(data)
      .then((res) =>
        res?.status === 200
          ? toast.success("successfully Added")
          : toast.error("somethingwent wrong")
      )
      .catch((error) => console.log(error));
    getBundleList();
    setBundleCount(bundleListIs?.length);
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

  const getCartList = async () => {
    setLoading(true);
    const list = await cartList(sessionId);
    const response = list?.data?.data;
    if (response) {
      setLoading(false);
      setCartList(response);
    }
  };

  const getBundleList = async () => {
    setLoading(true);
    const session = localStorage.getItem("sessionId")
    const list = await BundlesList(session);
    const response = list?.data?.data;
    if (response) {
      setLoading(false);
      setbundleList(response);
    }
  };

  useEffect(() => {
    getProjectList();
  }, [page, search, plateform, sector]);

  useEffect(() => {
    const key = localStorage.getItem("sessionId");
    setSessionId(key);
    getSectorList();
  }, []);

  useEffect(() => {
    setCartProductCount(cartListIs?.length);
  }, [cartListIs]);
  useEffect(() => {
    setBundleCount(bundleListIs?.length);
  }, [bundleListIs]);

  useEffect(() => {
    getCartList();
  }, [sessionId]);

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
                                for={obj?.id}
                                key={index}
                              >
                                <input
                                  type="checkbox"
                                  name={obj?.name}
                                  value={obj?.id}
                                  id={obj?.id}
                                  onChange={(e) =>
                                    handleFilterChange(e, "plateform")
                                  }
                                />
                                <span className="control__content">
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
                                for={obj?.id}
                                key={index}
                              >
                                <input
                                  type="checkbox"
                                  name={obj?.name}
                                  value={obj?.id}
                                  id={obj?.id}
                                  onChange={(e) =>
                                    handleFilterChange(e, "sector")
                                  }
                                />
                                <span className="control__content">
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
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                type="text"
                placeholder=" Search Keywords"
                name="search"
                value={search}
                onChange={handleOnChange}
              />
            </div>

            <div className="row mb-4">
              {loadingIs ? (
                <Loader />
              ) : projectListIs?.length > 0 ? (
                projectListIs.map((obj, index) => {
                  return (
                    <ProjectCard
                      obj={obj}
                      key={index}
                      ImageBaseUrl={ImageBaseUrl}
                      cartListIs={cartListIs}
                      handleAddtoCart={handleAddtoCart}
                      bundleListIs={bundleListIs}
                      handleAddtoBundle={handleAddtoBundle}
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
