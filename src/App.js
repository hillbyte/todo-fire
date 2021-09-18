import "./App.css";
import NoteLists from "./Component/NoteLists";
import Notes from "./Component/Notes";
import Photos from "./Component/Photos";
import Upload from "./Component/Upload";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <Notes />
          <Upload />
          <Photos />
        </div>
        <div className="col-md-6">
          <NoteLists />
        </div>
      </div>
    </div>
  );
}

export default App;
