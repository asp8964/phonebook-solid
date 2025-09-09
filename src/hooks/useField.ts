import { createSignal } from "solid-js";

export const useField = () => {
  const [value, setValue] = createSignal("");

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    setValue(target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    reset,
  };
};