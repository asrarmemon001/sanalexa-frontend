import Link from "next/link";
import { useState } from "react";


export default function GetStarted() {

  const [plateformFilterShow, setPlateformFilterShow] = useState(false)
  const [industryFilterShow, setIndustryFilterShow] = useState(false)

  const togglePlateformFilter = () => {
    setPlateformFilterShow(!plateformFilterShow)
  }

  const toggleIndustryFilter = () => {
    setIndustryFilterShow(!industryFilterShow)
  }
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
                          <label className="control" for="Virtul">
                            <input type="checkbox" name="topics" id="Virtul" />
                            <span className="control__content">
                              Virtul Reality (VR)
                            </span>
                          </label>

                          <label className="control" for="destop">
                            <input type="checkbox" name="topics" id="destop" />
                            <span className="control__content">
                              Destop
                            </span>
                          </label>
                          <label className="control" name="WebGL">
                            <input type="checkbox" name="topics" id="WebGL" />
                            <span className="control__content">

                              WebGL
                            </span>
                          </label>
                          <label className="control" name="mobile">
                            <input type="checkbox" name="topics" id="mobile" />
                            <span className="control__content">
                              Mobile
                            </span>
                          </label>

                        </div>

                      </li>

                      <li className={industryFilterShow ? "current" : ""}>
                        <div className="plus" onClick={toggleIndustryFilter}><i className="fa fa-industry" aria-hidden="true"></i> <span className="platform">Industrie
                          specific</span> <i className="fa fa-angle-down" aria-hidden="true"></i></div>
                        <div className="filterbut">
                          <label className="control" for="Automobile">
                            <input type="checkbox" name="topics" id="Automobile" />
                            <span className="control__content">
                              Automobile
                            </span>
                          </label>

                          <label className="control" for="Automation">
                            <input type="checkbox" name="topics" id="Automation" />
                            <span className="control__content">
                              Automation
                            </span>
                          </label>
                          <label className="control" name="Pharmaceutical">
                            <input type="checkbox" name="topics" id="Pharmaceutical" />
                            <span className="control__content">

                              Pharmaceutical
                            </span>
                          </label>
                          <label className="control" name="mobile">
                            <input type="checkbox" name="topics" id="mobile" />
                            <span className="control__content">
                              Oil and Gas
                            </span>
                          </label>
                          <label className="control" name="gas">
                            <input type="checkbox" name="topics" id="gas" />
                            <span className="control__content">
                              Manufacturing
                            </span>
                          </label>
                          <label className="control" name="Safety">
                            <input type="checkbox" name="topics" id="Safety" />
                            <span className="control__content">
                              Safety
                            </span>
                          </label>
                          <label className="control" name="Maintenance">
                            <input type="checkbox" name="topics" id="Maintenance" />
                            <span className="control__content">
                              Maintenance
                            </span>
                          </label>

                          <label className="control" name="Contraction">
                            <input type="checkbox" name="topics" id="Contraction" />
                            <span className="control__content">
                              Contraction
                            </span>
                          </label>
                          <label className="control" name="Paint">
                            <input type="checkbox" name="topics" id="Paint" />
                            <span className="control__content">
                              Paint
                            </span>
                          </label>
                          <label className="control" name="Contraction">
                            <input type="checkbox" name="topics" id="Contraction" />
                            <span className="control__content">
                              Contraction </span>
                          </label>
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


          <div className="col-lg-9 col-md-8">

            <div className="search-container" data-aos="fade-up">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder=" Search Keywords" name="search" />

            </div>



            <div className="row mb-4">
              <div className=" col-lg-4 col-md-6 mb-4">
                <div className="pharmaceutical-box" data-aos="fade-right">
                  <figure>
                    <img src="/static/images/course.png" />
                    <h5 className="Pharmacepo">Pharmaceutical</h5>
                  </figure>
                  <div className="pharmaceutical-contant">
                    <h4>Good Manufacturing Practices(Gmp)</h4>
                    <h3><span>$24.99</span></h3>

                    <div className="buttons">
                      <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                        aria-hidden="true"></i> </button>
                      <button href="#" className="addtubul">Add to Bundle</button>
                    </div>
                  </div>
                </div>
              </div>



              <div className=" col-lg-4 col-md-6 mb-4">
                <div className="pharmaceutical-box" data-aos="fade-up">
                  <figure>
                    <img src="/static/images/course.png" />
                    <h5 className="Pharmacepo">Pharmaceutical</h5>
                  </figure>
                  <div className="pharmaceutical-contant">
                    <h4>Good Manufacturing Practices(Gmp)</h4>
                    <h3><span>$24.99</span></h3>

                    <div className="buttons">
                      <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                        aria-hidden="true"></i> </button>
                      <button href="#" className="addtubul">Add to Bundle</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className=" col-lg-4 col-md-6 mb-4">
                <div className="pharmaceutical-box" data-aos="fade-left">
                  <figure>
                    <img src="/static/images/course.png" />
                    <h5 className="Pharmacepo">Pharmaceutical</h5>
                  </figure>
                  <div className="pharmaceutical-contant">
                    <h4>Good Manufacturing Practices(Gmp)</h4>
                    <h3><span>$24.99</span></h3>

                    <div className="buttons">
                      <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                        aria-hidden="true"></i> </button>
                      <button href="#" className="addtubul">Add to Bundle</button>
                    </div>
                  </div>
                </div>
              </div>




              <div className=" col-lg-4 col-md-6 mb-4">
                <div className="pharmaceutical-box" data-aos="fade-right">
                  <figure>
                    <img src="/static/images/course.png" />
                    <h5 className="Pharmacepo">Pharmaceutical</h5>
                  </figure>
                  <div className="pharmaceutical-contant">
                    <h4>Good Manufacturing Practices(Gmp)</h4>
                    <h3><span>$24.99</span></h3>

                    <div className="buttons">
                      <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                        aria-hidden="true"></i> </button>
                      <button href="#" className="addtubul">Add to Bundle</button>
                    </div>
                  </div>
                </div>
              </div>



              <div className=" col-lg-4 col-md-6 mb-4">
                <div className="pharmaceutical-box" data-aos="fade-up">
                  <figure>
                    <img src="/static/images/course.png" />
                    <h5 className="Pharmacepo">Pharmaceutical</h5>
                  </figure>
                  <div className="pharmaceutical-contant">
                    <h4>Good Manufacturing Practices(Gmp)</h4>
                    <h3><span>$24.99</span></h3>

                    <div className="buttons">
                      <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                        aria-hidden="true"></i> </button>
                      <button href="#" className="addtubul">Add to Bundle</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className=" col-lg-4 col-md-6 mb-4">
                <div className="pharmaceutical-box" data-aos="fade-left">
                  <figure>
                    <img src="/static/images/course.png" />
                    <h5 className="Pharmacepo">Pharmaceutical</h5>
                  </figure>
                  <div className="pharmaceutical-contant">
                    <h4>Good Manufacturing Practices(Gmp)</h4>
                    <h3><span>$24.99</span></h3>

                    <div className="buttons">
                      <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> <i className="fa fa-shopping-cart"
                        aria-hidden="true"></i> </button>
                      <button href="#" className="addtubul">Add to Bundle</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <Link href="#"><a><i className="fa fa-angle-left" aria-hidden="true"></i></a></Link>
                <Link href="#"><a>1</a></Link>
                <Link href="#"><a className="active">2</a></Link>
                <Link href="#"><a>3</a></Link>
                <Link href="#"><a>4</a></Link>
                <Link href="#"><a>5</a></Link>
                <Link href="#"><a>6</a></Link>
                <Link href="#"><a><i className="fa fa-angle-right" aria-hidden="true"></i></a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
