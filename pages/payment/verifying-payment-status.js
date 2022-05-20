import { CircularProgress } from "@mui/material"; 
import Layout from "../../components/layout";


export default function VerifyingPaymentStatus() {
    return (
        <Layout>
            <div className="row">
            <div className="col-12 text-center p-4" style={{minHeight:300}}> 
                    <CircularProgress size={50} />
                    <p className="text-center mt-4">Waiting for payment response.</p>                    
                </div>
            </div>
        </Layout>
    )
}
