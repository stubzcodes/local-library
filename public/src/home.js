function getBookByAuthor(books, author) {
  return books.filter((book) => book.authorId === author.id)
}


function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const currentlyBorrowed = books.filter((book) => book.borrows[0].returned === false)
  return currentlyBorrowed.length
}

function getMostCommonGenres(books) {
  const genreCounts = [];

  books.forEach((book) => {
    const genre = book.genre

    const genreExist = genreCounts.some((genre) => {
      
      return genre.name === book.genre 
      
    })
     
    if (genreExist){
      const foundGenre = genreCounts.find((genre) => {
        return book.genre === genre.name
      })
      foundGenre.count++
      console.log(foundGenre) 
    } else{
      genreCounts.push({name: genre, count: 1})
    }
  }) 
  
  genreCounts.sort((genreA, genreB) => genreB.count - genreA.count )
  return genreCounts.slice(0,5)


}

function getMostPopularBooks(books) {
  const bookCount = books.reduce((acc, book) => {
    acc.push({ name: book.title, count: book.borrows.length })
    return acc
  }, [])
  bookCount.sort((bookA, bookB) => bookB.count - bookA.count)
  return bookCount.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = []

  authors.forEach((author) => {
  
    let cnt = 0
    const booked = getBookByAuthor(books, author)
    
    booked.forEach((book) => cnt+= book.borrows.length)
    
    popularAuthors.push({ name: `${author.name.first} ${author.name.last}`, count: cnt })
  })

  popularAuthors.sort(( authorA, authorB) => authorB.count - authorA.count)

  return popularAuthors.slice(0,5)
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
