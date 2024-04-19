import CoreConcept from "./components/CoreConcept";
import FunctionConcept from "./components/FunctionConcept";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center bg-red-200 p-7 h-[10vh]">
          React with TypeScript
        </h1>
      </div>
      <div className="w-full bg-red-100 flex flex-col justify-center items-center h-[45vh]">
        <CoreConcept />
      </div>
      <div className="w-full bg-green-100 flex flex-col justify-center items-center h-[45vh]">
        <FunctionConcept />
      </div>
    </div>
  );
}

export default App;
