


## Some examples

```
          "/App.js": `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import About from './About';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-4 flex gap-4">
              <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}`,
          "/Home.js": `import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { countAtom } from './store';
import { useZustandStore } from './zustandStore';

export default function Home() {
  // Jotai
  const [count, setCount] = useAtom(countAtom);

  // Zustand
  const { todos, addTodo } = useZustandStore();

  // TanStack Query
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      return res.json();
    }
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        All Libraries Demo
      </h1>

      {/* Jotai */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Jotai Counter</h2>
        <p className="text-3xl mb-4">{count}</p>
        <button
          onClick={() => setCount(c => c + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>

      {/* Zustand + Immer */}
      <div className="bg-white rounded-lg shadow p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Zustand Todos</h2>
        <button
          onClick={() => addTodo('New todo #' + (todos.length + 1))}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
        >
          Add Todo
        </button>
        <ul className="list-disc pl-5">
          {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>

      {/* TanStack Query */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">TanStack Query</h2>
        {isLoading ? (
          <p>Loading user...</p>
        ) : (
          <div>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Company:</strong> {data.company.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}`,
          "/About.js": `export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About</h1>
      <p className="text-gray-600">
        This demo uses React Router for navigation between pages.
      </p>
    </div>
  );
}`,
          "/store.js": `import { atom } from 'jotai';

export const countAtom = atom(0);`,
          "/zustandStore.js": `import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useZustandStore = create(
  immer((set) => ({
    todos: [],
    addTodo: (text) => set((state) => {
      state.todos.push({ id: Date.now(), text });
    }),
  }))
);`,
```

