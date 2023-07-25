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
        minH={'100vh'}
        px={{ base: 12, md: 16 }}
        py={{ base: 6, md: 12 }}
        bg={'transparent'}
        flexDir={'column'}
        justifyContent={'center'}
        backdropFilter={blur ? 'auto' : 'none'}
        backdropBlur={blur ? 'sm' : 'none'}
        backdropBrightness={blur ? '60%' : 'none'}
        pos={{ base: 'absolute', md: 'inherit' }}
      >
        <Flex flexDir={'column'} maxW={'container.md'} alignSelf={'center'}>
          {children}
        </Flex>
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
