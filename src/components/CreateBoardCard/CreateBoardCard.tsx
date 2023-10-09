'use client';

import { useCreateBoardForm } from '@/components/CreateBoardCard/useForm';
import Input from '@/components/Input';
import { useCreateBoard } from '@/hooks/useCreateBoard';
import { useOpen } from '@/hooks/useOpen';
import { Card } from 'flowbite-react';
import React from 'react';

const CreateBoardCard = () => {
  const { open, handleOpen } = useOpen();
  const { createBoard } = useCreateBoard();

  const {
    form: {
      register,
      formState: { errors, isSubmitting },
    },
    onSubmit,
  } = useCreateBoardForm({
    createBoard,
  });

  return (
    <Card className='w-full cursor-pointer'>
      {open ? (
        <form onSubmit={onSubmit}>
          <Input
            type='text'
            disabled={isSubmitting}
            placeholder='Enter your board title'
            error={errors.title?.message}
            {...register('title')}
          />
        </form>
      ) : (
        <h5
          className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
          onClick={handleOpen}
        >
          + Create new board
        </h5>
      )}
    </Card>
  );
};

export default CreateBoardCard;
