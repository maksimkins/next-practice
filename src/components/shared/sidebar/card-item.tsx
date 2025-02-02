import { ItemProps } from "@/components/helpers/interfaces/items";
import { Button } from "@/components/ui/button";
import { useProductStore } from "../../../store/add-products";

export default function CardItem({ id, name, price, quantity = 1 }: ItemProps) {
  const { setProducts } = useProductStore();

  const removeItem = () => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-black text-white shadow-md rounded-lg">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-300">${price}</p>
        {quantity > 1 && <p className="text-sm text-gray-400">Quantity: {quantity}</p>}
      </div>

      <Button variant="destructive" size="sm" onClick={removeItem} className="bg-red-600 hover:bg-red-700 text-white">
        Remove
      </Button>
    </div>
  );
}
