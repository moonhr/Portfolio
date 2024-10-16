import Tag from "../atom/tag";

const Tags = ({
  tags,
}: {
  tags: { name: string; title: string; date: string };
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Tag text={tags.name} />
      <div className="flex flex-row justify-between w-full h-full items-end">
        <Tag text={tags.title} />
        <Tag text={tags.date} />
      </div>
    </div>
  );
};

export default Tags;
