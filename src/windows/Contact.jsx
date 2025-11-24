import React from 'react'
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import {WindowControls} from "@components"
import {socials} from "@constants";

const Contact = () => {
    return (
        <>

            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-2">
                <img src="/images/conf_joshua1.jpeg" alt="Joshua"
                     className="w-20 rounded-full"/>
                <h3>Let's Connect</h3>
                <p>Got an Idea? A bug to Squash or project or Idea to come alive I I'm In.</p>
                    <p>Joshuaolugotun17@gmail.com</p>

                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5"/>
                            </a>
                            <p>{text}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact")

export default ContactWindow
