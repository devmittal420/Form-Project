import { createContext, useContext, useState } from "react";

const makeContext = createContext();
const ContextProvider = makeContext.Provider;

const CreateContext = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ContextProvider value={{ count, setCount }}>{children}</ContextProvider>
  );
};
export default CreateContext;
export const useCount = () => useContext(makeContext);
