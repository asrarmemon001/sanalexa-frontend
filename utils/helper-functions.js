import { getFavList } from "./api-Request"

export const generateSessionId = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 14; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


export const checkJson = (json) => {
    if (typeof json == "string") {
        return JSON.parse(json)
    } else {
        return json
    }
}


export const packagesfavList = async() => {
    const favData = await getFavList()
    const response = favData?.data?.data || [];
    if (response?.length) {
        const data = response.filter((el => el?.itemType === "package"))
        return data
    } else {
        const data = []
        return data
    }
}

export const isPackagesWishListed = (id, favProjects) => {
    const alreadyWishlisted = favProjects?.some(el => el?.package?.id == id)
    return alreadyWishlisted
}
