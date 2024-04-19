import CoreConcept from "./components/CoreConcept";
import FunctionConcept from "./components/FunctionConcept";
import Interface from "./components/Interface";
import TypeAliases from "./components/TypeAliases";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center bg-red-200 p-2 h-[5vh]">
          React with TypeScript
        </h1>
      </div>
      <div className="w-full bg-red-100 flex flex-col justify-center items-center h-[45vh]">
        <CoreConcept />
      </div>
      <div className="w-full bg-green-100 flex flex-col justify-center items-center h-[5vh]">
        <FunctionConcept />
      </div>
      <div className="w-full bg-purple-100 flex flex-col justify-center items-center h-[5vh]">
        <TypeAliases />
      </div>
      <div className="w-full bg-orange-100 flex flex-col justify-center items-center h-[30vh]">
        <Interface />
      </div>
    </div>
  );
}

export default App;
