import { CodeFrame } from "@/gui/CodeFrame";


export function Excercise1() {
  return (
    <CodeFrame files={{
      "/App.tsx": `console.log("Hello  again")`,
    }}></CodeFrame>
  )
};
