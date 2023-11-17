import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p>CHOISIR UN SYSTEME</p>
      <Link href="/sol">
        <input type="button" value="Sol" />
      </Link>
    </div>
  );
};

export default Home;
