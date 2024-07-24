import NavBar from "../components/_molecules/NavBar";
import Statement from "../components/_organisms/Statement";

export default function HomePage() {
  return (
    <div className="bg-bggrey min-h-screen">
      <NavBar />
      <Statement />
    </div>
  );
}
