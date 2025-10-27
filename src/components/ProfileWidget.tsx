"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuestionMarkIcon = () => <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>;
const GridIcon = () => <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/></svg>;


const TABS = ["About Me", "Experiences", "Recommended"];

export default function ProfileWidget() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <Card className="bg-[#2c2c2c] border-none p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-gray-400">
            <QuestionMarkIcon/>
            <GridIcon />
        </div>
        <div className="flex space-x-2 bg-[#1e1e1e] p-1 rounded-full">
          {TABS.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant="ghost"
              className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-300
                ${activeTab === tab ? "bg-[#4a4a4a] text-white" : "text-gray-400 hover:bg-[#3a3a3a] hover:text-white"}`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-[#969696] text-sm leading-relaxed pr-2 overflow-y-auto h-32 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
        {activeTab === "About Me" && (
          <div>
            <p>Hello! I am Dave, your sales rep here from Salesforce. I have been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
            <br />
            <p>
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        )}
        {activeTab === "Experiences" && <p>Content for Experiences goes here.</p>}
        {activeTab === "Recommended" && <p>Content for Recommended goes here.</p>}
      </div>
    </Card>
  );
}

