import Randomgif from "./component/Randomgif";
import Tag from "./component/Tag";

const App = () => {
  return (
    <div >
      <div className="bg-[#222222] h-[100vh] flex flex-col justify-center items-center">
        <Randomgif />
        <Tag />
      </div>
    </div>
  );
};

export default App;
