import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [activeSearch, setActiveSearch] = useState(false)

    const toggleSearchShow = () => {
        setActiveSearch(!activeSearch)
    }
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
                                            <span className="cart-nub">0</span>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/">
                                        <a className="sinup">Sing up</a>
                                    </Link>
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
        </header>

    )
}
export default Header