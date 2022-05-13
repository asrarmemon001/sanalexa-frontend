import axios from "axios";
import { apiBaseUrl } from "./Baseurl";

export const postApiWithoutToken = (path, data) => {
  return axios.post(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json"
    }
  })
};

export const putApiWithoutToken = (path, data) => {
  return axios.put(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json"
    }
  })
};

export const getApiWithoutToken = (path) => {
  return axios.get(apiBaseUrl + path, {
    headers: {
      "Content-Type": "application/json"
    }
  })
};

export const postApi = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.post(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
};

export const getApi = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.get(apiBaseUrl + path, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
};

export const putApi = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.put(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
};

export const fileUpload = (path, data) => {
  const token = localStorage.getItem("token");

  return axios.post(apiBaseUrl + path, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`
    }
  })
};

// export const deleteApi = (path:string, data?:any) => {
//   const token = localStorage.getItem("token");

//   return axios.delete(BaseUrl + path, data, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   });
// };
