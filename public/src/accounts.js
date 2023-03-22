function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) => (lastA.name.last > lastB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => total + book.borrows.filter(borrow => borrow.id === account.id).length, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.find(borrow => borrow.id === account.id && !borrow.returned)).map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
