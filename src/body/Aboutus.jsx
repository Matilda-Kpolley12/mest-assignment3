import "./aboutUs.css";
import About from "./img/about-us.svg";

const Aboutus = () =>{
    return(
        <>
            <section id="about" class="py-2">
            <div class="container about-inner">
            <div class="centered py-3">
                <h1 class="title-dark">About us</h1>
            </div>

            <div class="about-grid">
                <p class="about-left lead">
                Founded in 2019 by Micheal, Approval1 has come a long way from its
                beginnings in California. When our team first started out, their
                passion for cars drove them to quit day job so that Approval1 can
                offer you the world's most best service. We now serve customers
                all over country, and are thrilled that we're able to turn our
                passion into our own website.
                </p>
                <img src={About} alt="About us" class="py-1" />
            </div>
            </div>
            </section>
        </>
    );
}
export default Aboutus;