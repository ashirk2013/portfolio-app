import React from 'react';
import { useColorMode, Stack, Circle, Flex, Box, useMediaQuery, Text } from '@chakra-ui/react';

const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isBiggerScreen } = useMediaQuery('(min-width: 600px)');

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex
                direction={isBiggerScreen ? "row" : "column"}
                spacing="200px"
                p={isBiggerScreen ? "32" : "0"}
                alignSelf="flex-start"
            >
                <Box mt={isBiggerScreen ? "0" : "16"} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text
                        fontSize="7xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                        bgClip="text">Aaron Shirk</Text>
                </Box>
            </Flex>
        </Stack>
    );
};

export default Header;