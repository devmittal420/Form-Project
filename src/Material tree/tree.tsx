// 1. First of all i have to make a list of items.
// 2. Then i have to add a expand/collapse button.
// 3. If it have children so it expand and button will showing otherwise button isnt showing.
// 4. Make a new component of children and map a list.
// 5. if there is a children so it go to children component and map it

import React,{useState} from "react";
import ChildComponent from "./childrenComponent/childrenComponent";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Fruit",
    children: [
      { name: "Apple" },
      { name: "Pomegranate" },
      { name: "Banana" },
    ],
  },
  {
    name: "Vegetables",
    children: [
      {
        name: "Green",
        children: [
          { name: "Carrot" },
          { name: "Potato" },
          { name: "Tomato" },
        ],
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }],
      },
    ],
  },
];


const TreeComponent = () => {
  // const [expandBtn, setExpandBtn] = useState(false);

//  console.log("");
 
  return (
    <div>
      <h1>Food Tree</h1>
      { <ChildComponent data={TREE_DATA} />}

      {/* <ul>
        {TREE_DATA.map((item) => (
          <li key={item.name} >
          <p onClick={()=>setExpandBtn((prev)=>!prev)}>{item.name}</p>
          {Array.isArray(item.children) && item?.children?.length > 0 && expandBtn && <ChildComponent data={item.children} />}
        </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TreeComponent;
