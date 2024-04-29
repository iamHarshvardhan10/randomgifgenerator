import Randomgif from "./component/Randomgif";
import Tag from "./component/Tag";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-center p-2 uppercase font-semibold border border-red-700 mt-4 ml-[120px] mr-[120px] bg-black text-white rounded-md">Random Gif Generator</h1>
      <div className="flex justify-center items-center gap-4">
        <Randomgif />
        <Tag />
      </div>
    </div>
  );
};

export default App;
