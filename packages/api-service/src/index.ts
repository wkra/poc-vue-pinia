export interface User {
  name: string;
  id: number;
}
export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await response.json()) as User[];
};
