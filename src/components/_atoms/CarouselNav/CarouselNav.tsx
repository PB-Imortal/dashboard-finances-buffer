import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

type Item = {
    label: string
    to: string
}

type CarouselNavProps = {
    items?: Item[]
    styles?: string
}

const CarouselNav: React.FC<CarouselNavProps> = ({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(1)
    const selectedRef = useRef<HTMLDivElement>(null)
    const [highlightStyle, setHighlightStyle] = useState<{
        width: number
        left: number
    }>({
        width: 0,
        left: 0,
    })

    const defaultItems: Item[] = [
        { label: "Back", to: "/" },
        { label: "Edit Profile", to: "" },
        { label: "Preferences", to: "preferences" },
        { label: "Security", to: "security" },
    ]

    const actualItems = items || defaultItems

    useEffect(() => {
        if (selectedRef.current && typeof selectedRef.current.scrollIntoView === "function") {
            selectedRef.current.scrollIntoView({
                inline: "center",
                behavior: "smooth",
            })
            setHighlightStyle({
                width: selectedRef.current.offsetWidth,
                left: selectedRef.current.offsetLeft,
            })
        }
    }, [selectedIndex])

    const highlightItem = (index: number) => {
        setSelectedIndex(index)
    }

    return (
        <nav className="lg:sticky lg:top-28 lg:z-10 bg-bgwhite py-[0.95rem] md:-ml-14 dark:bg-dkrbgitenseblue rounded-lg lg:ml-[0.5rem] lg:mr-4">
            <div className="overflow-x-auto whitespace-nowrap flex items-center space-x-4 p-4 scrollbar-hide">
                {actualItems.map((item, index) => (
                    <div
                        key={item.label}
                        ref={selectedIndex === index ? selectedRef : null}
                        className={`carousel-item-wrapper ${selectedIndex === index ? "selected" : ""}`}
                    >
                        <Link
                            to={item.to}
                            className={`carousel-item cursor-pointer p-2 rounded dark:bg-dkrbgitenseblue ${
                                selectedIndex === index
                                    ? "text-bgblack font-bold bg-white"
                                    : "text-txtgrey bg-white"
                            }`}
                            onClick={() => highlightItem(index)}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="relative">
                <div
                    className="bg-black h-1 absolute bottom-0 transition-all duration-300"
                    style={{
                        width: highlightStyle.width,
                        transform: `translateX(${highlightStyle.left}px)`,
                    }}
                />
            </div>
        </nav>
    )
}

export default CarouselNav
