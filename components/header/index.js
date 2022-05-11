import { CircularProgress } from "@mui/material"
import Link from "next/link"
import { useEffect, useState, useContext } from "react"
import { toast } from "react-toastify"
import Login from "../../templates/login"
import Signup from "../../templates/signup"
import { getUser } from "../../utils/api-Request"
import { getToken, removeToken } from "../../utils/constants"
import AppContext from "../../appContext/index"

const Header = () => {
    const {state} = useContext(AppContext)
    const [isLoggedin, setIsLoggedin] = useState(false)
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
            toast.error(error.response.data.message || error.response.statusText);
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
                                    <li className="dropdwon">
                                        <Link href="/">
                                            <a>Industries</a>
                                        </Link>
                                        {/* <ul className="sub-menu">
                                            <li><a href="#">About Us</a></li>           
                                            <li><a href="#">About Us</a></li>     
                                            <li><a href="#">About Us</a></li>     
                                            <li><a href="#">About Us</a></li>     
                                            <li><a href="#">About Us</a></li>      
                                        </ul> */}
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a> Plans Subscription</a>
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
                                    <Link href="/">
                                        <a className="cart">
                                            <span className="cart-nub">{state.cartProductCount}</span>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    {user.loading
                                        ?
                                        <CircularProgress />
                                        :
                                        user.data
                                            ?
                                            <button className="btn sinup" onClick={logout}>Logout</button>
                                            :
                                            <button className="btn sinup" onClick={() => handleModal('signup')}>Signup</button>}

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
                                <input type="search" className="search-field" placeholder="Search …" value="" name="s" />
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