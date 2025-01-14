import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { FC } from "react";

interface ProductCardProps {
  title: string;
  price: number;
  onAddToCart: () => void;
  onView: () => void;
};

const ProductCard: FC<ProductCardProps> = ({ title, price, onAddToCart, onView }) => {
  return (
    <Card className="w-64 bg-gray-800 text-white">
      <CardHeader className="h-40 flex items-center justify-center bg-gray-700">
        <div className="w-12 h-12 bg-gray-600 rounded-md flex items-center justify-center">
          <svg
            xmlns=""
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </CardHeader>
      <CardFooter className="p-4">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <p className="text-sm text-gray-400">${price}</p>
        <div className="flex items-center justify-between mt-4">
          <Button size="sm" onClick={onAddToCart} className="text-sm">
            Add to cart
          </Button>
          <button
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-300"
            onClick={onView}
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

