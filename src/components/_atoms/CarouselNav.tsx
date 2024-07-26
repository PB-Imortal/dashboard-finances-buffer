import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type Item = {
  label: string;
  to: string;
};

type CarouselNavProps = {
  items?: Item[];
  styles?: string;
};

const CarouselNav: React.FC<CarouselNavProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const selectedRef = useRef<HTMLAnchorElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<{
    width: number;
    left: number;
  }>({
    width: 0,
    left: 0,
  });

  const items: Item[] = [
    { label: "Back", to: "/" },
    { label: "Edit Profile", to: "" },
    { label: "Preferences", to: "preferences" },
    { label: "Security", to: "security" },
  ];

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        inline: "center",
        behavior: "smooth",
      });
      setHighlightStyle({
        width: selectedRef.current.offsetWidth,
        left: selectedRef.current.offsetLeft,
      });
    }
  }, [selectedIndex]);

  const highlightItem = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <nav className="relative bg-white">
      <div className="overflow-x-auto whitespace-nowrap flex items-center space-x-4 p-4 scrollbar-hide">
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
  );
};

export default CarouselNav;
