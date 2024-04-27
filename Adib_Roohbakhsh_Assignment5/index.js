const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

// app.listen(port, () =>
//   console.log(`My App listenng at http://localhost:${port}`)
// );

const books = [
  {
    id: 1,
    title: "Animal ",
    author: "george ",
    genre: "horror",
    publicationYear: 2000,
    is_available: false,
  },
  {
    id: 2,
    title: " farm",
    author: " orvel",
    genre: "drama",
    publicationYear: 2002,
    is_available: false,
  },
  {
    id: 3,
    title: "Animal farm",
    author: "george orvel",
    genre: "drama",
    publicationYear: 2006,
    is_available: true,
  },
];

// app.get("/books", (request, response) => {
//   response.send("Hello sever");
// });

// app.get("/", function (request, response) {
//   response.send("Hello World!");
// });

app.get("/books", (request, response) => {
  let filteredBooks = books;
  const querySearch = request.query.search;
  const querySortPropery = request.query.sortProperty;
  const sortOrder = request.query.sortOrder;

  if (querySearch) {
    filteredBooks = FilterBySearchQuery(querySearch);
  }
  if (querySortPropery) {
    sortList(querySortPropery, sortOrder, filteredBooks);
  }
  response.send(filteredBooks);
});

const FilterBySearchQuery = (querySearch) => {
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(querySearch.toLowerCase()) ||
      book.author.toLowerCase().includes(querySearch.toLowerCase()) ||
      book.genre.toLowerCase().includes(querySearch.toLowerCase())
  );
};

const sortList = (property, sortedOrder, sortedList) => {
  if (property === "title") {
    sortedList = sortedList.sort((a, b) => a.title.localeCompare(b.title));
  } else if (property === "author") {
    sortedList = sortedList.sort((a, b) => a.author.localeCompare(b.author));
  } else if (property === "year") {
    sortedList = sortedList.sort((a, b) => a.publicationYear - b.publicationYear);
  }
  if (sortedOrder) {
    sortedList = sortedOrder === "desc" ? sortedList.reverse() : sortedList;
  }
  return sortedList;
};

app.get("/books/:id", (request, response) => {
  const id = +request.params.id;
  const product = books.find((book) => book.id === id);
  if (product) {
    response.send(product);
  } else {
    response.sendStatus(404);
  }
});

app.delete("/books/:id", (request, response) => {
  const id = +request.params.id;
  const book = books.find((book) => book.id === id);
  const index = books.indexOf(book);
  if (index === -1) {
    response.send().status(404);
  } else {
    books.splice(index, 1);
    response.send().status(204);
  }
});

app.post("/books", (request, response) => {
  const book = request.body;
  const id = books[books.length - 1].id + 1;
  book.id = id;
  books.push(book);
  response.sendStatus(204);
});

app.patch("/books/:id/is_available", (request, response) => {
  const id = +request.params.id;
  const book = books.find((book) => book.id === id);
  if (book) {
    book.is_available = !book.is_available;
    response.sendStatus(204);
  } else {
    response.sendStatus(404);
  }
});

app.put("/books/:id", (request, response) => {
  const id = +request.params.id;
  const updateBook = request.body;
  const book = books.find((book) => book.id === id);

  if (book) {
    const keys = Object.keys(updateBook);
    keys.forEach((key) => {
      book[key] = updateBook[key];
    });
    response.send(book);
  } else {
    response.sendStatus(404);
  }
});

app.listen(port, () =>
  console.log(`My App listenng at http://localhost:${port}`)
);
