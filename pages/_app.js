import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from "../appContext/index"
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { cartList, sectorList } from "../utils/api-Request";
import useFetchSectordetails from "../hooks/getSectorList";
import { getSession, setSession } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  const [cartProduct, setCartProduct] = useState(null)
  const [sectors, setSectors] = useState(null)
  const [cartTotal, setCartTotal] = useState(0)
  useFetchSectordetails(setSectors)
  const fetchCartList = async () => {
    const list = await cartList(getSession());
    setCartProduct(list?.data?.data || null);
    setCartTotal(list?.data?.cartTotal || 0)

  };
  useEffect(() => {
    if (!Boolean(getSession())) {
      setSession()
    }
    fetchCartList()
  }, [])
  return (
    <AppContext.Provider
      value={{
        state: {
          cartProduct,
          sectors,
          cartTotal
        },
        setCartProduct,
        setSectors,
        fetchCartList
      }}
    >
      {console.log(cartProduct,'cartProduct')}
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 999999 }} />
    </AppContext.Provider>)
}

export default MyApp
