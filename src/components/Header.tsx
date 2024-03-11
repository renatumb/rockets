
export default function Header(
    props: {
        toggleDarkMode: () => void,
        dark: boolean,
        showTopButton: string
    }): JSX.Element {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        if (mobileMenu)
            mobileMenu.classList.toggle('hidden')

        const hamburgButton = document.getElementById('hamburguer-button')
        if (hamburgButton)
            hamburgButton.classList.toggle('toggle-btn')
    }

    return (
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
                <button className=" text-4xl hover:scale-125  transition-all duration-500 ease-in " onClick={props.toggleDarkMode}> {props.dark ? '☀️' : '🕶️'}</button>

                <button id="hamburguer-button" onClick={toggleMobileMenu} className=" text-3xl md:hidden cursor-pointer relative size-8">
                    <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-1000
                                before:content-[''] before:bg-red-800   before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-1000
                                after:content-['']  after:bg-blue-700  after:w-8  after:h-1   after:rounded  after:absolute  after:-translate-x-4  after:translate-y-3   after:transition-all  after:duration-1000
                            "></div>
                </button>
            </section>

            <section id="mobile-menu" className=" absolute  bg-gray-800 w-full text-5xl flex flex-col justify-center origin-top animate-open-menu hidden" onClick={toggleMobileMenu}>
                <nav className="flex flex-col items-center min-h-screen py-8">
                    <a href="#hero" className="w-full text-center py-6 hover:opacity-80">Home</a>
                    <a href="#rockets" className="w-full text-center py-6 hover:opacity-80">Our Rockets</a>
                    <a href="#testimonials" className="w-full text-center py-6 hover:opacity-80">Testimonials</a>
                    <a href="#contact" className="w-full text-center py-6 hover:opacity-80">Contact</a>
                    <a href="#footer" className="w-full text-center py-6 hover:opacity-80">Legal</a>
                </nav>
            </section>
            <a href="#" className={"fixed top-[85vh] left-[80vw] z-10 animate-bounce text-5xl " + props.showTopButton}>⬆️</a>
        </header>
    )
}
