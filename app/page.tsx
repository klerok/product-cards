import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50 px-6 py-12">
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id} className="h-full">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-slate-800 px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-slate-700"
          >
            Смотреть всю коллекцию
          </button>
        </div>
      </section>
    </main>
  );
}
