import { describe, it, expect, beforeEach } from "vitest";
import { GiphyGIFObject } from "./giphy-api-models";
import { ListItem } from "./list-item";

describe('List method create', () => {

  let listItem: ListItem;
  const url = 'webp';
  const title = 'title';

  beforeEach(() => {
    listItem = ListItem.create({
      images: { fixed_height_small: { webp: url } },
      title: title
    } as GiphyGIFObject);
  })

  it('should take fixed height small webp url from input', () => {
    expect(listItem.url).toEqual(url)
  })

  it('should take title from input', () => {
    expect(listItem.title).toEqual(title)
  })

})
