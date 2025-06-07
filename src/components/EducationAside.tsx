import { Card, CardHeader, CardContent } from "./ui/card";
import { siteConfig } from "../config/portfolio.config";

export default function EducationAside() {
  const Icon = siteConfig.education.icon;

  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-text-light">Education</h2>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center space-x-2 mb-2">
            <Icon className="w-5 h-5 text-text-light" />
            <h3 className="text-lg font-medium text-text-light">
              {siteConfig.education.degree}
            </h3>
          </div>
          <p className="text-gray-300">
            <a
              href={siteConfig.education.schoolUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white underline"
            >
              {siteConfig.education.school}
            </a>{" "}
            <span className="text-gray-400">({siteConfig.education.years})</span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
