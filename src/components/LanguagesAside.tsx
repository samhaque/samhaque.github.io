import { Card, CardHeader, CardContent } from "./ui/card";
import { FaStar } from "react-icons/fa";

const languages = [
  { name: "English", stars: 5 },
  { name: "Bengali", stars: 5 },
];

export default function LanguagesAside() {
  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-text-light">Languages</h2>
        </CardHeader>
        <CardContent className="pt-0 space-y-4">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-medium text-text-light mr-2">
                {lang.name}:
              </span>
              <div className="flex space-x-1">
                {[...Array(lang.stars)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-text-light" />
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
