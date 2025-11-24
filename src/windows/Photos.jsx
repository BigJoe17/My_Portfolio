import React, {useState} from 'react'
import useWindowStore from "@store/window"
import WindowWrapper from "@hoc/WindowWrapper.jsx"
import {photoCategories} from "@constants/index.js"
import {WindowControls} from "@components"
import {Mail, Search} from "lucide-react"
import clsx from "clsx"

const Photos = () => {
    const {openWindow} = useWindowStore()
    const [activeCategory, setActiveCategory] = useState(photoCategories.library)

    const renderSidebarList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => setActiveCategory(item)}
                        className={clsx(item.id === activeCategory.id ? "active" : "not-active")}
                    >
                        <img src={item.icon} className="w-4" alt={item.name}/>
                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos"/>
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon"/>
                    <Search className="icon"/>
                </div>
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderSidebarList("Photos", Object.values(photoCategories))}
                </div>

                <div className="gallery">
                    <ul>
                        {activeCategory?.children.map(({id, img}) => (
                            <li key={id}
                                onClick={() => openWindow('imgfile', {
                                    id,
                                    name: "Gallery Image",
                                    icon: "images/image.png",
                                    kind: "file",
                                    fileType: "img",
                                    imageUrl: img,
                                })}>
                                <img src={img} alt={`Gallery Image ${id}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const PhotoWindow = WindowWrapper(Photos, "photos")
export default PhotoWindow
