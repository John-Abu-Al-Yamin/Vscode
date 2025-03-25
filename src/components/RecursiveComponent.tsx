import { useState } from "react";
import { IFile } from "../interface";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/treeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/funcations";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { name, isFolder, children, id, content } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ** Handlers
  const toggle = () => setIsOpen((prev) => !prev);

  const onFileClick = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTabId: id,
      })
    );
    if (exists) {
      return;
    }

    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };

  return (
    <div className="ml-2 mb-2">
      <div className="flex items-center mb-2 cursor-pointer ">
        {isFolder ? (
          <div className="flex items-center" onClick={toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}

            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="">{name}</span>
          </div>
        ) : (
          <div className=" flex items-center mr-2" onClick={onFileClick}>
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen && children && (
        <div className="ml-4 border-l-2 border-gray-700 pl-1">
          {children.map((file, index) => (
            <RecursiveComponent fileTree={file} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveComponent;
