import { Button } from "./ui/button";
import { LazyImage } from "./LazyImage";
import type { Project } from "../config/portfolio.config";
import { Card } from "./ui/card";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  codeLink,
}: Project) {
  return (
    <Card className="overflow-hidden bg-card-bg">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/3">
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="block hover:opacity-90 transition-all"
          >
            <LazyImage
              src={imageUrl}
              alt={title}
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-xl font-semibold text-text-light">
            <a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#04394e] transition-colors"
            >
              {title}
            </a>
          </h3>
          <div className="space-y-2">
            {description.map((paragraph, idx) => (
              <p
                key={`${title}-p-${idx}`}
                className="text-gray-300 text-sm leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Button
            asChild
            variant="secondary"
            className="bg-[#04394e] text-white hover:bg-[#055f6a] transition-colors"
          >
            <a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span>View Source</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
