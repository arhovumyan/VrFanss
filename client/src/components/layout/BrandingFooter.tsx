import {
    Copy,
    X,
    Video,
  } from "lucide-react";

  
export function BrandingFooter() {
    return (

    <footer className="bg-black border-t border-gray-800 py-12 px-8 text-gray-400 mb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
  
            {/* Branding */}
            <div className="space-y-4">
                <h3 className="flex items-center text-2xl font-bold text-orange-700 space-x-2">
                    <Video size={28} />
                    <span>VrFans</span>
                </h3>
                <p className="text-sm">
                    VrFans is a AI chat platform that allows you to chat
                    with AI companions, about any topic. Powered by an AI Chat Generator.
                </p>
                <div className="text-xs space-y-1">
                    <div>Owned &amp; operated by:</div>
                    <div>NextDay AI Incorporated by arego</div>
                    <div>NextDay AI USA Inc by arego</div>
                    <div>NextDay AI EU Ltd by arego</div>
                </div>
            </div>

            {/* Join Us */}
            <div>
                <h4 className="mb-4 text-white font-semibold">JOIN US</h4>
                <div className="flex items-center space-x-4 mb-6">
                    <a href="#" aria-label="Discord">
                        <Video size={24} />
                    </a>
                    <a href="#" aria-label="X (Twitter)">
                        <X size={24} />
                    </a>
                    <a href="#" aria-label="Reddit">
                        <Video size={24} />
                    </a>
                    <a href="#" aria-label="Video">
                        <Video size={24} />
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/visa.svg" alt="Visa" className="h-6" />
                    <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
                    <img src="/discover.svg" alt="Discover" className="h-6" />
                </div>
            </div>

            {/* Platform Links */}
            <div>
                <h4 className="mb-4 text-white font-semibold">PLATFORM</h4>
                <ul className="space-y-2 text-gray-400">
                    {[
                        "Lorme Ipsum",
                        "Lorme Ipsum",
                        "Lorme Ipsum",
                        "Lorme Ipsum",
                        "Lorme Ipsum",
                        "Lorme Ipsum",
                        "Lorme Ipsum",
                        "Lorme Ipsum"
                    ].map((item) => (
                        <li key={item}>
                            <a href="#" className="hover:underline">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Resources Links */}
            <div>
                <h4 className="mb-4 text-white font-semibold">RESOURCES</h4>
                <ul className="space-y-2 text-gray-400">
                    {[
                        "Support",
                        "Become an...",
                        "Community…",
                        "Content…",
                        "Legal",
                        "FAQ",
                        "Download"
                    ].map((item) => (
                        <li key={item}>
                            <a href="#" className="hover:underline">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </footer>
);
}