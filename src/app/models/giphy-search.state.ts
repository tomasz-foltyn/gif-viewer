import { GiphyAPIResponse } from "./giphy-api-models"

export type GiphySearchState = {
  loading: boolean;
  response?: GiphyAPIResponse;
  error?: string;
}
