
import MyVantaComponent from "../components/ui/background";
import RippleButton from "../components/elements/Btn1";
import img from "../assets/images/aboutimg.png";
import { Github } from "lucide-react";
export default function About() {
    const content = {
        title: "About Us",
        description: `At Lift My Mind, we believe music is more than just entertainment—it's a powerful tool for emotional well-being. Our platform is designed to help you better understand your mood and connect with music that supports your mental and emotional state.

We start with a simple, intuitive mood check-in to understand how you’re feeling—whether you’re joyful, stressed, calm, or low. Based on your input, we recommend scientifically backed songs that are tailored to your emotional needs.`
    };
    return (
    <>
        <div className="relative min-h-screen w-full flex flex-col items-center justify-start bg-black overflow-x-hidden pb-32">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <MyVantaComponent />
            </div>
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center px-4 md:px-8 mt-24 sm:mt-32 w-full" >
                <h1 className="text-center bg-clip-text bg-gradient-to-b  from-white via-emerald-400 to-emerald-900 text-transparent font-extrabold text-7xl sm:text-8xl md:text-7xl lg:text-9xl tracking-tight select-none pointer-events-none">
                    {content.title}
                </h1>
                <h2 className="mt-8 text-center text-[#CADBD5] font-extrabold text-xl md:text-3xl lg:text-5xl select-none pointer-events-none">
                    Built to share peace of mind
                </h2>
                <p className="mt-6 max-w-5xl text-center text-white font-bold text-base md:text-xl lg:text-2xl select-none pointer-events-none">
                    {content.description}
                </p>
                <div className="mt-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center transition duration-300 hover:shadow-lg hover:scale-105 text-white shadow-black/50">
                        <h3 className="text-xl font-bold mb-1">Utkarsh Kumar</h3>
                        <p className="text-sm text-emerald-300 mb-5">Lead Developer</p>
                        <a href="https://github.com/Uttu4238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-black/40 hover:bg-black/60 rounded-full transition text-[#D0E3DD] hover:text-white font-medium">
                            <Github size={18} />
                            @Uttu4238
                        </a>
                    </div>
                </div>
                <RippleButton
                    className="mt-16 mb-8 font-jost flex items-center justify-center overflow-hidden rounded-full bg-[#036041] px-8 py-4 text-base md:text-lg font-extrabold text-[#D0E3DD] transition duration-300 hover:text-white hover:bg-[#D0E3DD] hover:shadow-lg hover:shadow-[#D0E3DD] hover:scale-105 uppercase z-20 min-h-[44px] min-w-[44px]"
                    onClick={() => window.open('https://github.com/Uttu4238/LiftMyMind.git')}
                >
                    Contribute on GitHub
                </RippleButton>
            </div>
            <img
                src={img}
                alt="About Decorative Left"
                className="hidden lg:block absolute left-[-5%] bottom-5 w-1/4 max-w-xs z-5 pointer-events-none select-none opacity-50"
            />
            <img
                src={img}
                alt="About Decorative Right"
                className="hidden lg:block absolute right-[-5%] bottom-5 w-1/4 max-w-xs z-5 pointer-events-none select-none opacity-50"
            />

        </div>
    </>
    );
}