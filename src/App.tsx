import { useSelector } from "react-redux";
import "./App.css";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="mt-3">
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel={true}
          leftPanel={
            <div className="w-64 p-2 ">
              <RecursiveComponent fileTree={FileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
