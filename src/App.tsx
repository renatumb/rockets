import './App.css'
import rocketdab from './assets/rocketdab.png'
import rocketman from  './assets/rocketman.png'
import rocketride from  './assets/rocketride.png'
import rocketlaunch from  './assets/rocketlaunch.png'
import {useEffect, useState} from "react";

function App() {

    const [dark, setDark] = useState(true)
    const [showTopButton, setShowTopButton] = useState('hidden')

    window.addEventListener("scroll", () => {
        setShowTopButton(window.scrollY > window.innerHeight ? 'visible' : 'invisible')
    })

    const toggleDarkMode = () => {
        const root = document.getElementById('root')
        if (root)
            root.classList.toggle('dark')
        setDark(!dark)
    }

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        if (mobileMenu)
            mobileMenu.classList.toggle('hidden')

        const hamburgButton = document.getElementById('hamburguer-button')
        if (hamburgButton)
            hamburgButton.classList.toggle('toggle-btn')

    }

    useEffect(() => {
        const root = document.getElementById('root')
        if (dark && root)
            root.classList.add('dark')
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white scroll-smooth">
            <header className=" bg-teal-700 text-white sticky top-0 z-10">
                <section className=" max-w-4xl mx-auto p-4 flex justify-between items-center">
                    <h1 className=" text-xl sm:text-3xl font-medium text-nowrap">
                        <a href="#hero">🚀 Acme rockets</a>
                    </h1>

                    <nav className="hidden sm:block space-x-8 text-xl">
                        <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                        <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                        <a href="#contact" className="hover:opacity-90">Contact us</a>
                    </nav>
                    <button className=" text-4xl hover:scale-125  transition-all duration-500 ease-in " onClick={toggleDarkMode}> {dark? '☀️': '🕶️'}</button>

                    <button id="hamburguer-button" onClick={ toggleMobileMenu } className=" text-3xl md:hidden cursor-pointer relative size-8">
                        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-1000
                                before:content-[''] before:bg-red-800   before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-1000
                                after:content-['']  after:bg-blue-700  after:w-8  after:h-1   after:rounded  after:absolute  after:-translate-x-4  after:translate-y-3   after:transition-all  after:duration-1000
                            "></div>
                    </button>
                </section>

                <section id="mobile-menu" className=" absolute  bg-black w-full text-5xl flex flex-col justify-center origin-top animate-open-menu hidden" onClick={ toggleMobileMenu }>
                    <nav className="flex flex-col items-center min-h-screen py-8">
                        <a href="#hero"         className="w-full text-center py-6 hover:opacity-80">Home</a>
                        <a href="#rockets"      className="w-full text-center py-6 hover:opacity-80">Our Rockets</a>
                        <a href="#testimonials" className="w-full text-center py-6 hover:opacity-80">Testimonials</a>
                        <a href="#contact"      className="w-full text-center py-6 hover:opacity-80">Contact</a>
                        <a href="#footer"       className="w-full text-center py-6 hover:opacity-80">Legal</a>
                    </nav>
                </section>

                <a href="#" className={"fixed top-[85vh] left-[80vw] z-10 animate-bounce text-5xl " + showTopButton}>⬆️</a>
            </header>
            <main className="max-w-4xl mx-auto">
                <section id="hero" className="flex flex-col-reverse sm:flex-row justify-center p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
                    <article className=" sm:w-1/2">
                        <h2 className=" max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left mb-12 text-slate-900 dark:text-white">
                            We boldy go <span className="text-indigo-700 dark:text-indigo-300">where no rocket</span> has gone before...
                        </h2>
                        <p className=" max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                            We are building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
                        </p>
                        <p className=" max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                            think Acme Rockets
                        </p>
                    </article>
                    <img className=" w-1/2 floating " alt="rocket dab" src={rocketdab}/>
                </section>
                <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
                {/** --- **/}
                <section id="rockets" className=" p-6 my-12  scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
                    <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white ">Our Rockets</h2>
                    <ul className=" list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                            <img className=" w-1/2 mb-6" src={rocketman}/>
                            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
                            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$</p>
                            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
                        </li>
                        { /** **/}
                        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                            <img className=" w-1/2 mb-6" src={rocketride}/>
                            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
                            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$</p>
                            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Best Selling Rocket!</p>
                        </li>
                        { /** **/}
                        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                            <img className=" w-1/2 mb-6" src={rocketlaunch}/>
                            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
                            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$$</p>
                            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Luxury Starship</p>
                        </li>
                    </ul>
                </section>
                <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
                {/** --- **/}
                <section id="testimonials" className=" p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height" >
                    <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Testimonials</h2>
                    <figure className="my-12">
                        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                            <p className=" text-2xl sm:text-3xl text-justify mt-2 text-white dark:text-slate-400
                            before:content-['\201c'] before:font-serif before:absolute  before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
                            after:content-['\201d']  after:font-serif  after:absolute   after:-bottom-10  after:right-4  after:text-9xl  after:text-white  after:opacity-25  after:transform  after:translate-x-2  after:translate-y-2">
                                Acme has always been there for me. Their explorer rocket arrived in a wooden crate as expected. Life long customer! A++ shopping experience
                            </p>
                        </blockquote>
                            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                                &#8212; Wile E. Coyote, Genius
                            </figcaption>
                    </figure>

                    <figure className="my-12">
                        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                            <p className=" text-2xl sm:text-3xl text-justify mt-2 text-white dark:text-slate-400
                            before:content-['\201c'] before:font-serif before:absolute  before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
                            after:content-['\201d']  after:font-serif  after:absolute   after:-bottom-10  after:right-4  after:text-9xl  after:text-white  after:opacity-25  after:transform  after:translate-x-2  after:translate-y-2
                            ">
                                The Acme Adventurer rocket has thwarted my illudium Q-36 Explosive Space Modulator on several occasions. <span className="italic">this makes me very, very angry! </span>
                                Nevertheless, K-9 and I have awarded the Martian contract for space exploration rockets based on Acme's quality and sturdy designs
                            </p>
                        </blockquote>
                        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                            &#8212; Marvin the Martian &amp; K-9
                        </figcaption>
                    </figure>

                    <figure className="my-12">
                        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                            <p className=" text-2xl sm:text-3xl text-justify mt-2 text-white dark:text-slate-400
                            before:content-['\201c'] before:font-serif before:absolute  before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
                            after:content-['\201d']  after:font-serif  after:absolute   after:-bottom-10  after:right-4  after:text-9xl  after:text-white  after:opacity-25  after:transform  after:-translate-x-2  after:-translate-y-2
                            ">
                                I knew I not only wanted &#8212;<span className="italic"> I needed</span> &#8212; Acme's infinity rocket for my mission in space. Acme delivered in one day!
                                Nothing says <q className="italic">take me to your leader</q> like Acme's Inifinity Rocket! 💯
                            </p>
                        </blockquote>
                            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                                &#8212; Buzz Lightyear
                            </figcaption>
                    </figure>
                </section>

                <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
                {/** --- **/}
                <section id="contact" className=" p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
                    <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Contact us</h2>
                    <form className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col gap-4">
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required placeholder="Your Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"/>

                        <label htmlFor="message">Message:</label>
                        <textarea type="text" id="message" name="message" cols="30" rows="10" placeholder="Type your message here" required className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"/>

                        <button className="bg-teal-700 hover:bg-teal-600 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">Submit</button>
                    </form>
                </section>
            </main>

            <footer id="footer" className="bg-teal-700 text-white text-xl ">
                <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between" >
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
        </div>
    )
}

export default App
