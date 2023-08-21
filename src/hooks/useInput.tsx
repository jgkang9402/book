import { useState, useCallback } from "react";

function useInput(initialInput: any) {
  console.log(initialInput);

  const [input, setInput] = useState(initialInput);
  const onChange = useCallback((e: any) => {
    console.log("eeee", e);
    const { name, value } = e.target;
    setInput((input: any) => ({ ...input, [name]: value }));
  }, []);
  const reset = useCallback(() => setInput(initialInput), [initialInput]);
  return [input, onChange, reset];
}

export { useInput };

//

// export default function UseeInput(initialValue: any) {
//   const [value, setValue] = useState(initialValue);
//   const onChangeFunc = (e: any) => {
//     console.log(e.target.value);
//     const {
//       target: { value },
//     } = e;
//   };
//   return { value, onChangeFunc };
// }
