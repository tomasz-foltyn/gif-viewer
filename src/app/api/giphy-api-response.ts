export type GiphyAPIResponse = {
  data: GiphyGIFObject[];
  meta: GiphyMetaObject;
  pagination: GiphyPaginationObject;
}

type GiphyGIFObject = {
  url: string;
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


