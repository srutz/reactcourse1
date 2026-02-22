
import { CodeFrame } from "@/gui/CodeFrame";

export default function Exercise() {
  return (
    <CodeFrame files={{
      "/App.tsx": `export default function App() {
  return <h1>Edit me example</h1>
}`,
    }}></CodeFrame>)
}
