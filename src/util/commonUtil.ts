export const enterInput = (e: React.KeyboardEvent, paramFunc: () => void) => {
  if (e.key === "Enter") {
    paramFunc();
  }
};

export const isEmpty = (
  value: string | object | any[] | number | undefined | null
): boolean => {
  if (typeof value === "string" && value.trim() === "") {
    return true;
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;
  } else if (value === undefined) {
    return true;
  } else if (value === null) {
    return true;
  } else {
    return false;
  }
};

type QueryToObjType = {
  [key: string]: string;
};

export const querystringToObject = (queryString: string): QueryToObjType => {
  const queryObject: QueryToObjType = {};

  if (!queryString) {
    return queryObject;
  }

  const queryParams = queryString.substr(1).split("&");

  for (const param of queryParams) {
    const [key, value] = param.split("=");

    if (!key) {
      continue;
    }

    queryObject[key] = value;
  }

  return queryObject;
};

type ObjToStrType = {
  [key: string]: string | number | boolean | undefined;
};

export const objectToQuerystring = (queryObject: ObjToStrType): string => {
  const queryString = Object.entries(queryObject)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `?${queryString}`;
};
