import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box margin="0 auto" maxWidth={1600} transition="0.5s ease-out">
        <Box margin="8">
          <Box as="main" marginY={22}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
