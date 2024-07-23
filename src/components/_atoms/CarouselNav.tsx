import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styles from "./CarouselNav.module.css"

type Item = {
    label: string
    to: string
}

const CarouselNav: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(1)
    const selectedRef = useRef<HTMLAnchorElement>(null)

    const items: Item[] = [
        { label: "Back", to: "/" },
        { label: "Edit Profile", to: "edit" },
        { label: "Preferences", to: "preferences" },
        { label: "Security", to: "security" },
    ]

    useEffect(() => {
        if (selectedRef.current) {
            selectedRef.current.scrollIntoView({ inline: "center", behavior: "smooth" })
        }
    }, [selectedIndex])

    const highlightItem = (index: number) => {
        setSelectedIndex(index)
    }

    return (
        <nav className="relative bg-white">
            <div className={`${styles.container} scrollbar-hide`}>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`carousel-item cursor-pointer p-2 rounded ${
                            selectedIndex === index
                                ? "text-bgblack font-bold bg-white"
                                : "text-bggrey bg-white"
                        }`}
                        onClick={() => highlightItem(index)}
                        ref={selectedIndex === index ? selectedRef : null}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <div
                className={styles.bar}
                style={{
                    width: selectedRef.current ? `${selectedRef.current.offsetWidth}px` : "0px",
                    transform: selectedRef.current
                        ? `translateX(${selectedRef.current.offsetLeft}px)`
                        : "translateX(0)",
                }}
            ></div>
        </nav>
    )
}

export default CarouselNav
