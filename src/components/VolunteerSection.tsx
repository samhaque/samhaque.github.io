import { Card, CardHeader, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { siteConfig } from "../config/portfolio.config";
import type { Volunteer } from "../config/portfolio.config";

export default function VolunteerSection() {
  if (!siteConfig.volunteer || siteConfig.volunteer.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-text-light">
            Volunteer Experience
          </h2>
        </CardHeader>
        <CardContent className="pt-0">
          {siteConfig.volunteer.map((volunteer: Volunteer, idx) => (
            <div key={idx}>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-text-light">
                  {volunteer.title}
                  <br />
                  <span className="text-sm text-gray-400">
                    <a
                      href={volunteer.orgLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white underline"
                    >
                      {volunteer.org}
                    </a>
                  </span>
                  <br />
                  <span className="text-sm text-gray-400">
                    {volunteer.years}
                  </span>
                </h3>
                <p className="mt-2 text-gray-300">{volunteer.desc}</p>
              </div>

              {idx < siteConfig.volunteer.length - 1 && (
                <Separator className="border-border-gray-700 mb-6" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
