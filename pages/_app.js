import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from "../appContext/index"
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cartProductCount, setCartProductCount] = useState(0)
  return (
    <AppContext.Provider
      value={{
        state: {
          cartProductCount: cartProductCount
        },
        setCartProductCount: setCartProductCount
      }}
    >
      <Component {...pageProps} />
      <ToastContainer />
    </AppContext.Provider>)
}

export default MyApp
