
import Hero from "./sections/Hero.tsx";
import Rockets from "./sections/Rockets.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import Contact from "./sections/Contact.tsx";

export default function Main(): JSX.Element {
    return (
        <main className="max-w-4xl mx-auto">
            <Hero/>
            <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
            <Rockets/>
            <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
            <Testimonials/>
            <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
            <Contact/>
        </main>
    )
}
