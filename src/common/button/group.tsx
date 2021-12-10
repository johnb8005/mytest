import React from "react";

export default <A,>({
  btns,
  onClick,
  selected: pSelected,
}: {
  btns: { id: A; name: string }[];
  onClick: (id: A) => Promise<void>;
  selected: A;
}) => {
  const [selected, setSelected] = React.useState<A>(pSelected);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleClick = (v: A) => {
    onClick(v).then((_res) => {
      setSelected(v);
      setLoading(false);
    });

    setLoading(true);
  };

  return (
    <div className="btn-group" role="group">
      {btns.map((btn, i) => {
        const className =
          "btn btn-" + (selected === btn.id ? "primary" : "secondary");
        return (
          <button
            disabled={loading}
            key={i}
            type="button"
            className={className}
            onClick={() => handleClick(btn.id)}
          >
            {btn.name}
          </button>
        );
      })}
    </div>
  );
};
