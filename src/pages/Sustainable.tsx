import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import sustain from "../assets/image/sustain.png";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png"; 
import img4 from "../assets/image/img4.png";
import rightbanner from "../assets/image/rightbanner.png"
import theme1 from "../assets/image/theme1.png"
import theme2 from "../assets/image/theme2.png"
import what1 from "../assets/image/what1.png"
import what2 from "../assets/image/what2.png"
import what3 from "../assets/image/what3.png"
import What_Flashcard from "../assets/image/What_Flashcard.pdf";
import Learn_more from "../assets/image/Learn_more.pdf";
import search from "../assets/image/search.svg";
import lamp from "../assets/image/lamp.svg"
import person from "../assets/image/person.svg";
import map from "../assets/image/map.svg";
import how from "../assets/image/how.svg";
import { FiSearch, FiUser, FiMapPin, FiSettings, FiArrowRight } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Plus, X } from "lucide-react";

const Sustainable = () => {
  const [activeTab, setActiveTab] = useState("what");
  const [activePopup, setActivePopup] = useState<{ tab: string; icon: number } | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, right: 0 });
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

  
  const [isLoaded, setIsLoaded] = useState(false);
const [showPinkBox, setShowPinkBox] = useState(true);

// Trigger animations on component mount
useEffect(() => {
  // Hide pink box after animation
  const pinkBoxTimer = setTimeout(() => {
    setShowPinkBox(false);
  }, 1500);

  // Start main content animation
  const contentTimer = setTimeout(() => {
    setIsLoaded(true);
  }, 800);

  return () => {
    clearTimeout(pinkBoxTimer);
    clearTimeout(contentTimer);
  };
}, []);


