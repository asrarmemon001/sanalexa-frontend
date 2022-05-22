import { Button, CircularProgress, Menu, MenuItem } from "@mui/material"
import Link from "next/link"
import { useEffect, useState, useContext } from "react"
import { toast } from "react-toastify"
import Login from "../../templates/login"
import Signup from "../../templates/signup"
import { getUser } from "../../utils/api-Request"
import { getToken, removeToken } from "../../utils/constants"
import AppContext from "../../appContext/index"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    const { state } = useContext(AppContext)
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [industriesDropdown, setIndustriesDropdown] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const [user, setUser] = useState({
        loading: false,
        data: null,
        status: 0,
        message: ""
    })
    const [activeSearch, setActiveSearch] = useState(false)
    const [modal, setModal] = useState(false)
    const logout = () => {
        setIsLoggedin(false)
        setUser({
            loading: false,
            data: null,
            status: 0,
            message: ""
        })
        removeToken()

    }
    const handleModal = (action) => {
        setModal(action)
    }
    const toggleSearchShow = () => {
        setActiveSearch(!activeSearch)
    }

    const fetchUserDetails = async () => {
        try {
            setUser((v) => ({
                ...v,
                loading: true
            }))
            const res = await getUser()
            if (res.status == 200) {
                setUser((v) => ({
                    ...v,
                    loading: false,
                    data: res.data
                }))
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.response.statusText);
            setUser((v) => ({
                ...v,
                loading: false
            }))
        }
    }

    useEffect(() => {
        if (isLoggedin && !user?.data) {

            fetchUserDetails()
        }
    }, [isLoggedin])

    useEffect(() => {
        setIsLoggedin(Boolean(getToken()))
    }, [])

    return (
        <header>
            <div className="main-header">
                <div className="container">
                    <div className="maneg-header">
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    <img src="/static/images/logo.png" />
                                </a>
                            </Link>
                        </div>

                        <div className="mideel-mene">
                            <div className="ferty">
                                <ul className="list-menu">
                                    <li>
                                        <Link href="/">
                                            <a>Home </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a>About Us </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                        <Button
                                            id="basic-button"
                                            aria-controls={Boolean(industriesDropdown) ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={Boolean(industriesDropdown) ? 'true' : undefined}
                                            onClick={(event) => setIndustriesDropdown(event.currentTarget)}
                                            endIcon={<KeyboardArrowDownIcon />}
                                        >
                                            Industries
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={industriesDropdown}
                                            open={Boolean(industriesDropdown)}
                                            onClose={() => setIndustriesDropdown(false)}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            {state.sectors
                                                ?
                                                state.sectors.map((el) => {
                                                    return (<MenuItem key={el.id + 'sector'} className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1">
                                                        {el.name}
                                                    </MenuItem>)
                                                })
                                                :
                                                <MenuItem className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1">
                                                    <i>No data found</i>
                                                </MenuItem>}

                                        </Menu>
                                    </li>
                                    <li>
                                        <Link href="/plans-and-subscriptions">
                                            <a> Plans and Subscriptions</a>
                                        </Link>
                                    </li>
                                    <li className="position-relative">
                                        <Link href="/bundles">
                                       
                                            <a> Create Bundle <span className="badge badge-danger">{state.bundleProduct?.length || 0}</span></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="varymenu">
                                <li>
                                    <span className="sarchi link" onClick={toggleSearchShow}>
                                        <i className="fa fa-search" aria-hidden="true">
                                        </i>
                                    </span>
                                </li>

                                <li>
                                    <Link href="/cart">
                                        <a className="cart">
                                            <span className="cart-nub">{state.cartProduct?.length || 0}</span>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </li>


                                <li>
                                    {user.loading
                                        ?
                                        <CircularProgress size={30}/>
                                        :
                                        user.data
                                            ?
                                            <>
                                                <Button
                                                    id="user-button"
                                                    aria-controls={Boolean(userDropdown) ? 'user-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={Boolean(userDropdown) ? 'true' : undefined}
                                                    onClick={(event) => setUserDropdown(event.currentTarget)}
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
                                                        'aria-labelledby': 'user-button',
                                                    }}
                                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            
                                                >
                                                    <MenuItem className="py-2 px-4 text-sm font-weight-bold dropdown-item mb-1" onClick={logout}>
                                                        Logout
                                                    </MenuItem>
                                                </Menu>
                                            </>
                                            :
                                            <button className="btn sinup" onClick={() => handleModal('signup')}>Sign Up</button>}

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

                    <div className={`search-form-main ${activeSearch ? 'active-search' : ""}`}>
                        <form role="search" method="get" className="search-form" action="sitename.com/">
                            <label>
                                <input type="search" className="search-field" placeholder="Search …"  name="s" />
                            </label>
                            <input type="submit" className="search-submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>
            <Signup show={modal == "signup"} handleModal={handleModal} setIsLoggedin={setIsLoggedin} />
            <Login show={modal == "login"} handleModal={handleModal} setIsLoggedin={setIsLoggedin} />
        </header>

    )
}
export default Header