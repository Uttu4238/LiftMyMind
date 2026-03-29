// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './home/Page';
import About from './About/Page';
import GooeyNav from './components/ui/Nav';
import myImage from './assets/images/img1.png';
import SongSuggestorPage from './Song-Suggestor/page';
import Footer from './components/elements/footer';

const items = [
    { label: "Home", href: "/" },
    { label: "Suggestor", href: "/song" },
    { label: "About", href: "/about" },
];

function App() {
    return (
        <>
            <div className="fixed top-2 left-1/2 -translate-x-1/2 flex w-[96%] md:w-[85%] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-3xl py-2 z-[60] items-center justify-between px-2 sm:px-4 md:px-6 shadow-lg flex-row">
            <div className="flex items-center gap-2 md:gap-3 w-auto justify-start">
                <img src={myImage} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain pointer-events-none select-none" alt="Lift My Mind Logo" />
                <p className="text-gray-200 text-base sm:text-xl md:text-2xl font-extrabold hidden sm:block">Lift My Mind</p>
            </div>
            <div className="flex items-center font-bold justify-end w-auto">
                <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={items.findIndex(item => item.href === window.location.pathname)}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
            </div>
            <div className="w-full pt-28 sm:pt-36 flex-grow min-h-screen flex flex-col">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song" element={<SongSuggestorPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </div>
            <div className="w-full z-[100] mt-auto">
                <Footer />
            </div>
        </>
    );
}

export default App;