import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$id")({ component: BookDetail });

function BookDetail() {
  const { id } = Route.useParams();

  return (
    <div className="p-8">
      <p className="text-4xl font-bold">Book {id}</p>

      <Link to="/books">Back to list</Link>
    </div>
  );
}
