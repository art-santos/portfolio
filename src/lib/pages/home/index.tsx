import {
  Box,
  Button,
  chakra,
  Icon,
  Stack,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";
import { RiGithubLine } from "react-icons/ri";

const Home = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Hi 👋 <br /> I'm{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Arthur Santos
          </Text>
          <br />
          {"  "}A Full-Stack <br />
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, blue.300,green.500)"
            fontWeight="extrabold"
          >
            Blockchain
          </Text>{" "}
          <br />
          Developer
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          If you want to get in contact with me send me a mail clicking in the
          button bellow. I'm free to answer your dobts, chat or simply help you.
          I'm a expert React.js developer and a Blockchain developer. I've been
          working with development for 6+ years, and have worked almost with all
          sorts of web applications, specially the ones focused in SEO. I also
          founded an startup in 2019 and have created many products from
          scratch.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            colorScheme="messenger"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto", lg: "xs" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            transition="0.2s ease-in-out"
            bgGradient="linear(to-r, blue.200,blue.200)"
            _active={{
              transition: "0.2s ease-in-out",
              bgGradient: "linear(to-r, blue.50,blue.100)",
            }}
            _hover={{
              transition: "0.2s ease-in-out",
              bgGradient: "linear(to-r, blue.200,blue.300)",
            }}
            href="mailto:arthursantosdeveloper@gmail.com"
          >
            Send me a mail
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
          <Button
            as="a"
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto", lg: "xs" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            transition="0.2s ease-in-out"
            href="https://github.com/art-santos"
          >
            <RiGithubLine />
            Github
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
