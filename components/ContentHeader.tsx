const ContentHeader = ({title, id}: {title: string; id: string}) => {
  return (
    <div
      className="text-4xl my-10 text-primary text-center font-semibold"
      id={id}
    >
      &lt;&nbsp;&nbsp; {title}&nbsp;&nbsp; /&#62;
    </div>
  );
};

export default ContentHeader;
