import Layout from "../../components/layout"
import SubscriptionPlansListTemplates from "../../templates/subscription-plans"
import { packageList } from "../../utils/api-Request"

const SubscriptionPlans = ({ subsciptionList }) => {
    return (
        <Layout>
            <SubscriptionPlansListTemplates subsciptionList={subsciptionList} />
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
        const subscriptionPlansResponse = await packageList()
        return { props: { subsciptionList: subscriptionPlansResponse?.data?.data || null } }
    } catch (error) {
        console.log(error, 'subsciptionListErr')
        return { props: { subsciptionList: null } }

    }
}


export default SubscriptionPlans