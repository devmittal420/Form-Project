import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
let direction = 1;

const InfiniteCounter = () => {
  const [val, setVal] = useState(0);
  const [color, setColor] = useState("white");
  const counterRef = useRef(null);
  const colors = [
    "Crimson", "RoyalBlue", "Gold", "DarkOrange", "LimeGreen", "DeepPink", "DodgerBlue", 
    "MediumPurple", "Coral", "Turquoise", "Tomato", "SlateBlue", "SpringGreen", "FireBrick", 
    "SteelBlue", "GoldenRod", "DarkMagenta", "DarkSlateBlue", "SeaGreen", "Chocolate", 
    "DarkTurquoise", "MediumSeaGreen", "Peru", "Teal", "RebeccaPurple", "Violet", 
    "DarkRed", "Sienna", "LightSeaGreen", "OrangeRed", "Orchid", "Salmon", 
    "MediumSlateBlue", "Chartreuse", "HotPink", "PaleVioletRed", "Navy", "DarkCyan", 
    "Indigo", "SlateGray", "DarkO liveGreen", "Plum"
  ];
  
  useEffect(() => {
    // console.log("useEffect");
    counterRef.current = setInterval(() => {
      console.log("SetInterval Triggered");
      setVal((prev) => {
        const newVal = direction === 1 && prev < 3 ? prev + 1 : prev - 1;
        const randomColor = Math.floor(Math.random() * colors.length);
        console.log("randomColor: ", randomColor);

        document.body.style.backgroundColor = colors[randomColor];

        if (newVal === 0) {
          direction = 1;
        } else if (newVal === 3) {
          direction = -1;
        }

        return newVal;
      });
    }, 1000);

    return () => {
      console.log("Ref: ", counterRef.current);
      if (counterRef.current) {
        clearInterval(counterRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Count: {val}</h1>
      <Link to={"/out"}>Go to out</Link>
    </div>
  );
};

export default InfiniteCounter;
