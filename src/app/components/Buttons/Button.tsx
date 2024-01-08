type buttonProps = {
  content: string;
  listClass: string;
  url: string;
};

const Button: React.FC<buttonProps> = ({ listClass, content, url }) => {
  return (
    <a className={`${listClass} h-11 text-white rounded-full w-fit border-1 flex items-center pl-[60px] pr-[60px]`} href={url}>
      {content}
    </a>
  );
};

export default Button;
