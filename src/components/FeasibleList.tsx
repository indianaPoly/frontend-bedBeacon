const FeasibleNameContainer = ({ name }: { name: string }) => {
  return <span className=" font-bold text-[15px]">{name}</span>;
};

const FesasibleContainer = ({ feasible }: { feasible: boolean }) => {
  return (
    <span className="font-bold text-[14px]">
      {feasible ? '가능' : '불가능'}
    </span>
  );
};

const FeasibleList = ({
  name,
  feasible,
}: {
  name: string;
  feasible: boolean;
}) => {
  return (
    <article
      className={`flex justify-between w-[200px] h-auto rounded-[16px] border border-[rgba(16, 17, 18, 0.10)] p-[15px] gap-[16px] ${
        feasible ? ' bg-sky-300' : ' bg-red-300'
      }`}
    >
      <div>
        <FeasibleNameContainer name={name} />
      </div>
      <div>
        <FesasibleContainer feasible={feasible} />
      </div>
    </article>
  );
};

export default FeasibleList;
