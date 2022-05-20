import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from "../appContext/index"
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react'
import { cartList, getUserBundlesList } from "../utils/api-Request";
import useFetchSectordetails from "../hooks/getSectorList";
import { getSession, setSession } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  const [cartProduct, setCartProduct] = useState(null)
  const [bundleProduct, setBundleProduct] = useState(null)
  const [sectors, setSectors] = useState(null)
  const [cartTotal, setCartTotal] = useState(0)
  const [bundleTotal, setBundleTotal] = useState(0)
  useFetchSectordetails(setSectors)
  const fetchCartList = async () => {
    const list = await cartList(getSession());
    setCartProduct(list?.data?.data || null);
    setCartTotal(list?.data?.cartTotal || 0)

  };

  const fetchBundleList = async () => {
    const list = await getUserBundlesList(getSession());
    setBundleProduct(list?.data?.data || null);
    setBundleTotal(list?.data?.bundleTotal || 0)

  };

  useEffect(() => {
    if (!Boolean(getSession())) {
      setSession()
    }
    fetchCartList()
    fetchBundleList()
  }, [])
  return (
    <AppContext.Provider
      value={{
        state: {
          cartProduct,
          sectors,
          cartTotal,
          bundleProduct,
          bundleTotal
        },
        setCartProduct,
        setSectors,
        fetchCartList,
        fetchBundleList
      }}
    > 
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 999999 }} />
    </AppContext.Provider>)
}

export default MyApp
