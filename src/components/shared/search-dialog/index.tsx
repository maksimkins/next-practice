"use client";
import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import SearchResult from "./search-result";
import SearchSuggestion from "./search-suggestion";
import { SearchItemProps } from "@/components/helpers/interfaces/search-item";
import { searchItems } from "@/utils/actions/search-products";


export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<SearchItemProps[]>([]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery) {
        try {
          const result = await searchItems(searchQuery)

          setSearchResult(result);
        } catch (error) {
          console.error("Search failed", error);
          setSearchResult([]);
        }
      }
      return () => clearTimeout(timer);
    }, 250);
  }, [searchQuery]);

  const handleResultSelect = (result: SearchItemProps) => {
    router.push(result.href.includes("/all") ? result.href.replace(/\/all$/, "") : result.href);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="flex items-center gap-2">
            <IoSearchOutline />
            <span>Search products ...</span>
          </div>
          <kbd className="pointer-events-none select-none items-center rounded bg-muted px-1.5 font-mono text-[12px] font-medium opacity-100">
            <span> Ctrl K</span>
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Search products ...</DialogTitle>
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput
            placeholder="Type a command or search..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            {searchQuery.trim() === "" ? (
              <SearchSuggestion />
            ) : searchResult.length > 0 ? (
              <SearchResult
                result={searchResult}
                onSelect={handleResultSelect}
              />
            ) : (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}