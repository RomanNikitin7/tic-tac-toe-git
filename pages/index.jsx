import { Header } from "../components/header";
import { GameField, GameTitle, GameInfo } from "../components/game";

export default function HomePage() {
  return (
    <div className="bg-red-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-max">
        <GameTitle />
        <GameInfo className={"mt-4"} />
        <GameField className={"mt-5"} />
      </main>
    </div>
  );
}