import "./contactUs.css"

const Contactus = () =>{
    return(
        <>
                <section id="contact">
                <div class="container contact-inner">
                <div class="text-center py-2">
                    <h1 class="title-light text-underline">Contact us</h1>
                </div>

                <p class="lead text-center">
                    Got any questions? Just want to say hello? Feel free to contact us!
                </p>

                <div class="col-12">
                    <div class="col-left">
                    <form method="POST" class="py-2">
                        <div class="row">
                        <div class="form-group col-6">
                            <label for="email">Email</label>
                            <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            placeholder="Enter your email"
                            />
                        </div>

                        <div class="form-group col-6">
                            <label for="name">Name</label>
                            <input
                            required
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            placeholder="Enter your name"
                            />
                        </div>
                        </div>
                        <div class="row">
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea
                            required
                            name="message"
                            id="message"
                            class="form-control"
                            placeholder="Enter a message"
                            ></textarea>
                        </div>
                        </div>

                        <button type="submit" class="btn btn-light mt-3">
                        Send a message
                        </button>
                    </form>
                    </div>

                    <div class="col-right py-2">
                    <h2>Our informations</h2>
                    <p>You can also reach out using:</p>

                    <ul class="contact-data py-1">
                        <li>
                        <p>
                            <i data-feather="phone"></i>
                            <span>
                            <strong>323-776-2888</strong>
                            </span>
                        </p>
                        </li>

                        <li>
                        <p>
                            <i data-feather="mail"></i>
                            <span>
                            <strong>hello@approval1.com</strong>
                            </span>
                        </p>
                        </li>

                        <li>
                        <p>
                            <i data-feather="map-pin"></i>
                            <span>
                            <strong>4341 Kennedy Court, Westlake Village, CA, 91361</strong>
                            </span>
                        </p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}
export default Contactus;