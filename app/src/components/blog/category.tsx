import Link from "next/link";
import { cx } from "../PostList";

function Label(props) {
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
        color[props.color] || color.pink
      )}
    >
      {props.children}
    </span>
  );
}

export default function CategoryLabel({ categories }) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link href="#" key={index}>
            <Label color={category.color}>{category.title}</Label>
          </Link>
        ))}
    </div>
  );
}
