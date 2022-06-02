import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Image h="110px" w="300px" src="/arthur-santos-logo.png" />
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Box marginLeft="auto">
              <ThemeToggle />
            </Box>

            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              />
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
