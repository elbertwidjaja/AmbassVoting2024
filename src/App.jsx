import "./index.css";
import Card from "./components/Card";
import ricky from "./assets/image/ricky.jpg";

function App() {
  return (
    <main className="bg-dark-gray p-8 min-h-screen w-full flex flex-col justify-center items-center">
      <div className="content-container w-[90%] grid grid-cols-2 justify-around items-center gap-8 md:justify-center md:grid-cols-3 md:w-[60%] lg:grid-cols-4 lg:w-[60%]">
        <Card image={ricky}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <div className="vote-container w-[90%] flex border-2 mt-8 rounded border-white md:w-[60%] lg:w-[30%]">
        <input type="text" className="p-2 px-2 w-full" />
        <button className=" bg-black hover:bg-black text-gold font-bold py-2 px-8 border border-black rounded">
          Vote
        </button>
      </div>
    </main>
  );
}

export default App;
