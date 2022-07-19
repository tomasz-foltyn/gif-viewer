export type GiphyAPIResponse = {
  data: GiphyGIFObject[];
  meta: GiphyMetaObject;
  pagination: GiphyPaginationObject;
}

export type GiphyGIFObject = {
  images: GiphyImageObject;
  url: string;
  title: string;
}

type GiphyImageObject = {
  fixed_height: GiphyImage;
  fixed_height_small: GiphyImage;
  fixed_width: GiphyImage;
}

type GiphyImage = {
  url: string;
  mp4: string;
  webp: string;
}

type GiphyMetaObject = {
  msg: string;
  response_id: string;
  status: number;
}

type GiphyPaginationObject = {
  count: number;
  offset: number;
  total_count: number;
}


