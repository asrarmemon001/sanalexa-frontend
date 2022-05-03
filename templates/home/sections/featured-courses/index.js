import Link from "next/link";
import Slider from "react-slick";
export default function FeaturedCourses() {
  function NextArrow(props) {
    const { onClick } = props;
    return ( 
      <button type="button"  onClick={onClick} role="presentation" className="slider-button owl-next"><span aria-label="Next">›</span></button>
    );
  }


  function PrevArrow(props) {
    const {  onClick } = props;
    return ( 
      <button type="button" role="presentation" onClick={onClick} className="slider-button owl-prev"><span aria-label="Previous">‹</span></button>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, 
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
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

  return (<section className="what-you-get courses">
    <div className="container">
      <div className="title" data-aos="fade-up">
        <h3>Featured Courses</h3>
      </div>
      <div className="rowCantainer">
        <Slider {...settings} className="coursesSlider owl-carousel">

          <div className="packageItem px-3">
            <div className="pharmaceutical-box">
              <figure>
                <img src="/static/images/course.png" />
                <h5 className="Pharmacepo">Pharmaceutical</h5>
              </figure>
              <div className="pharmaceutical-contant">
                <h4>Good Manufacturing Practices(Gmp)</h4>
                <h3><span>$24.88</span></h3>

                <div className="buttons">
                  <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> 
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> </button>
                  <button href="#" className="addtubul">Add to Bundle</button>
                </div>
              </div>
            </div>
          </div>
          <div className="packageItem px-3">
            <div className="pharmaceutical-box">
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

          <div className="packageItem px-3">
            <div className="pharmaceutical-box">
              <figure>
                <img src="/static/images/course.png" />
                <h5 className="Pharmacepo">Pharmaceutical</h5>
              </figure>
              <div className="pharmaceutical-contant">
                <h4>Good Manufacturing Practices(Gmp)</h4>
                <h3><span>$24.88</span></h3>

                <div className="buttons">
                  <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> 
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> </button>
                  <button href="#" className="addtubul">Add to Bundle</button>
                </div>
              </div>
            </div>
          </div>
          <div className="packageItem px-3">
            <div className="pharmaceutical-box">
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
          <div className="packageItem px-3">
            <div className="pharmaceutical-box">
              <figure>
                <img src="/static/images/course.png" />
                <h5 className="Pharmacepo">Pharmaceutical</h5>
              </figure>
              <div className="pharmaceutical-contant">
                <h4>Good Manufacturing Practices(Gmp)</h4>
                <h3><span>$24.88</span></h3>

                <div className="buttons">
                  <button className="carts"><i className="fa fa-plus" aria-hidden="true"></i> 
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> </button>
                  <button href="#" className="addtubul">Add to Bundle</button>
                </div>
              </div>
            </div>
          </div>
          <div className="packageItem px-3">
            <div className="pharmaceutical-box">
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

        </Slider>
      </div>


    </div>
  </section>

  )
}