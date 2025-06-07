import { Card, CardHeader, CardContent } from "./ui/card";
import { siteConfig } from "../config/portfolio.config";

export default function MusicSection() {
  return (
    <section className="mb-12">
      <Card className="bg-card-bg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-text-light">
            {siteConfig.music.title}
          </h2>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${siteConfig.music.playlistId}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
