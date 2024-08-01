import { useNavigate } from "react-router-dom";
import data from "../dumy/data";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa6";
const Card = ({ brand, name, price, id, setPurchases, rating }) => {
  const navigate = useNavigate();

  const addToCard = () => {
    const product = data.find((product) => product.id == id);
    console.log(product);
    setPurchases((prevPurchases) => [...prevPurchases, product]);
    toast.success("Item added to Card!");
  };
  return (
    <div className="border border-gray-200 h-[27rem] w-64 rounded-md shadow-sm my-4">
      <div className="h-60">
        <img
          src="https://saeedghani.pk/cdn/shop/files/Aqua_1024x1024.jpg?v=1696590880"
          className="rounded-t-md h-full w-full"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-[700] my-[1px] text-orange-400">{name}</h1>
        <h1 className="text-xl font-[700] underline">{brand}</h1>
        <h1 className="text-sm text-red-600 font-bold relative">
          Original Price: <span className=" ">{price} PKR</span>
          <div className="absolute w-[10rem] mx-auto border-red-500 top-[0.70rem] border"></div>
        </h1>
        <h1 className="text-sm text-red-600 font-bold">
          Sale Price: <span className=" ">{price} PKR</span>
        </h1>
        <div>
          {" "}
          <h1 className="text-red-500 font-[600]">17% off</h1>{" "}
          <h1 className="flex items-center gap-2 font-[600]">
            {" "}
            <FaStar color="yellow" />
            {rating}{" "}
          </h1>
        </div>
      </div>
      <div className="text-sm flex justify-between mx-4 font-[bold] my-2">
        <button
          onClick={() => navigate(`/products/${id}`)}
          className="bg-black text-white px-2 rounded-md py-[2px]"
        >
          Details
        </button>
        <button
          className="bg-black text-white px-2 rounded-md py-[2px]"
          onClick={addToCard}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Card;
