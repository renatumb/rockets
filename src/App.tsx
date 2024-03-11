import './App.css'
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";

function App() {

    const [dark, setDark] = useState(true)
    const [showTopButton, setShowTopButton] = useState('hidden')


    const toggleDarkMode = () => {
        const root = document.getElementById('root')
        if (root)
            root.classList.toggle('dark')
        setDark(!dark)
    }

    useEffect(() => {
        const root = document.getElementById('root')
        if (dark && root)
            root.classList.add('dark')

        window.addEventListener("scroll", () => {
            setShowTopButton(window.scrollY > window.innerHeight ? 'visible' : 'invisible')
        })

    }, [])

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white scroll-smooth">
           <Header dark={dark} toggleDarkMode={toggleDarkMode} showTopButton={showTopButton}  />
            <Main />
            <Footer />
        </div>
    )
}

export default App
