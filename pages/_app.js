import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from "../appContext/index"
import '../styles/globals.css'
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react'
import { cartList, getUser, getUserBundlesList } from "../utils/api-Request";
import useFetchSectordetails from "../hooks/getSectorList";
import { getSession, getToken, setSession } from "../utils/constants";
import Signup from "../templates/signup";
import Login from "../templates/login";
import OTPVerification from "../templates/otp-verification";
import PlayType from "../templates/game/play"

function MyApp({ Component, pageProps }) {
  const [cartProduct, setCartProduct] = useState(null)
  const [cartLoading, setCartLoading] = useState(false)
  const [bundleLoading, setBundleLoading] = useState(false)
  const [bundleProduct, setBundleProduct] = useState(null)
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalPayload, setModalPayload] = useState("")
  const [user, setUser] = useState({
    loading: false,
    data: null,
    status: 0,
    message: ""
  })
  const [sectors, setSectors] = useState(null)
  const [cartTotal, setCartTotal] = useState(0)
  const [bundleTotal, setBundleTotal] = useState(0)
  useFetchSectordetails(setSectors)
  const fetchCartList = async () => {
    try {
      setCartLoading(true)
      const list = await cartList(getSession());
      setCartProduct(list?.data?.data || null);
      setCartTotal(list?.data?.cartTotal || 0)
      setCartLoading(false)
    } catch (error) {
      setCartLoading(false)
      toast.error("Something went wrong")
    }

  };
  const handleModal = (action, payload) => {
    setModal(action)
    setModalPayload(payload)
  }
  const fetchBundleList = async () => {
    try {
      setBundleLoading(true)
      const list = await getUserBundlesList(getSession());
      setBundleProduct(list?.data?.data || null);
      setBundleTotal(list?.data?.bundleTotal || 0)
      setBundleLoading(false)
    } catch (error) {
      setBundleLoading(false)
      toast.error("Something went wrong")
    }
  };

  useEffect(() => {
    if (!Boolean(getSession())) {
      setSession()
    }
    fetchCartList()
    fetchBundleList()
  }, []) 


  const fetchUserDetails = async () => {
    try {
      setUser((v) => ({
        ...v,
        loading: true
      }))
      const res = await getUser()
      if (res.status == 200) {
        setUser((v) => ({
          ...v,
          loading: false,
          data: res.data
        }))
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.response.statusText);
      setUser((v) => ({
        ...v,
        loading: false
      }))
    }
  }

  useEffect(() => {
    if (isLoggedin && !user?.data) {

      fetchUserDetails()
    }
  }, [isLoggedin])

  useEffect(() => {
    setIsLoggedin(Boolean(getToken()))
  }, [])
  return (
    <AppContext.Provider
      value={{
        state: {
          cartProduct,
          sectors,
          cartTotal,
          bundleProduct,
          bundleTotal,
          isLoggedin,
          user,
          cartLoading,
          bundleLoading
        },
        setCartProduct,
        setSectors,
        fetchCartList,
        fetchBundleList,
        fetchUserDetails,
        loginSignupModal: handleModal,
        playTypeModal: handleModal,
        setIsLoggedin,
        setUser
      }}
    >
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 999999 }} />
      <Signup show={modal == "signup"} handleModal={handleModal} setIsLoggedin={setIsLoggedin} />
      <Login show={modal == "login"} handleModal={handleModal} setIsLoggedin={setIsLoggedin} />
      <OTPVerification show={modal == "otp"} handleModal={handleModal} setIsLoggedin={setIsLoggedin} modalPayload={modalPayload} setModalPayload={setModalPayload}/>
      <PlayType show={modal == "play"} handleModal={handleModal} modalPayload={modalPayload}></PlayType>
    </AppContext.Provider>)
}

export default MyApp
