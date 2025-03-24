import { useCount } from "./UseContext";

const B = () => {
  const { count } = useCount();
  return (
    <div>
      <p>Hello i am B component</p>
      <p>count:{count}</p>
    </div>
  );
};
export default B;
