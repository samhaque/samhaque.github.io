import { Card, CardHeader, CardContent } from "./ui/card";
import { siteConfig } from "../config/portfolio.config";

export default function SkillsSection() {
  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-text-light">Skills</h2>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-8">
            {siteConfig.skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-lg font-medium text-text-light mb-3 pb-2 border-b border-gray-700">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 
                        py-1 
                        text-sm 
                        rounded-full 
                        bg-[#04394e] 
                        text-gray-200
                        border 
                        border-gray-700
                        hover:bg-[#055f6a]
                        transition-colors
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
