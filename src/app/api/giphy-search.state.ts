import { GiphyAPIResponse } from "./giphy-api-response"

export type GiphySearchState = {
  loading: boolean;
  response?: GiphyAPIResponse;
  error?: string;
}
