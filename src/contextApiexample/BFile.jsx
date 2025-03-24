import { useCount } from "./context";

const BContext = () => {
  const {count} = useCount()
  return (
    <div>
      <p>count B: {count}</p>
    </div>
  );
};

export default BContext;
