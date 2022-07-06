import { getApi, postApi, getApiWithoutToken, postApiWithoutToken, deleteApi } from "./api-interface";

export const projectList = (data) => {
   return postApi(`/api/projects/web/list`, data)
}

export const cartList = async (data) => {
   return await getApiWithoutToken(`/api/cart/list?sessionId=${data}`)
}
export const getUserBundlesList = async (data) => {
   return await getApiWithoutToken(`/api/bundle/list?sessionId=${data}`)

}

export const RemoveCartItem = async (data) => {
   return await postApiWithoutToken(`/api/cart/remove-cart`, data)
}

export const RemoveBundleList = async (data) => {
   return await postApiWithoutToken(`/api/bundle/remove-bundle`, data)

}

export const projectListFeatured = (data) => {
   return getApi(`/api/projects/web/featured-list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
}

export const packageList = (data) => {
   return getApi(`/api/packages/web/list`)
}

export const sectorList = () => {
   return getApiWithoutToken(`/api/sectors/web/list`)
}


export const loginUser = (data) => {
   return postApiWithoutToken(`/api/webUser/login`, data)
}

export const AddtoCart = async (data) => {
   return await postApiWithoutToken(`/api/cart/add-to-cart`, data)
}

export const registerUser = (data) => {
   return postApiWithoutToken(`/api/webUser/register`, data)
}

export const getUser = (data) => {
   return getApi(`/api/users/getuser`)
}

export const getProjectDetailsById = (id) => {
   return getApi(`/api/projects/projectDetailsById?id=${id}`)
}

export const paymentApi = (data) => {
   return postApi(`/api/payment/checkout-payment`, data)
}

export const getDefaultBundlesList = async (data) => {
   return await getApiWithoutToken(`/api/bundle/default-list`)

}


export const removeItemBundleList = async (data) => {
   return await postApiWithoutToken(`/api/bundle/remove-bundle`, data)

}

export const addtoBundleApi = async (data) => {
   return await postApiWithoutToken(`/api/bundle/add-to-bundle`, data)

}

export const verifyOTPApi = async (data) => {
   return await postApiWithoutToken(`/api/webUser/otp-verify`, data)

}

export const resendOtp = async (data) => {
   return await postApiWithoutToken(`/api/webUser/resend-otp`, data)
}

export const getPackageDetailByIdApi = (id) => {
   return getApiWithoutToken(`/api/packages/web/detailsById?id=${id}`)
}

export const directPayemntAndCheckoutBundleApi = (data) => {
   return postApi(`/api/payment/direct-checkout-payment-bundle`, data)
}
export const getProjectList = async () => {
   return await getApi(`/api/projects/list?page=1&limit=1000000`)
}
export const getProjectAndPackage = async () => {
   return await getApi(`/api/projects/list-plans`)
}

export const getProjectPercentageApi = async () => {
   return await getApi(`/api/precentage/list`)
}

export const getFavList = async() => {
   return await getApi(`/api/favourite/list`)
}

export const addToFav = async(data) => {
   return await postApi(`/api/favourite/add-to-fav`, data)
}

export const removeToFav = async(data) => {
   return await deleteApi(`/api/favourite/remove-to-fav?itemId=${data?.itemId}&itemType=${data?.itemType}`)
}

export const getdiscount = async() => {
   return await getApi(`/api/bundle/settings`)
}