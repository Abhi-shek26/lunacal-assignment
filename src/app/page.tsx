import ProfileWidget from "@/components/ProfileWidget";
import GalleryWidget from "@/components/GalleryWidget";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block"></div>
      <div className="flex flex-col items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-lg space-y-6">
          <ProfileWidget />
          <GalleryWidget />
        </div>
      </div>
    </main>
  );
}
