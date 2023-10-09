import BoardsList from '@/components/BoardsList';
import { prisma } from '@/core/prisma';

export default async function Home() {
  const boards = await prisma.boards.findMany();
  console.log('page.tsx / L6 -- boards -->', boards);

  return (
    <div className='p-12'>
      <BoardsList initialData={boards} />
    </div>
  );
}
