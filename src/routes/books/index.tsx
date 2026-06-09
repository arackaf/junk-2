import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/books/")({ component: BooksList });

function BooksList() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Books</h1>
      <ol className="mt-4 list-decimal pl-6">
        {Array.from({ length: 10 }, (_, i) => {
          const id = String(i + 1);
          return (
            <li key={id} className="text-lg">
              <Link to="/books/$id" params={{ id }} className="text-blue-600 hover:underline">
                Title {id}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
