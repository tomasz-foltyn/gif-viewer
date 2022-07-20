import { PaginationData } from "./pagination-data";
import { describe, it, expect } from "vitest";

describe('Pagination data method create', () => {

  describe('parameter activePage', () => {

    it('should be 1 when user is on first page', () => {
      const pd = PaginationData.create(10,0,1);
      expect(pd.activePage).toBe(1);
    })

    it('should be 2 when user is on second page', () => {
      const pd = PaginationData.create(10,10,11);
      expect(pd.activePage).toBe(2);
    })

    it('should be 1 when list is empty', () => {
      const pd = PaginationData.create(10,0,0);
      expect(pd.activePage).toBe(1);
    })

    it('should be 1 when list is empty', () => {
      const pd = PaginationData.create(10,0,0);
      expect(pd.activePage).toBe(1);
    })

    it('should be 1 when page size is lower than 1', () => {
      const pd = PaginationData.create(0,10,20);
      expect(pd.activePage).toBe(1);
    })

  })

  describe('parameter lastPage', () => {

    it('should be 1 when list is empty', () => {
      const pd = PaginationData.create(10,0,0);
      expect(pd.lastPage).toBe(1);
    })

    it('should be 1 when there are less results than page size', () => {
      const pd = PaginationData.create(10,0,9);
      expect(pd.lastPage).toBe(1);
    })

    it('should be 2 when list has 2 pages', () => {
      const pd = PaginationData.create(10,10,11);
      expect(pd.lastPage).toBe(2);
    })

    it('should be 1 when page size is lower than 1', () => {
      const pd = PaginationData.create(0,10,20);
      expect(pd.lastPage).toBe(1);
    })
  });

  describe('parameter pages', () => {

    it('should equal to [1] when list is empty', () => {
      const pd = PaginationData.create(10,0,0);
      expect(pd.pages).toEqual([1]);
    })

    it('should equal to [1] when list has only one page', () => {
      const pd = PaginationData.create(10,0,9);
      expect(pd.pages).toEqual([1]);
    })

    it('should equal to [1,2] when list has 2 pages', () => {
      const pd = PaginationData.create(10,0,11);
      expect(pd.pages).toEqual([1,2]);
    })

    it('should equal to [1,2,3] when list has 3 pages', () => {
      const pd = PaginationData.create(10,0,21);
      expect(pd.pages).toEqual([1,2,3]);
    })

    it('should equal to [3,4,5] when user is on 4th page and list has more than 4 pages', () => {
      const pd = PaginationData.create(10,30,50);
      expect(pd.pages).toEqual([3,4,5]);
    })

    it('should equal to [2,3,4] when user is on 4th page and list has only 4 pages', () => {
      const pd = PaginationData.create(10,30,40);
      expect(pd.pages).toEqual([2,3,4]);
    })

    it('should equal to [1] when page size is lower than 1', () => {
      const pd = PaginationData.create(0,10,20);
      expect(pd.pages).toEqual([1]);
    })
  });

});
