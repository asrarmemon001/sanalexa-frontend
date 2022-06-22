import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../appContext";
import { ImageBaseUrl } from "../../../utils/Baseurl"
import Slider from "react-slick";
function CategoryItem({ classes, image, link, title }) {
    return (
        <div className={classes} style={{borderRight:'2px solid #f7ad18'}}>
            <div className="indastry">
                <div className="indastry-img">
                    <img src={image} />
                </div>
                <div className="indastry-content">
                    <h4><Link href={link}>{title}</Link></h4>
                    <h5><Link href={link}> industry </Link></h5>
                </div>
            </div>
        </div>
    )
}


export default function CategoriesSection() {

    const appContext = useContext(AppContext);
    const {
        sectors,
    } = appContext.state;

    if (!sectors?.length) {
        return null
    }
    const [sliderSectors, setSliderSectors] = useState([])

    useEffect(() => {
        const r = sectors?.filter(el => el?.projects?.length == 1);
        if (r.length && r.length < 4) {
            const arr = [...r, ...r, ...r, ...r];
            const arn = arr.slice(0, 5)
            setSliderSectors([...arn])
        } else {
            setSliderSectors(r)
        }
    }, [sectors])

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button type="button" onClick={onClick} role="presentation" className="slider-button owl-next"><span aria-label="Next">›</span></button>
        );
    }


    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button type="button" role="presentation" onClick={onClick} className="slider-button owl-prev"><span aria-label="Previous">‹</span></button>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className="farmertical">
            <div className="container-fuild">
                <div className="main-farmertycal">
                    {/* <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/farmulty.png" title="Pharmaceutical"/>
                     
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/car.png" title="Automotive"/>
                       
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/factory.png" title="Oil and Gas"/>
                       
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/paint.png" title="Paint"/>
                    
                       
                     <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/seting.png" title="Automotion"/>
                   
                    
                     <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/customer.png" title="Contraction"/> */}
                    <Slider {...settings} className="coursesSliders">
                        {sliderSectors.map((el) => {
                            return el.projects?.length ? (
                                <div>
                                    <CategoryItem classes="listitem-farmertycal" link="#" image={el.bannerImage ? (ImageBaseUrl + el.bannerImage) : "/static/images/placeholder.jpg"} title={el.name} />
                                </div>
                            ) : null;
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
