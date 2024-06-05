/* eslint-disable import/no-extraneous-dependencies */
import "./App.css";

import { Button, Input } from "@template/design-system";
import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import { badge } from "styled-system/recipes";

// eslint-disable-next-line import/no-unresolved
import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

const App = (): React.FC => (
  <>
    <>
      <a
        href="https://vitejs.dev"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="Vite logo"
          className="logo"
          src={viteLogo}
        />
      </a>

      <a
        href="https://react.dev"
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt="React logo"
          className="logo react"
          src={reactLogo}
        />
      </a>
    </>

    <h1 className={css({ color: "red.900" })}>
      Vite + React
    </h1>

    <div className={badge()} >
      This is a badge
    </div>

    <div className="card">
      <Flex gap="3">
        <Button
          colorPalette="red"
          variant="solid"
        >
          Button
        </Button>

        <Button
          colorPalette="red"
          variant="subtle"
        >
          Button
        </Button>

        <Button
          colorPalette="red"
          variant="outline"
        >
          Button
        </Button>

        <Button
          colorPalette="red"
          variant="ghost"
        >
          Button
        </Button>
      </Flex>

      <Input
        id="name"
        placeholder="placeholder"
      />

      <p>
        Edit
        {' '}

        <code>
          src/App.tsx
        </code>

        {' '}
        and save to test HMR
      </p>
    </div>

    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
);

export default App;
