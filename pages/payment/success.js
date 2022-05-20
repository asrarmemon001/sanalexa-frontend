import Link from "next/link";
import Layout from "../../components/layout";

 


export default function PaymentSuccess() {
    return (
        <Layout>
            <div className="row">
            <div className="col-12 text-center" style={{minHeight:200}}> 
                    <p className="text-center text-success p-5">Hurrey!, Payment Success.</p>
                    <Link href="/"><a className="btn btn-link text-primary">Go to Home</a></Link>
                </div>
            </div>
        </Layout>
    )
}
