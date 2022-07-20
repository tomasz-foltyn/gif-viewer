export class PaginationData {

  constructor(
    public activePage: number,
    public lastPage: number,
    public pages: number[]
  ){}

  static create(pageSize: number, offset: number, totalCount: number): PaginationData {
    if (pageSize > 0) {
      const activePage = 1 + (offset/pageSize)
      const lastPage = Math.ceil(totalCount/pageSize) || 1
      let pages: number[] = []
      if (lastPage === 1) {
        pages = [1]
      } else if (lastPage === 2) {
        pages = [1,2]
      } else if (lastPage === 3) {
        pages = [1,2,3]
      } else if (lastPage === activePage) {
        pages = [lastPage - 2, lastPage - 1, lastPage]
      } else if (activePage === 1) {
        pages = [1, 2, 3]
      } else {
        pages = [activePage - 1, activePage, activePage + 1]
      }
      return new PaginationData(activePage, lastPage, pages)
    }
    return new PaginationData(1, 1, [1])
  }
}
