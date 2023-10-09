'use client';

import { Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

interface BoardProps {
  id: string;
  title: string;
}

const BoardCard = ({ id, title }: BoardProps) => {
  return (
    <Link href={`/board/${id}`}>
      <Card className='w-full'>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </Link>
  );
};

export default BoardCard;
