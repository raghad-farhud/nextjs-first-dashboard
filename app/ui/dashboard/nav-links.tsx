'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

/*
  * This component is used to render the links in the side navigation.
  * It is used in the dashboard/sidenav.tsx component.
  
  * using <a> vs <Link>
  * The <a> tag when used with href will cause all the page to reload.
  * The <Link> tag will only reload the content of the page (without the navbar).
*/
import Link from 'next/link';

// the usePathname hook is used to determine the current path of the application.
// This is used to determine which link is active.
import { usePathname } from 'next/navigation';

// clsx is used to conditionally apply classes to an element.
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];


export default function NavLinks() {
  // The current path of the application.
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-50 text-blue-600': pathName == link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
