import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const createBoardSchema = z.object({
  title: z.string().min(3).max(20),
});

type CreateBoardValues = z.infer<typeof createBoardSchema>;

type FormProps = {
  createBoard: (title: string) => void;
};

export const useCreateBoardForm = ({ createBoard }: FormProps) => {
  const form = useForm<CreateBoardValues>({
    resolver: zodResolver(createBoardSchema),
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await createBoard(values.title);
  });

  return {
    form,
    onSubmit,
  };
};
