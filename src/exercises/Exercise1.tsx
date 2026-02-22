
import { Sandpack } from "@codesandbox/sandpack-react";

export default function Exercise() {
  return (
    <Sandpack
      template="react"
      files={{
        "/App.js": `export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello Tailwind!
        </h1>
        <p className="text-gray-600">
          Custom Tailwind config is working! 🎉
        </p>
      </div>
    </div>
  );
}`,
        "/styles.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        "/tailwind.config.js": `module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': '#1fb6ff',
      },
    },
  },
  plugins: [],
}`,
      }}
      customSetup={{
        dependencies: {
          "tailwindcss": "^3.4.0",
          "postcss": "^8.4.0",
          "autoprefixer": "^10.4.0"
        }
      }}
      options={{
        externalResources: [
          "https://cdn.tailwindcss.com"
        ]
      }}
    />
  );
}

