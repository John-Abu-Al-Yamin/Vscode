import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";

interface IProps {}
const Preview = ({}: IProps) => {
  const {
    clickedFile: { fileContent },
  } = useSelector((state: RootState) => state.tree);

  return (
    <>
    
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={fileContent || ""} />
    </>
  );
};

export default Preview;
