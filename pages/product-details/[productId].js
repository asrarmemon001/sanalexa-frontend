import Layout from "../../components/layout"
import ProductDetailsTemplate from "../../templates/product-details"
import { getProjectDetailsById } from "../../utils/api-Request"

const ProductDetails = ({ productDetails }) => {
    return (
        <Layout>
            <ProductDetailsTemplate productDetails={productDetails} />
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const { productId } = query;
    try {
        const productDetailsResponse = await getProjectDetailsById(productId)
        return { props: { productDetails: productDetailsResponse?.data?.data || null } }
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