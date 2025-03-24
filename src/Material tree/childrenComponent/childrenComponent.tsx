import React, { useState } from "react";

const Child = ({data}) =>{
  const [expandBtn, setExpandBtn] = useState(false);
  return <li>
          <p onClick={()=>setExpandBtn((prev)=>!prev)}>{data.name}</p>
          {data?.children?.length > 0 && expandBtn && <ChildComponent data={data.children} />}
        </li>;
}
const ChildComponent = ({ data }) => {
  
  return (
    <ul>
      {data?.map((child) => {
       return <Child key={child.name} data={child}/>
      })}
    </ul>
  );
};

export default ChildComponent;
