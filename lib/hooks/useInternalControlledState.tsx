import { useCallback, useEffect, useRef, useState } from "react";

function useInternalControlledState<T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void
): [T, (value: T) => void] {
  const [stateValue, setStateValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : stateValue;

  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setStateValue(newValue);
      }
      onChangeRef.current?.(newValue);
    },
    [isControlled]
  );

  return [currentValue, setValue];
}

export default useInternalControlledState;
