import { CreateBoardDTO } from '@/app/api/boards/dto';
import { api, apiKeys } from '@/core/api';
import { Boards } from '@prisma/client';
import { useMutation, useQueryClient } from 'react-query';

const createBoardFc = async (board: CreateBoardDTO) => {
  const { data } = await api.post<Boards>('/boards', board);

  return data;
};

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: apiKeys.CREATE_BOARD,
    mutationFn: createBoardFc,
    onSettled: () => {
      queryClient.invalidateQueries([apiKeys.GET_BOARDS]);
    },
  });

  const createBoard = (title: string) => {
    mutation.mutate({ title });
  };

  return {
    mutation,
    createBoard,
  };
};
