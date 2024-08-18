// components/Main.js
import { useState } from "react";
import Form from "./Form";
import Toast from "./Toast";

export default function Main() {
  const [lastBook, setLastBook] = useState(null);

  const addBook = (book) => {
    setLastBook(book);
  };

  return (
    <main className="container mx-auto px-4">
      <Form addBook={addBook} />
      <Toast book={lastBook} />
    </main>
  );
}
