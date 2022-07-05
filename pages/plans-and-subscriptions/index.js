import { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SubscriptionPlansListTemplates from "../../templates/subscription-plans"
import { packageList } from "../../utils/api-Request"
import { packagesfavList } from "../../utils/helper-functions"

const SubscriptionPlans = () => {
    const [subsciptionList, setSubsciptionList] = useState()
    

    const getPackages = async () => {
        const subscriptionPlansResponse = await packageList()
        if (subscriptionPlansResponse && subscriptionPlansResponse.data &&
            subscriptionPlansResponse.data.data) {
            setSubsciptionList(subscriptionPlansResponse.data.data)
        } else {
            setSubsciptionList([])
        }
    }

    useEffect(() => {
        getPackages();
    }, [])

    return (
        <Layout>
            {subsciptionList && <SubscriptionPlansListTemplates subsciptionList={subsciptionList}/>}
        </Layout>
    )
}

// export async function getServerSideProps() {
//     try {
//         const subscriptionPlansResponse = await packageList()       
//         return { props: { subsciptionList: subscriptionPlansResponse?.data?.data || null } }
//     } catch (error) { 
//         return { props: { subsciptionList: null } }

//     }
// }


export default SubscriptionPlans