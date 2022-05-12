import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
function MyApp({ Component, pageProps }) {
  return (<><Component {...pageProps} />
    <ToastContainer /></>)
=======
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
>>>>>>> 23a39e11d5cdd09cfed15aa3c03d113fde094d20
}

export default MyApp
