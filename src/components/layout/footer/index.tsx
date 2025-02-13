"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Send, Moon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Skateshop</h2>
          <p className="text-sm mt-2 text-gray-400">Built by <span className="font-bold">Sadman.</span></p>
        </div>

        <div>
          <h3 className="text-md font-semibold">Credits</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>OneStopShop</li>
            <li>Acme Corp</li>
            <li>craft.mkaske.dev</li>
            <li>Taxonomy</li>
            <li>shadcn/ui</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Help</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Social</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>X</li>
            <li>GitHub</li>
            <li>Discord</li>
            <li>cal.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Lofi</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>beats to study to</li>
            <li>beats to chill to</li>
            <li>a fresh start</li>
            <li>coffee to go</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row md:justify-between items-center gap-4">
        <div className="w-full md:w-auto">
          <h3 className="text-md font-semibold">Subscribe to our newsletter</h3>
          <div className="mt-2 flex">
            <Input
              type="email"
              placeholder="skate@gmail.com"
              className="bg-gray-800 text-white border border-gray-600"
            />
            <Button variant="ghost" className="ml-2 bg-gray-800 border border-gray-600">
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Button variant="ghost" className="bg-gray-800 border border-gray-600">
            <Github className="h-5 w-5 text-white" />
          </Button>
          <Button variant="ghost" className="bg-gray-800 border border-gray-600">
            <Moon className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
