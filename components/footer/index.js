import Link from "next/link"

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="mainfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="massage-box">
                                    <img src="/static/images/massage.png" />
                                    <h5>HAVE QUESTIONS? </h5>
                                    <Link href="#">
                                        <a>Visit Our FAQs</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="massage-box">
                                    <img src="/static/images/email.png" />
                                    <h5>EMAIL </h5>
                                    <Link href="test@gmail.com">
                                        <a>test@gmail.com</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="massage-box">
                                    <img src="/static/images/massage.png" />
                                    <h5>PHONE </h5>
                                    <Link href="tel 123 456 7890">
                                        <a>Connect Now</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <ul className="socail-media">
                                    <li><Link href="#"><a><i className="fa fa-facebook" aria-hidden="true"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="fa fa-twitter" aria-hidden="true"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="fa fa-instagram" aria-hidden="true"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="fa fa-youtube-play" aria-hidden="true"></i></a></Link></li>
                                </ul>
                                <ul className="footer-menu">
                                    <li><Link href="#"><a>MY STORY  </a></Link></li>
                                    <li><Link href="#"><a> PROGRAMS </a></Link></li>
                                    <li><Link href="#"><a> EVENTS </a></Link></li>
                                    <li><Link href="#"><a> STORE BLOG </a></Link></li>
                                    <li><Link href="#"><a> CONTACT</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="copy-right">
                            <p>© 2021 Andrew Cooper International, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer