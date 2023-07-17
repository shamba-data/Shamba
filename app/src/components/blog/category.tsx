import Link from "next/link";
import { cx } from "../PostList";
import { Key } from "react";

function Label(props: {
  children: React.ReactNode;
  color: "green" | "blue" | "orange" | "purple" | "pink";
}) {
  const color = {
    green: "text-emerald-700",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600",
  };
  return (
    <span
      className={cx(
        "mt-5 space-x-5 text-xs font-medium uppercase tracking-wider",
        color[props.color] || color.green
      )}
    >
      {props.children}
    </span>
  );
}

export default function CategoryLabel({ categories }: any) {
  type Category = {
    title: "Tea" | "Coffee" | "Horticulture" | "Floriculture";
    color: "green" | "blue" | "orange" | "purple" | "pink";
  };
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category: Category, index: Key) => (
          <Link href="#" key={index}>
            <Label color={category.color}>{category.title}</Label>
          </Link>
        ))}
    </div>
  );
}
