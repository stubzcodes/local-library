function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id );
}

function partitionBooksByBorrowedStatus(books) {
  const currentlyBorrowed = books.filter((book) => book.borrows[0].returned === false);
  const currentlyReturned = books.filter((book) => book.borrows[0].returned === true);

  return [currentlyBorrowed, currentlyReturned];
}

function getBorrowersForBook(book, accounts) {
  //create an array of all borrowers for a particular book (accounts data)
  const borrow = book.borrows
  let result = []

  for(let idx = 0; idx < borrow.length; idx++){
    const account = accounts.find((acc) => acc.id === borrow[idx].id)
    account.returned = borrow[idx].returned
    result.push(account)
  }
  return result.splice(0,10)


    //add returned object from books data

    //limit that list to 10 accounts
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
