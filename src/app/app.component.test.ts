import { describe, it, expect, beforeEach, vi } from "vitest";
import { GiphyService } from "./api/giphy.service";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {

  const searchValue = 'cats';
  let service: any;
  let component: AppComponent;

  beforeEach(() => {
    service = {
      search: () => true
    };
    component = new AppComponent(service as GiphyService);
  });

  it('should contain search initial value ', () => {
    expect(component.searchValue).toEqual(searchValue);
  });

  describe('onSearch', () => {
    it('should update search value', () => {
      const newSearchValue = 'dogs';
      component.onSearch(newSearchValue);
      expect(component.searchValue).toEqual(newSearchValue);
    });

    it('should call service method', () => {
      const spy = vi.spyOn(service, 'search');
      component.onSearch('');
      expect(spy).toHaveBeenCalled();
    });
  })

  describe('onPageChange', () => {

    it('should call service method', () => {
      const spy = vi.spyOn(service, 'search');
      component.onPageChange(1);
      expect(spy).toHaveBeenCalled();
    });
  })

});
