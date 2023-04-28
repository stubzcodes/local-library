function findAccountById(accounts, id) {
  let user = accounts.find((accounts) => accounts.id === id );
  return user
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1);

}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      borrow.id === account.id ? counter++ : null
    })
  });
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;

  return books.filter((book) => {
    const recentBorrow = book.borrows[0];
    return (
      recentBorrow.id === accountId && 
      !recentBorrow.returned
    );
  }).map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
}
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
