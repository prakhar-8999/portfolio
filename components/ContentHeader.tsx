const ContentHeader = ({title, id}: {title: string; id: string}) => {
  return (
    <span className="text-4xl mt-10 text-primary font-semibold" id={id}>
      &lt; {title} /&#62;
    </span>
  );
};

export default ContentHeader;
