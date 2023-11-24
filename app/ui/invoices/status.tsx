import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
// define clsx
// clsx is a small utility library for constructing className strings conditionally. It provides a simple way to conditionally join classNames together. It accepts any number of arguments which can be a string, object or an array. It returns a string with all the classNames joined together.

// For example, clsx('foo', 'bar') returns 'foo bar'.

// You can also pass an object to clsx where the keys are the classNames and the values are boolean values indicating whether the classNames should be included or not. For example, clsx({ foo: true, bar: false }) returns 'foo'.

// clsx is commonly used in React applications to conditionally apply classNames to components based on their state or props.

import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
