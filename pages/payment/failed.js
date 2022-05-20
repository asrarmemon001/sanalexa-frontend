import Link from "next/link";
import Layout from "../../components/layout"; 


export default function PaymentFailed() {
    return (
        <Layout>
            <div className="row">
                <div className="col-12 text-center" style={{minHeight:200}}> 
                    <p className="text-center text-danger p-5">Sorry, Payment Failed.</p>
                    <Link href="/"><a className="btn btn-link text-primary">Go to Home</a></Link>
                </div>
            </div>
        </Layout>
    )
}
