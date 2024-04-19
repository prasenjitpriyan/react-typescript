import CoreConcept from "./components/CoreConcept";
import FunctionConcept from "./components/FunctionConcept";
import Heading from "./components/Heading";
import Interface from "./components/Interface";
import MergingTypes from "./components/MergingTypes";
import TypeAliases from "./components/TypeAliases";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Heading />
      <CoreConcept />
      <FunctionConcept />
      <TypeAliases />
      <Interface />
      <MergingTypes />
    </div>
  );
}

export default App;
