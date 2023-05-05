export const enterInput = (e: React.KeyboardEvent, paramFunc: () => void) => {
  if (e.key === "Enter") {
    paramFunc();
  }
};

export const isEmpty = (value: string | object | any[] | number): boolean => {
  if (typeof value === "string" && value.trim() === "") {
    return true;
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    return false;
  }
};
