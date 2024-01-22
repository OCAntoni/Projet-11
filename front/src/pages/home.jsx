import Nav from "../components/nav/nav"
import Banner from "../components/banner-home/banner-home"
import Features from "../components/features/features"
import Footer from "../components/footer/footer"
import "../styles/main.scss"

function Home() {
    return (
        <>
            <Nav />
            <main>
                <Banner />
                <Features />
            </main>
            <Footer />
        </>
    )
}

export default Home