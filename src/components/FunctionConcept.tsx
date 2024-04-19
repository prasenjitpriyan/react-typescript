// --- function not return use type of void
// const addOne = (a: number, b: number): void => {
//   const result = a + b;
//   console.log(result);
// };

// const addTwo = (a: number, b: number): number => {
//   const result = a + b;
//   return result;
// };

const addTwo = (a: number, b: number) => {
  const result = a + b;
  return result;
};

const calculate = (
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) => {
  return calcFn(a, b);
};

const finalResult = calculate(10, 20, addTwo);

const FunctionConcept = () => {
  return (
    <div>
      <h1>{finalResult}</h1>
    </div>
  );
};

export default FunctionConcept;
