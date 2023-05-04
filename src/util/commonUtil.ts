export const enterInput = (e: React.KeyboardEvent, paramFunc: () => void) => {
  if (e.key === "Enter") {
    paramFunc();
  }
};
