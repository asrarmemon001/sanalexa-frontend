import Link from "next/link";

function CategoryItem({ classes, image, link, title }) {
    return (
        <div className={classes}>
            <div className="indastry" data-aos="fade-right">
                <div className="indastry-img">
                    <img src={image} />
                </div>
                <div className="indastry-content">
                    <h4>{title}</h4>
                    <Link href={link}>
                        <a>Read more</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default function CategoriesSection() {
    return (
        <section className="farmertical">
            <div className="container">
                <div className="main-farmertycal">
                    <div className="row">
                        <CategoryItem classes="col-lg-4 col-md-6" link="#" image="/static/images/farmulty.png" title="Pharmaceutical"/>
                        <CategoryItem classes="col-lg-4 col-md-6" link="#" image="/static/images/car.png" title="Automotive"/>
                        <CategoryItem classes="col-lg-4 col-md-6" link="#" image="/static/images/factory.png" title="Oil and Gas"/>
                        <CategoryItem classes="col-lg-4 col-md-6" link="#" image="/static/images/paint.png" title="Paint"/>
                        <CategoryItem classes="col-lg-4 col-md-6" link="#" image="/static/images/seting.png" title="Automotion"/>
                        <CategoryItem classes="col-lg-4 col-md-6" link="#" image="/static/images/customer.png" title="Contraction"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
