import React from 'react'
import {Navbar, Welcome, Dock } from "@components";
import {Safari, Terminal, Resume, Finder, Text, ImageFile, Contact} from "@windows"
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import TextWindow from "@windows/Text.jsx";

gsap.registerPlugin(Draggable);


const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome/>
            <Dock/>


            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <ImageFile/>
            <Contact/>

        </main>

    )
}
export default App
