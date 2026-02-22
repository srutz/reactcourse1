
import { Outlet } from "react-router";
import { Menu } from "./gui/Menu";

export function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col p-0">
      <Menu />
      <div className="grow flex flex-col bg-zinc-200">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

