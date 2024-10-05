import { Header } from "../components/header";
import { GameField, GameTitle, GameInfo } from "../components/game";
import { useState } from "react";

export default function HomePage() {
  const [playersCount] = useState(3);
  return (
    <div className="bg-red-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className={"mt-4"} />
        <GameField playersCount={playersCount} className={"mt-5"} />
      </main>
    </div>
  );
}
