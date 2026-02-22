
import Exercise1 from "./exercises/Exercise1";

export function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col p-8">
      <div className="bg-zinc-100 grow flex flex-col">
        <h1 className="text-2xl font-bold">Code your stuff</h1>
        <Exercise1 />
      </div>
    </div>
  )
}

