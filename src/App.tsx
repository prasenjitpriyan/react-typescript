import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-center bg-red-200 p-5">
          React with TypeScript
        </h1>
      </div>
      <div className="w-full bg-red-100 flex flex-col justify-center items-center h-[50vh]">
        <CoreConcept />
      </div>
    </div>
  );
}

export default App;
