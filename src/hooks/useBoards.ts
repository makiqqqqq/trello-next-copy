import { api, apiKeys } from '@/core/api';
import { Boards } from '@prisma/client';
import { useQuery } from 'react-query';

interface UseBoardsOptions {
  initialData: Boards[];
}

const getBoardsFn = async () => {
  const { data } = await api.get<Boards[]>('/boards');

  return data;
};

export const useBoards = ({ initialData }: UseBoardsOptions) => {
  return useQuery({
    queryKey: [apiKeys.GET_BOARDS],
    queryFn: getBoardsFn,
    initialData,
  });
};
