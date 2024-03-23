import { css } from "styled-system/css";
import { badge } from "styled-system/recipes";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Input } from "@template/design-system";
import { Flex } from "styled-system/jsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={css({ color: "red.900" })}>Vite + React</h1>
      <div className={badge()} >This is a badge</div>
      <div className="card">
      <Flex gap="3">
        <Button colorPalette="red" variant="solid">
          Button
        </Button>
        <Button colorPalette="red" variant="subtle">
          Button
        </Button>
        <Button colorPalette="red" variant="outline">
          Button
        </Button>
        <Button colorPalette="red" variant="ghost">
          Button
        </Button>
      </Flex>
        <Input id="name" placeholder="placeholder" />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
