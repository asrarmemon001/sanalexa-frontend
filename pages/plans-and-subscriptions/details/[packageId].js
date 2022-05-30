import Layout from "../../../components/layout"
import SubscriptionPlanDetailsTemplates from "../../../templates/subscription-plans/details"
import { getPackageDetailByIdApi, packageList } from "../../../utils/api-Request"

const SubscriptionPlanDetails = ({ subsciptionDetails }) => {
    return (
        <Layout>
            <SubscriptionPlanDetailsTemplates subsciptionDetails={subsciptionDetails} />
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const { packageId } = query; 
    try {
        const subscriptionPlansResponse = await getPackageDetailByIdApi(packageId)
        return { props: { subsciptionDetails: subscriptionPlansResponse?.data?.data || null } }
    } catch (error) {
        return { props: { subsciptionDetails: null } }

    }
}


export default SubscriptionPlanDetails