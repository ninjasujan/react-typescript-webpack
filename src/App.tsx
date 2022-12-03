import reactImage from "./react.png";
import svgImage from "./image.svg";
import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <div>
      <h1>Typescript babel webpack setup</h1>
      <img src={reactImage} width="200" height="200" alt="xasasd" />
      <img src={svgImage} width="200" height="200" alt="adasdas" />
      <ClickCounter />
    </div>
  );
};

export default App;
