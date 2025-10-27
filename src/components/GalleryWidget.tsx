"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuestionMarkIcon = () => <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>;
const GridIcon = () => <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/></svg>;


const INITIAL_IMAGES = [
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
  "/images/placeholder.jpg",
];

export default function GalleryWidget() {
  const [images, setImages] = useState(INITIAL_IMAGES);

  const addImage = () => {
    setImages([...images, "/images/placeholder.jpg"]);
  };

  return (
    <Card className="bg-[#2c2c2c] border-none p-4 rounded-xl shadow-lg text-[#969696]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-gray-400">
            <QuestionMarkIcon/>
            <GridIcon />
        </div>
        <div className="flex items-center space-x-2">
            <Button
                variant="ghost"
                className="bg-[#3a3a3a] text-white px-3 py-1.5 text-sm rounded-full hover:bg-[#4a4a4a]"
            >
                Gallery
            </Button>
            <Button
                onClick={addImage}
                className="bg-[#3a3a3a] text-white px-3 py-1.5 text-sm rounded-full hover:bg-[#4a4a4a]"
            >
                + Add Image
            </Button>
            <Button size="icon" className="bg-[#1e1e1e] text-white rounded-full w-8 h-8">
                <span>←</span>
            </Button>
            <Button size="icon" className="bg-[#1e1e1e] text-white rounded-full w-8 h-8">
                <span>→</span>
            </Button>
        </div>
      </div>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
