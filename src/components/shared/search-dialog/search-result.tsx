import { SearchItemProps } from "@/components/helpers/interfaces/search-item";
import { CommandGroup, CommandItem } from "@/components/ui/command";

interface SearchProductProps {
  result: SearchItemProps[];
  onSelect: (product: SearchItemProps) => void;
}

export default function SearchResult({ result, onSelect }: SearchProductProps) {
  return (
    <CommandGroup heading="Products">
      {result.map((prod) => (
        <CommandItem key={prod.id} value={prod.name} onSelect={() => onSelect(prod)} style={{ cursor: 'pointer' }}>
          {prod.name}
        </CommandItem>
      ))}
    </CommandGroup>
  );
}