import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 block">
      <ol className="flex text-lg gap-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={`${
              breadcrumb.active ? "text-slate-700 dark:text-slate-400" : "text-slate-500 dark:text-slate-300"
            }
          flex gap-x-2
            `}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
