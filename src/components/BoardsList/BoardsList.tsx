'use client';

import CreateBoardCard from '@/components/CreateBoardCard';
import BoardCard from '../BoardCard';
import { useBoards } from '@/hooks/useBoards';
import { Boards } from '@prisma/client';
import React from 'react';

interface UseBoardsOptions {
  initialData: Boards[];
}

const BoardsList = ({ initialData }: UseBoardsOptions) => {
  const { data } = useBoards({ initialData });

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 '>
      {data?.map((board) => <BoardCard key={board.id} {...board} />)}
      <CreateBoardCard />
    </div>
  );
};

export default BoardsList;
