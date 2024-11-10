export const generateId = (): number => {
  // TODO: consider using uuid
  return  Math.floor(Math.random() * 1000);
}
