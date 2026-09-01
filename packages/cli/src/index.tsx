import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import Header from "./components/header";
import InputBar from "./components/input-bar";

function App() {
  return (
    <box
      width="100%"
      height="100%"
      backgroundColor="#0D0D12"
      flexDirection="column"
    >
      <Header />

      <box
        flexGrow={1}
        width="100%"
        justifyContent="flex-end"
      >
        <InputBar onSubmit={() => {}} />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);