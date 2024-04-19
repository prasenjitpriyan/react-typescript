const add = (a: number, b: number) => {
  const result = a + b;
  return result;
};

type AddFn = (a: number, b: number) => number;

const calculate = (a: number, b: number, calcFn: AddFn) => {
  return calcFn(a, b);
};

const TypeAliases = () => {
  return (
    <div className="w-full bg-purple-100 flex flex-col justify-center items-center h-[5vh]">
      <h1>{calculate(2, 3, add)}</h1>
    </div>
  );
};

export default TypeAliases;
