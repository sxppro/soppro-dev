import { Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { forwardRef, type PropsWithChildren } from 'react';

type ContentProps = PropsWithChildren & {
  blur?: boolean;
};

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ blur, children }, ref) => {
    return (
      <Center
        ref={ref}
        w={'full'}
        h={'100vh'}
        px={16}
        py={12}
        bg={'transparent'}
        flexDir={'column'}
        backdropFilter={blur ? 'auto' : 'none'}
        backdropBlur={blur ? 'sm' : 'none'}
        boxShadow={blur ? 'sm' : 'none'}
        hideBelow={'lg'}
      >
        {children}
      </Center>
    );
  }
);

Content.displayName = 'Content';

const FramerMotionisedContent = motion(Content);

const AnimatedContent = (props: ContentProps) => {
  return (
    <FramerMotionisedContent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    />
  );
};

export default AnimatedContent;
