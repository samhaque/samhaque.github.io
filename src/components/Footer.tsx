// src/components/Footer.tsx
import { FaSmile } from "react-icons/fa";
import { siteConfig } from "../config/portfolio.config";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-6 flex justify-center items-center space-x-2">
        <p className="text-gray-400">{siteConfig.footer.message}</p>
        <FaSmile className="w-5 h-5 text-gray-400" />
      </div>
    </footer>
  );
}
