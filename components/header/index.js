import { Button, CircularProgress, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { removeSession, removeToken, setSession } from "../../utils/constants";
import AppContext from "../../appContext/index";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Header = () => {
  const appContext = useContext(AppContext);
  const router = useRouter();
  const {
    user,
    sectors,
    bundleProduct,
    cartProduct,
    cartLoading,
    bundleLoading,
  } = appContext.state;
  const {
    loginSignupModal,
    setIsLoggedin,
    setUser,
    fetchCartList,
    fetchBundleList,
  } = appContext;
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [submenuShow, setSubmenuShow] = useState(-1);
  const [activeSearch, setActiveSearch] = useState(false);
  const [ searchIs, setSearchIs ] = useState('')

  const handleChange = (e) => {
    setSearchIs(e.target.value)
  }

  const handleSubmit = (e) => {
    if(searchIs){
      e.preventDefault()
      // const { searchIs } = router.query
      // router.push(`/search/${searchIs}`)
      router.push({
        pathname: '/search/[searchIs]',
        query: { searchIs },
      })
    }else{
      toast.error("Please enter some value")
    }
  }

  const logout = () => {
    setIsLoggedin(false);
    setUser({
      loading: false,
      data: null,
      status: 0,
      message: "",
    });
    removeToken();
    removeSession();
    setUserDropdown(false);
    setSession();
    fetchCartList();
    fetchBundleList();
  };

  const toggleSearchShow = () => {
    setActiveSearch(!activeSearch);
  };

  useEffect(() => {
    setIndustriesDropdown(false);
  }, [router.asPath]);

  return (
    <header>
      <div className="main-header"> 
          <div className="maneg-header">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/static/images/Simulanis-Logo-white.svg" />
                  <img src="/static/images/Simulanis-Logo.svg" />
                </a>
              </Link>
            </div>

            <div className="mideel-mene">
              <div className="ferty">
                <ul className="list-menu">
                 
                  <li>
                    <Link href="/about">
                      <a>About Us </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <Button
                      id="basic-button"
                      aria-controls={
                        Boolean(industriesDropdown) ? "basic-menu" : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        Boolean(industriesDropdown) ? "true" : undefined
                      }
                      onClick={(event) =>
                        setIndustriesDropdown(event.currentTarget)
                      }
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      Explore
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={industriesDropdown}
                      open={Boolean(industriesDropdown)}
                      onClose={() => setIndustriesDropdown(false)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {sectors ? (
                        sectors.map((el) => {
                          return el.projects?.length ? (
                            <div className="position-relative cu-2">
                              <MenuItem
                                key={el.id + "sector"}
                                onClick={() => {
                                  setSubmenuShow((state) =>
                                    state == el.id ? -1 : el.id
                                  );
                                }}
                                onMouseEnter={() => {
                                  setSubmenuShow((state) =>
                                    state == el.id ? -1 : el.id
                                  );
                                }}
                                className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1"
                              >
                                {el.name}
                              </MenuItem>
                              <div
                                className="bg-light"
                                onMouseLeave={() => {
                                  setSubmenuShow(-1);
                                }}
                                style={{
                                  position: "fixed",
                                  zIndex: 1,
                                  marginLeft: "120px",
                                  marginBottom: "100px",
                                  
                                }}
                              >
                                {el.projects.map((ell) => {
                                  return (
                                    submenuShow === el.id && (
                                      <Link
                                        key={ell.id + "proj"}
                                        href={`/product-details/${ell.id}`}
                                      >
                                        <a className="py-2 px-4 text-sm d-block font-weight-bold mb-1">
                                          {" "}
                                          {ell.projectTitle}
                                        </a>
                                      </Link>
                                    )
                                  );
                                })}
                              </div>
                            </div>
                          ) : null;
                        })
                      ) : (
                        <MenuItem className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1">
                          <i>No data found</i>
                        </MenuItem>
                      )}
                    </Menu>
                  </li>
                  <li>
                    <Link href="/plans-and-subscriptions">
                      <a> Plans and Subscriptions</a>
                    </Link>
                  </li>
                  <li className="position-relative">
                    <Link href="/bundles">
                      <a>
                        {" "}
                        Buy Bundle{" "}
                        <span className="badge badge-danger">
                          {bundleLoading ? (
                            <CircularProgress size={15} />
                          ) : (
                            `${bundleProduct?.length >= 3 ? 1 :  0}`
                          )}
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Contact Us </a>
                    </Link>
                  </li>
                  { user.data && <li>
                    <Link href="/my-learning">
                      <a> My Learning</a>
                    </Link>
                    </li>}
                </ul>
              </div>
              <ul className="varymenu">
                {/* <li>
                  <span className="sarchi link" onClick={toggleSearchShow}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </li> */}

                <li>
                  <Link href="/cart">
                    <a className="cart">
                      <span className="cart-nub">
                        {cartLoading ? (
                          <CircularProgress size={15} />
                        ) : (
                          `${cartProduct?.length || 0}`
                        )}
                      </span>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>
                
                <li>
                  {user.loading ? (
                    <CircularProgress size={30} />
                  ) : user.data ? (
                    <>
                      <Button
                        id="user-button"
                        aria-controls={
                          Boolean(userDropdown) ? "user-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          Boolean(userDropdown) ? "true" : undefined
                        }
                        onClick={(event) =>
                          setUserDropdown(event.currentTarget)
                        }
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {user.data?.data?.name}
                      </Button>
                      <Menu
                        id="user-menu"
                        anchorEl={userDropdown}
                        open={Boolean(userDropdown)}
                        onClose={() => setUserDropdown(false)}
                        MenuListProps={{
                          "aria-labelledby": "user-button",
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        {/* <MenuItem className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1" onClick={()=>router.push('/orders')}>
                                                        Orders
                                                    </MenuItem> */}
                        <MenuItem
                          className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1"
                          onClick={logout}
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <button
                      className="btn sinup"
                      onClick={() => loginSignupModal("login")}
                    >
                      <i className="fa fa-user-circle" aria-hidden="true"></i>

                    </button>
                  )}
                </li>
                <li>
                  <Link href="/">
                    <a className="humb">
                      <span className="mainhunm">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`search-form-main ${
              activeSearch ? "active-search" : ""
            }`}
          >
            <form
              role="search"
              method="get"
              className="search-form"
              action="sitename.com/"
            >
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search …"
                  name="s"
                  onChange={handleChange}
                />
              </label>
              <input type="submit" className="search-submit" value="Search" onClick={handleSubmit}/>
            </form>
          </div>
         
      </div>
    </header>
  );
};
export default Header;
