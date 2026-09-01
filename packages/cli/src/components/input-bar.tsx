import StatusBar from "./status-bar";

type Props = {
  onSubmit: (text: string) => void;
  disabled?: boolean;
};

export default function InputBar({
  onSubmit,
  disabled = false,
}: Props) {
  return (
    <box
      width="100%"
      paddingX={2}
      paddingY={1}
      backgroundColor="#1A1A24"
      gap={1}
    >
      <textarea
        focused={!disabled}
        placeholder="ask anything ...fix bug in database"
        width="100%"
      />

      <StatusBar />
    </box>
  );
}