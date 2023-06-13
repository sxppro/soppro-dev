import AnimatedContent from '@/components/Content';
import Work from '@/components/panes/Work';
import { NextPage } from 'next';

const WorkPage: NextPage = () => {
  return (
    <AnimatedContent blur>
      <Work />
    </AnimatedContent>
  );
};

export default WorkPage;
