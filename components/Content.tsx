import { Flex, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { forwardRef, useEffect, type PropsWithChildren } from 'react';

type ContentProps = PropsWithChildren & {
  blur?: boolean;
};

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ blur, children }, ref) => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
      colorMode === 'light' ? toggleColorMode() : '';
    }, [colorMode, toggleColorMode]);

    return (
      <Flex
        ref={ref}
        w={'full'}
        h={'100vh'}
        px={16}
        py={12}
        bg={'transparent'}
        flexDir={'column'}
        justifyContent={'center'}
        backdropFilter={blur ? 'auto' : 'none'}
        backdropBlur={blur ? 'sm' : 'none'}
        backdropBrightness={blur ? '60%' : 'none'}
        hideBelow={'lg'}
      >
        {children}
      </Flex>
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
