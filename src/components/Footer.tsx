export default function Footer(){
    return (
        <footer id="footer" className="bg-teal-700 text-white text-xl ">
            <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
                <address>
                    <h2> Acme rocket-Powered Products, Inc.</h2>
                    555 Astro Way <br/>
                    Fairfield, New Jersey 12345-55555<br/>
                    Email: inquires@acmerockets.com<br/>
                    Phone (555) 555-55555
                </address>
                <nav className="hidden md:flex flex-col gap-2">
                    <a href="#rockets" className="hover:opacity-85">Our Rockets</a>
                    <a href="#testimonials" className="hover:opacity-85">Testimonials</a>
                    <a href="#contact" className="hover:opacity-85">Contact Us</a>
                </nav>
                <div className="flex flex-col sm:gap-2">
                    <p className="text-right">Copyright &copy; <span id="year">2022</span></p>
                    <p className="text-right">All Rights Reserved</p>
                </div>
            </section>
        </footer>
    )
}
