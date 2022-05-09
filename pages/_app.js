import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
function MyApp({ Component, pageProps }) {
  return (<><Component {...pageProps} />
    <ToastContainer /></>)
}

export default MyApp
