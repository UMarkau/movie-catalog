import * as React from "react";

export const useDebounce = <T>(
  initialValue: T,
  time = 500
): [T, React.Dispatch<T>] => {
  const [value, setValue] = React.useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = React.useState<T>(initialValue);

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, time]);

  return [debouncedValue, setValue];
};
