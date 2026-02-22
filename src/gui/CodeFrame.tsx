
import { Sandpack } from "@codesandbox/sandpack-react";

export function CodeFrame({ files }: { files: Record<string, string> }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <Sandpack
        template="react"
        files={{
          "/styles.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`,
          ...files
        }}
        customSetup={{
          dependencies: {
            "react-router-dom": "^6.22.0",
            "jotai": "^2.6.0",
            "zustand": "^4.5.0",
            "immer": "^10.0.0",
            "@tanstack/react-query": "^5.17.0",
            "tailwindcss": "^3.4.0",
            "postcss": "^8.4.0",
            "autoprefixer": "^10.4.0"
          }
        }}
        options={{
          externalResources: [
            "https://cdn.tailwindcss.com"
          ],
          editorHeight: "calc(100vh - 48px)"
        }}
      />
    </div>
  )
}
