
//components
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

//style
import "./homepage.scss"


// datas features
import data from "../../datas/datasFeatures"



const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                    {data.map((elt,index) => {
                        return ( <Feature 
                            key={`feature+${index}`}
                            image = {elt.image}
                            description = {elt.alt}
                            title = {elt.title}
                            text = {elt.text}

                        />)
                       
                    })}

            </section>
            <Footer />
        </div>
    )
}

export default Homepage;