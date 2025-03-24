import { createContext, useContext, useState } from "react";

const countContext = createContext();
const CountProvider = countContext.Provider;

const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);
  return <CountProvider value={{ count, setCount }}>{children}</CountProvider>;
};
export default CountContext;
export const useCount = () => useContext(countContext);
