import Link from "next/link";
import Layout from "../../components/layout";

 


export default function PaymentSuccess() {
    return (
        <Layout>


<section className="product-Gallery innerbanner"> 
        <div className="banner-plans" style={{ backgroundImage: 'url(/static/images/learning.jpeg)' }}>
                <div className="container">
                    <div className="banner-content-ple"> 
                        <h3>Payment </h3>
                      
                    </div>
                </div>
            </div>
    </section>
<section className="PaymentHurrey">
<div className="container">
<div className="row">
            <div className="col-12 text-center" style={{minHeight:200}}> 
            <div className="HurreyPayment">
            <img src="/static/images/download.png" />
                    <h3 className="text-center text-success p-5">Hurrey!, Payment Success.</h3>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Link href="/"><a className="button-download-launcher">Go to Home</a></Link>
                </div>
                </div>
            </div>
            </div>


</section>

           
        </Layout>
    )
}
