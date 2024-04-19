// Generic types are types that work together with another type;
//* Generics in TypeScript allow you to create reusable component or functions that can work with multiple data types.*//
type Data = {
  id: string,
  blog: string
}
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

// -- So now we have custom generic type here and we can use this type to create multiple storages for different data.

const textStorage: DataStorage<Data> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b}
}

const user = merge<{ name: string }, { age: number }>(
  { name: "Prasenjit" },
  {age: 36}
);

user

const GenericTypes = () => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default GenericTypes;
