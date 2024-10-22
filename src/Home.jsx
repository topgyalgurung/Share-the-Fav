import { useState } from "react";
import DisplayCard from "./DisplayCard";
import shampoo from "./assets/shampoo.jpg";

const INITIAL_DATA = [
  {
    id: 1,
    category: "shampoo",
    name: "Head & Shoulders Clinical Dandruff",
    link: "https://a.co/d/4bYjlNT",
    img: shampoo,
  },
  {
    id: 2,
    category: "bottle",
    name: "Hydro Flask ",
    link: "",
    img: "",
  },
];

const Home = () => {
  const [inventory, setInventory] = useState(INITIAL_DATA);
  return (
    <div>
      <h2> Share Your Favorite</h2>
      {inventory.map((item) => (
        <div
          key={item.id}
          className="flex flex-grow justify-between mb-5 p-5 border-2 border-solid border-black last:mb-5"
        >
          <div>
            <DisplayCard name={item.name} image={item.img} link={item.link} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
