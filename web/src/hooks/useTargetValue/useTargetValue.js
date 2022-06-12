import { useState } from "react";

export function useTargetValue(initialState) {
  const [state, setState] = useState(initialState);
  const setValue = (e) => setState(e.target.value);
  return [state, setValue];
}

export default useTargetValue;
