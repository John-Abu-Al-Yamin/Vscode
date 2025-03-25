import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const extensionIconPath: Record<string, string> = {
  // Files
  tsx: "/icons/react_ts",
  jsx: "/icons/react",
  html: "/icons/html",
  js: "/icons/javascript",

  // Folders
  node_modules: "/icons/folder-node",
  public: "/icons/folder-public",
  src: "/icons/folder-src",
  components: "/icons/folder-components",
};

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extension = filename.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPath, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPath[extension]}-open.svg`
        : `${extensionIconPath[extension]}.svg`
      : `${extensionIconPath[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder)
    return (
      <IconImg
        src={
          isOpen
            ? "/icons/folder-default-open.svg"
            : "/icons/folder-default.svg"
        }
      />
    );

  return <FileIcon />;
};

export default RenderFileIcon;

