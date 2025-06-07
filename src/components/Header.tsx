import { Fragment } from "react";
import { siteConfig } from "../config/portfolio.config";
import type { SocialLink } from "../config/portfolio.config";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 py-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <img
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Name, Titles, Social Icons */}
        <div className="flex flex-col lg:ml-8 items-center lg:items-start">
          <h1 className="text-4xl font-bold text-white mb-2">{siteConfig.name}</h1>
          <h2 className="text-xl text-white font-medium mb-4 leading-snug text-center lg:text-left">
            {siteConfig.titles.map((title: string, index: number) => (
              <Fragment key={title}>
                {title}
                {index < siteConfig.titles.length - 1 && <br />}
              </Fragment>
            ))}
          </h2>
          <div className="flex space-x-3">
            {siteConfig.socialLinks.map((link: SocialLink) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
