import { useEffect, useState } from "react"
import Layout from "../../components/layout"
import ProductDetailsTemplate from "../../templates/product-details"
import { getProjectDetailsById } from "../../utils/api-Request"

const ProductDetails = ({ productId }) => {
    const [productDetails, setProductDetails] = useState();

    const getDetail = async (productId) => {
        const productDetailsResponse = await getProjectDetailsById(productId)
        if(productDetailsResponse && productDetailsResponse.data && productDetailsResponse.data.data) {
            setProductDetails(productDetailsResponse?.data?.data)
        } else {
            setProductDetails({})
        }
    }
    useEffect(()=> {
        getDetail(productId);
    }, [productId])
    return (
        <Layout>
            {productDetails && <ProductDetailsTemplate productDetails={productDetails} />}
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const { productId } = query;
    try {
        return { props: { productId: productId } }
    } catch (error) {
        console.log(error, 'productDetailsError')
        return { props: { productDetails: null } }

    }
}

// export async function getStaticPaths({productId}) {
//     return {
//       paths: [
//         { params: { productId } }
//       ],
//       fallback: true // false or 'blocking'
//     };
//   }

export default ProductDetails