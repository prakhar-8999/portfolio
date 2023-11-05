const ContentHeader = ({
  title,
  id,
  className,
}: {
  title: string;
  id: string;
  className?: string;
}) => {
  return (
    <div
      className={`text-4xl my-10 text-primary text-center font-semibold ${className}`}
      id={id}
    >
      &lt;&nbsp;&nbsp; {title}&nbsp;&nbsp; /&#62;
    </div>
  );
};

export default ContentHeader;
