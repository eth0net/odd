import { useState } from "react";

export function useTargetValue(value) {
  const [state, setState] = useState(value);
  const setValue = (e) => setState(e.target.value);
  return [state, setValue];
}

export default useTargetValue;
