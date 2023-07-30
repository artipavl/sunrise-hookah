type MyObject = {
  [key: string]: any;
};

function getValueFromObject<T extends MyObject, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

export default getValueFromObject;
