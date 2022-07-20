import { GiphyGIFObject } from "./giphy-api-models";

export class ListItem {

  constructor(public url: string, public title: string) {}

  static create(obj: GiphyGIFObject): ListItem {
    return new ListItem(obj.images.fixed_height_small.webp, obj.title);
  }
};
