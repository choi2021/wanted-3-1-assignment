import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  private baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  create(): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl,
      timeout: 1000 * 10,
    });
  }
}
