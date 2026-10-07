import type { Product } from "@/data/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { image, title, description, price } = product;

  return (
    <article className="bg-white rounded-3xl p-6 flex flex-col justify-between h-full">
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className="bg-slate-100 rounded-2xl flex items-center justify-center aspect-square object-contain p-4"
      />
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="text-sm font-normal text-slate-500 leading-relaxed text-slate-700">
        {description}
      </p>
      <p className="text-sm font-normal text-slate-700">{price} ₽</p>

      <button className="self-start rounded-full bg-slate-600 text-white px-8 py-3 mt-4">
        В корзину
      </button>
    </article>
  );
}
