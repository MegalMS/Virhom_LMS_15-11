
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { mobile } from "@/src/lib/utils";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MENU BUTTON - TOP RIGHT */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-xl p-4 rounded-2xl border border-white/30 shadow-2xl hover:bg-white/30 transition-all ${mobile}`}
      >
        {isOpen ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
      </button>

      {/* SIDEBAR - RIGHT TO LEFT */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-80 bg-[#0f172a] text-white transform transition-transform duration-300 ease-in-out shadow-2xl ${mobile} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                "
              </div>
              <h1 className="text-2xl font-bold">Anglo-Link</h1>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 bg-green-600 rounded-xl font-bold text-lg hover:bg-green-500 transition shadow-lg"
            >
              Login
            </Link>
            <Link
              href="/trial"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg"
            >
              Free trial
            </Link>
          </div>

          <nav className="flex-1 px-6 py-4">
            <ul className="space-y-2">
              {["Features", "Memberships", "Level Guide", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 px-5 text-lg hover:bg-white/10 rounded-xl transition group"
                  >
                    <span>{item}</span>
                    <span className="text-gray-400 group-hover:text-white transition">Left Arrow</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-white/10 text-sm text-gray-400 text-center">
            © 2025 Anglo-Link
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/70 z-30 backdrop-blur-sm ${mobile}`}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}