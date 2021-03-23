import "./inventory.css"

const Inventory = () =>{
    return(
        <>
            <section id="inventory" class="py-2">
                <div class="container inventory-inner">
                <div class="text-center py-3">
                    <h1 class="title-dark">Our inventory</h1>
                </div>

                <p class="lead text-center">
                    We offer huge variety of vehicles which you can enjoy
                </p>

                <div class="boxes py-3">
                    <div class="box">
                    <div class="vehicle">
                        <img src="img/svg/car.svg" alt="" />
                    </div>
                        <div class="description">
                            <h1>Cars</h1>
                            <p class="">
                            From fuel efficient commuters to high powered sports cars and
                            luxury sedans, we can help you find the perfect car for your
                            situation.
                            </p>
                            <a href="#" class="btn-apply-dark">Apply now</a>
                        </div>
                    </div>

                    <div class="box">
                    <div class="vehicle">
                        <img src="img/svg/minivan.svg" alt="" />
                    </div>
                    <div class="description">
                        <h1>Minivans</h1>
                        <p class="">
                        With seating for up to 7 and plenty of room for whatever you
                        may need to transport, a minivan makes the perfect family
                        vehicle.
                        </p>
                        <a href="#" class="btn-apply-dark">Apply now</a>
                    </div>
                    </div>

                    <div class="box">
                    <div class="vehicle">
                        <img src="img/svg/truck.svg" alt="" />
                    </div>
                    <div class="description">
                        <h1>Trucks</h1>
                        <p class="">
                        Need to haul a trailer, just like helping your friends move?
                        Our dealers carry a wide variety of midsize and full-size
                        trucks from various manufacturers.
                        </p>
                        <a href="#" class="btn-apply-dark">Apply now</a>
                    </div>
                    </div>

                    <div class="box">
                    <div class="vehicle">
                        <img src="img/svg/suv.svg" alt="" />
                    </div>
                    <div class="description">
                        <h1>SUVs</h1>
                        <p class="">
                        Looking for something suitable for city driving, but still
                        want that off-road capability? Let us help you get into the
                        perfect SUV. Compact to full-size, we have it!
                        </p>
                        <a href="#" class="btn-apply-dark">Apply now</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}
export default Inventory;