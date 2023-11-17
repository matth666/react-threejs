import Link from "next/link";
import Button from "../../web/components/Button";

const Home = () => {
  return (
    <div>
      <p className="ml-10 font-bold italic">CHOISIR UN SYSTEME</p>
      <Link href="/sol">
        <Button className="m-5 p-2 border-2 border-blue-600 rounded bg-blue-300">
          Sytème SOL
        </Button>
      </Link>
    </div>
  );
};

export default Home;
