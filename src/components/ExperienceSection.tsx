import { Card, CardHeader, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { siteConfig } from "../config/portfolio.config";

export default function ExperienceSection() {
  if (!siteConfig.experience) {
    return null;
  }

  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-text-light">
            Work Experience
          </h2>
        </CardHeader>
        <CardContent className="pt-0 space-y-8">
          {siteConfig.experience.map((job, idx) => (
            <div key={`${job.title}-${idx}`}>
              <div>
                <h3 className="text-xl font-semibold text-text-light mb-1">
                  {job.title}{" "}
                  <span className="text-sm font-medium text-gray-400">
                    —{" "}
                    <a
                      href={job.placeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white underline"
                    >
                      {job.place}
                    </a>
                  </span>
                </h3>
                <p className="text-sm italic text-gray-300 mb-4">
                  {job.years}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={`${job.title}-bullet-${bIdx}`}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {idx !== siteConfig.experience.length - 1 && (
                <Separator className="border-border-gray-700 my-6" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
