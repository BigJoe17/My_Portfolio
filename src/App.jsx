import React from 'react'
import {Navbar, Welcome, Dock, Home} from "@components";
import {Safari, Terminal, Resume, Finder, Text, ImageFile, Contact, Photos} from "@windows"
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";


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
            <Photos/>
            <Home/>

        </main>

    )
}
export default App
