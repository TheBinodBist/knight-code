import { TextAttributes } from "@opentui/core";

export default function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text>
      <text attributes={TextAttributes.DIM} fg="gray">
        &#x3E;
      </text>
      <text>opus-4.6</text>
    </box>
  );
}