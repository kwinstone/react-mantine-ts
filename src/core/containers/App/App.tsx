import { MantineProvider } from "@mantine/core";
import { theme } from "@/core/styles/theme.ts";
import "@mantine/core/styles.css";

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <div>
        <h1>Hello, React!</h1>
      </div>
    </MantineProvider>
  );
};
