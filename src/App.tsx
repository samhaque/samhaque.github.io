import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LoadingSpinner } from "./components/LoadingSpinner";

// Lazy load components
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const MusicSection = lazy(() => import("./components/MusicSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const EducationAside = lazy(() => import("./components/EducationAside"));
const VolunteerSection = lazy(() => import("./components/VolunteerSection"));
const LanguagesAside = lazy(() => import("./components/LanguagesAside"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove loading state after initial render
    setIsLoading(false);
  }, []);

  return (
    <div className={`bg-[#00202d] min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <main className="w-full lg:w-2/3 space-y-12 lg:pl-8">
              <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                <ExperienceSection />
              </Suspense>

              {/* Mobile-only Skills Section */}
              <div className="lg:hidden">
                <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                  <SkillsSection />
                </Suspense>
              </div>

              <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                <ProjectsSection />
              </Suspense>
            </main>

            {/* Right column */}
            <aside className="w-full lg:w-1/3 flex flex-col lg:pr-8 space-y-12">
              {/* Desktop-only Skills Section */}
              <div className="hidden lg:block">
                <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                  <SkillsSection />
                </Suspense>
              </div>

              <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                <EducationAside />
              </Suspense>

              <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                <VolunteerSection />
              </Suspense>

              <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                <LanguagesAside />
              </Suspense>

              <Suspense fallback={<div className="h-32 bg-card-bg animate-pulse rounded-xl" />}>
                <MusicSection />
              </Suspense>
            </aside>
          </div>
        </div>

        <Footer />
      </Suspense>
    </div>
  );
}
