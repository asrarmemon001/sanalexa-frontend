import Link from "next/link";

function CategoryItem({ classes, image, link, title }) {
    return (
        <div className={classes}>
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
    return (
        <section className="farmertical">
            <div className="container">
                <div className="main-farmertycal">
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/farmulty.png" title="Pharmaceutical"/>
                     
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/car.png" title="Automotive"/>
                       
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/factory.png" title="Oil and Gas"/>
                       
                        <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/paint.png" title="Paint"/>
                    
                       
                     <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/seting.png" title="Automotion"/>
                   
                    
                     <CategoryItem classes="listitem-farmertycal" link="#" image="/static/images/customer.png" title="Contraction"/>
                  
                </div>
            </div>
        </section>
    )
}
