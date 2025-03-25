interface IProps {
  src: string;
  className?: string;
}
const IconImg = ({ src, className = "w-6 h-6 mr-1" }: IProps) => {
  return (
    <>
      <img src={src} alt="" className={className} />
    </>
  );
};

export default IconImg;
