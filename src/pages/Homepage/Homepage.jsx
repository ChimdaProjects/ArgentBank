
//components
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

//style
import "./homepage.scss"

//images
import icon1 from "../../assets/icon-chat.png"
import icon2 from "../../assets/icon-money.png"
import icon3 from "../../assets/icon-security.png"

import { Fragment } from "react";



const Homepage = () => {
    return (
        <Fragment>
            <NavBar />
            <main>
                <Hero />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature 
                        image={icon1}
                        description="Chat icon"
                        title="You are our #1 priority"
                        text="Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <Feature 
                        image={icon2}
                        description="Chat icon"
                        title="More savings means higher rates"
                        text="The more you save with us, the higher your interest rate will be!"
                    />
                    <Feature 
                        image={icon3}
                        description="Chat icon"
                        title="Security you can trust"
                        text="We use top of the line encryption to make sure your data and money
                        is always safe."
                    />

                </section>
            </main>
            
            <Footer />
        </Fragment>
    )
}

export default Homepage;