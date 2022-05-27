import { getApi, postApi, getApiWithoutToken, postApiWithoutToken } from "./api-interface";

export const projectList = (data) => {
   return postApiWithoutToken(`/api/projects/web/list`, data)
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
   return getApiWithoutToken(`/api/projects/web/featured-list?limit=${data.limit}&page=${data.page}&search=${data.search}`)
}

export const packageList = (data) => {
   return getApiWithoutToken(`/api/packages/web/list`)
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
   return getApiWithoutToken(`/api/projects/projectDetailsById?id=${id}`)
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

export const addtoBundleApi = async(data) =>{
   return await postApiWithoutToken(`/api/bundle/add-to-bundle`, data)
  
}

export const verifyOTPApi = async(data) =>{
   return await postApiWithoutToken(`/api/webUser/otp-verify`, data)
  
}