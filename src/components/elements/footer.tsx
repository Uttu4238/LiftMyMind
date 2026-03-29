

export default function Footer() {
    return (
        <>
            <div className="sticky bottom-0 w-full h-fit bg-white/10 backdrop-blur-2xl text-gray-300 py-4 flex flex-col items-center justify-center z-[100]">
                <p className="text-sm md:text-base font-extrabold font-stretch-200% text-center px-4">
                    Created with ❤️ by Utkarsh Kumar and contributors.
                </p>
                <div className="mt-3 flex flex-wrap justify-center items-center gap-4">
                    <a href="https://lift-my-mind.vercel.app/" className="text-sm md:text-base text-emerald-300 hover:text-white transition">
                        Home
                    </a>
                    <a href="https://github.com/Uttu4238" className="text-sm md:text-base text-emerald-300 hover:text-white transition">
                        GitHub
                    </a>
                </div>
                <p className="text-xs md:text-sm mt-3 text-center">
                    © {new Date().getFullYear()} Lift My Mind. All rights reserved.
                </p>
            </div>
        </>
    );
};
