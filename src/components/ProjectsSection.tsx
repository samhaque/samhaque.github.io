import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { siteConfig } from "../config/portfolio.config";
import { LazyImage } from "./LazyImage";

export default function ProjectsSection() {
  if (!siteConfig.projects) {
    return null;
  }

  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-text-light">
            Latest Projects
          </h2>
        </CardHeader>
        <CardContent className="pt-0">
          {siteConfig.projects.map((project, idx) => (
            <div key={`project-${project.title}-${idx}`}>
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="w-full md:w-1/3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="block aspect-[16/9] overflow-hidden rounded-lg shadow-md"
                  >
                    <LazyImage
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-lg font-semibold text-text-light mb-2">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#04394e] transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="space-y-2 mb-4">
                    {project.description.map((line, i) => (
                      <p
                        key={`${project.title}-desc-${i}`}
                        className="text-gray-300"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="mt-2 bg-[#04394e] text-white hover:bg-[#055f6a] focus:ring-2 focus:ring-[#04394e]/50"
                  >
                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>

              {idx !== siteConfig.projects.length - 1 && (
                <Separator className="border-border-gray-700 my-6" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