const tabs = [
  { id: "what", label: "What", icon: <FiSearch className="text-red-500 w-5 h-5" /> },
  { id: "why", label: "Why", icon: <TbBulb className="text-red-500 w-5 h-5" /> },
  { id: "who", label: "Who", icon: <FiUser className="text-red-500 w-5 h-5" /> },
  { id: "where", label: "Where", icon: <FiMapPin className="text-red-500 w-5 h-5" /> },
  { id: "how", label: "How", icon: <FiSettings className="text-red-500 w-5 h-5" /> },
];

  const contentData = {
    what: {
      title: "What is Sustainable Business?",
      description: "Sustainable finance refers to financial tools and investments that support environmentally sustainable and socially responsible business practices. It promotes long-term value by integrating economic viability, social equity, and environmental protection into financial decision making.",
      image: rightbanner,
      popupImages: [
        {
          id: 1,
          src: what1,
          alt: "What popup image 1",
        },
        {
          id: 2,
          src: what2,
          alt: "What popup image 2",
        },
        {
          id: 3,
          src: what3,
          alt: "What popup image 3",
        },
      ],
    },
    why: {
      title: "Why Choose Sustainable Business?",
      description: "Sustainable business practices help reduce environmental impact while creating long-term value for stakeholders. They improve brand reputation, reduce operational costs, and ensure compliance with evolving regulations.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop",
      popupImages: [
        {
          id: 1,
          src: "/assets/image/why-popup-1.png",
          alt: "Why popup image 1",
        },
        {
          id: 2,
          src: "/assets/image/why-popup-2.png",
          alt: "Why popup image 2",
        },
        {
          id: 3,
          src: "/assets/image/why-popup-3.png",
          alt: "Why popup image 3",
        },
      ],
    },
    who: {
      title: "Who Benefits from Sustainable Business?",
      description: "All stakeholders benefit from sustainable business practices - investors see better returns, employees enjoy better working conditions, customers get quality products, and communities experience positive environmental impact.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      popupImages: [
        {
          id: 1,
          src: "/assets/image/who-popup-1.png",
          alt: "Who popup image 1",
        },
        {
          id: 2,
          src: "/assets/image/who-popup-2.png",
          alt: "Who popup image 2",
        },
        {
          id: 3,
          src: "/assets/image/who-popup-3.png",
          alt: "Who popup image 3",
        },
      ],
    },
    where: {
      title: "Where to Implement Sustainable Practices?",
      description: "Sustainable practices can be implemented across all business operations - from supply chain management and manufacturing processes to office operations and customer service delivery.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      popupImages: [
        {
          id: 1,
          src: "/assets/image/where-popup-1.png",
          alt: "Where popup image 1",
        },
        {
          id: 2,
          src: "/assets/image/where-popup-2.png",
          alt: "Where popup image 2",
        },
        {
          id: 3,
          src: "/assets/image/where-popup-3.png",
          alt: "Where popup image 3",
        },
      ],
    },
    how: {
      title: "How to Build Sustainable Business?",
      description: "Building sustainable business requires strategic planning, stakeholder engagement, continuous monitoring, and adaptation. Start with setting clear sustainability goals and implementing measurable practices.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      popupImages: [
        {
          id: 1,
          src: "/assets/image/how-popup-1.png",
          alt: "How popup image 1",
        },
        {
          id: 2,
          src: "/assets/image/how-popup-2.png",
          alt: "How popup image 2",
        },
        {
          id: 3,
          src: "/assets/image/how-popup-3.png",
          alt: "How popup image 3",
        },
      ],
    },
  };

  const handleIconClick = (iconNumber: number) => {
    const buttonElement = buttonRefs.current[iconNumber];
    
    if (buttonElement) {
      const buttonRect = buttonElement.getBoundingClientRect();
      const popupWidth = 320; // w-80 = 320px
      const popupHeight = 400; // estimated height
      
      // Position popup below the button, aligned to the right edge of the button with additional 55px offset
      let rightPosition = window.innerWidth - buttonRect.right - 55; // Added 55px offset to move popup more to the right
      let topPosition = buttonRect.bottom + 10;
      
      // Ensure popup doesn't go off the right edge of screen
      if (rightPosition < 10) {
        rightPosition = 10;
      }
      
      // Check if popup fits below the button
      const viewportHeight = window.innerHeight;
      if (topPosition + popupHeight > viewportHeight - 10) {
        // If not enough space below, show above the button
        topPosition = buttonRect.top - popupHeight - 10;
      }
      
      setPopupPosition({
        top: topPosition,
        right: rightPosition,
      });
    }
    
    setActivePopup({ tab: activeTab, icon: iconNumber });
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const handlePopupBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const content = contentData[activeTab as keyof typeof contentData];

  const themes = [
    {
      id: 1,
      title: "Innovative Tech",
      image: theme1,
    },
    {
      id: 2,
      title: "Future Skills",
      image: theme2,
    },
  ];

  return (


    <div className="remove-scrollbar min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[140px]">
        <div className="absolute inset-0">
          <img
            src={sustain}
            alt="Industrial welding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto  relative z-10 sustainable-banner">
          <div className="">
            <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
              Sustainable Business<span style={{ color: '#D20024' }}>.</span>
            </h1>
          </div>
        </div>
      </section>


    {/* Pink Box Animation */}
{showPinkBox && (
  <div className="fixed inset-0 z-50 pointer-events-none flex items-end justify-center">
    <div 
      className="w-96 h-96 bg-pink-500 opacity-90 animate-[fadeUpAndOut_1.5s_ease-out_forwards]"
      style={{
        animation: 'fadeUpAndOut 1.5s ease-out forwards',
        transform: 'translateY(100%)',
      }}
    />
  </div>
)}


      {/* Main Content of the page */}
      <section className="pt-10 pb-6">
        <div className="custom-container">
<div 
  className={`md:grid md:grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex transition-all duration-1000 ease-out ${
    isLoaded 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-20'
  }`}
>
            {/* Sidebar */}
            <div className="col-span-2 space-y-2">
              <a href="/" className="block">
                <div className="cursor-pointer hover:underline back-to-home">
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>← Back to</span><br />
                  <span style={{ fontSize: '22px', fontWeight: '500' }}>&nbsp; Home</span>
                </div>
              </a>

              <a href="" className="cursor-pointer block">
                <img
                  src={img1}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="" className="cursor-pointer block">
                <img
                  src={img2}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="" className="cursor-pointer block">
                <img
                  src={img3}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="" className="cursor-pointer block">
                <img
                  src={img4}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
            </div>

            {/* Themes List */}
            <div className="col-span-10 space-y-6">
              {/* Tabs Navigation */}
              <div className="flex flex-wrap max-[425px]:flex gap-6 mb-8 mt-4 margin-this">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-gap button-style flex items-center px-6 py-3 transition-colors duration-200 ${activeTab === tab.id
                      ? " font-bold"
                      : "border-color text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="grid md:grid-cols-[65%_35%] gap-6 max-w-7xl mx-auto mobile-gap">

                {/* Left Content */}
                <div className="space-y-6">
                  <h2 className="h2-fonts h2-tabs">
                    {contentData[activeTab].title.replace(/\?$/, "")}
                    <span style={{ color: "red" }}>?{/* red question mark */}</span>
                  </h2>

                  <p className="tabs-para">
                    {content.description}
                  </p>

                  <div className="flex space-x-6 pt-4 tabs-links">
                    <a
                      href={Learn_more}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 flex items-center"
                    >
                      Click here to learn more →
                    </a>

                    <a
                      href={What_Flashcard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 flex items-center"
                    >
                      Download Flashcard →
                    </a>
                  </div>
                </div>

                {/* Right Content - Image with Interactive Icons */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={rightbanner}
                      alt={content.title}
                      className="w-full h-64 object-cover image-height"
                    />

                    {/* Interactive Icons */}
                    <div className="absolute inset-0 position-set">
                      {/* Icon 1 - Top Right */}
                      <button
                        ref={(el) => buttonRefs.current[1] = el}
                        onClick={() => handleIconClick(1)}
                        className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group btn-1"
                      >
                        <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold  cssforthis"/>
                      </button>

                      {/* Icon 2 - Middle Right */}
                      <button
                        ref={(el) => buttonRefs.current[2] = el}
                        onClick={() => handleIconClick(2)}
                        className="transform -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group btn-2"
                      >
                        <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold cssforthis" />
                      </button>

                      {/* Icon 3 - Bottom Right */}
                      <button
                        ref={(el) => buttonRefs.current[3] = el}
                        onClick={() => handleIconClick(3)}
                        className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group btn-3"
                      >
                        <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold cssforthis" />
                      </button>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="mt-6 below-para">
                    Click on the above icons for more
                  </p>
                </div>
              </div>

              {/* Related Themes */}
              <div className="mt-12 theme-css">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Related Themes</h4>

                {/* Divider line */}
                <div className="bg-[#CF001B] h-[2px] w-[60px] mb-4"></div>

                <div className="grid grid-cols-[65%_35%] gap-6 max-w-7xl mx-auto">
                  {/* Left 65% Column (Images) */}
                  <div className="flex gap-6 justify-start">
                    {themes.map((theme) => (
                      <div key={theme.id} className="w-1/2 overflow-hidden">
                        <div className="relative">
                          <img
                            src={theme.image}
                            alt={theme.title}
                            className="w-full h-[200px] object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right 35% Column (Empty or Content Placeholder) */}
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {activePopup && (
        <div
          className="fixed inset-0 z-50"
          onClick={handlePopupBackdropClick}
        >
          <div 
            className="absolute bg-white shadow-2xl w-80 max-h-96 overflow-hidden border border-gray-200 box-width"
            style={{
              top: `${popupPosition.top}px`,
              right: `${popupPosition.right}px`,
            }}
          >
            {/* Close Button */}
            {/* <button
              onClick={closePopup}
              className="absolute top-2 right-2 z-10 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button> */}

            {/* Popup Content */}
            <div className="overflow-auto max-h-96">
              <img
                src={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].src}
                alt={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].alt}
                className="w-full h-auto object-contain rounded-lg"
                onError={(e) => {
                  console.error('Image failed to load:', e.currentTarget.src);
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Sustainable;
