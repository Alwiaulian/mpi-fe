import { NavigationProps } from "@/data/navbar_props";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ title, href, subMenu }: NavigationProps) {
  const pathName = usePathname();

  const isActive = () => pathName.includes(href);

  return (
    <li>
      {subMenu ? (
        <div className="group relative cursor-pointer px-2">
          <Link
            href={href}
            className={`${
              isActive()
                ? "text-gray-900 font-semibold lg:border-t-6 border-gray-700 lg:shadow-none shadow-md bg-white lg:bg-transparent"
                : "font-medium text-gray-600 border-transparent"
            } flex items-center gap-2 p-4 lg:border-t-4 lg:hover:border-gray-900 hover:text-black hover:shadow-lg lg:hover:shadow-none rounded-md lg:rounded-none lg:hover:bg-transparent transition-all duration-500 `}
          >
            <span>{title}</span>
            <span className="pl-1 group-hover:-rotate-180 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentcolor"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </Link>
          <div className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-2 text-gray-900 shadow-xl group-hover:visible">
            {subMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="p-2 rounded-md hover:text-black hover:bg-gray-200 transition-colors duration-300 text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          href={href}
          className={`${
            isActive()
              ? "text-gray-900 font-semibold lg:border-t-6 border-gray-700 lg:shadow-none shadow-md bg-white lg:bg-transparent"
              : "font-medium text-gray-600 border-transparent"
          } flex items-center gap-2 p-4 lg:border-t-4 lg:hover:border-gray-900 hover:text-black hover:shadow-lg lg:hover:shadow-none rounded-md lg:rounded-none lg:hover:bg-transparent transition-all duration-500 `}
        >
          {title}
        </Link>
      )}
    </li>
  );
}
