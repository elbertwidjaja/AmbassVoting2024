import ricky from "../assets/image/ricky.jpg";

export default function Card({ image, name }) {
  return (
    <div className="card-container min-h-30 w-full relative border border-white rounded">
      <img src={ricky} alt="" className=" Card-Image rounded" />

      <div className="Card-Name absolute bottom-2 left-5 text-white font-bold text-md md:text-xl ">
        Ricky
      </div>
    </div>
  );
}
