import Footer from "../footer"
import Header from "../header"

const Layout = ({ children }) => {
    return (
        <div className="container-fluid">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout