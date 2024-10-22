// provides detailed information about each item
import shampoo from "./assets/shampoo.jpg";

const DisplayCard = ({ name, img, link }) => {
  return (
    <>
      <h2 className="mb-5">{name} </h2>
      <p className="mb-2.5">Link: {link}</p>
      <p className="mb-2.5">
        Image:
        <img src={shampoo} />
      </p>
    </>
  );
};

export default DisplayCard;
