export const getPosition = (val: string[]) => {
  if (val.length > 1) {
    const _position = val.slice(0, -1).join(", ") + " & " + val.slice(-1);
    return _position;
  }
  return val;
};

export const getName = (val: string) => {
  const __name = val.split("/");
  return __name[2].split("-").join(" ");
};
