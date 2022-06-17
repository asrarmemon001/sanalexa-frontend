import Link from "next/link"

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <div className="mainfooter">
                    <div className="container">
                        {/* <div className="row">
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
                                        <span>test@gmail.com</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="massage-box">
                                    <img src="/static/images/massage.png" />
                                    <h5>PHONE </h5>
                                    <Link href="tel 123 456 7890"> 
                                        <span>Connect Now</span>
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
                        </div> */}

                        <div className="copy-right">
                            <p>Simulanis Solutions Private Limited 2021. All Right Reserved.
                            <br /> Eduguildaccerated Company
                                </p>
                        </div>
                        <div className="pravesipolisi">
                            <ul>
                                <li><a href="#">Disclaimer.</a></li>
                                <li><a href="#">Privacy Policy.</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer