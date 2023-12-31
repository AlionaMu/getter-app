import { url, urlWithHtmlData, urlWithId } from "../constants/constants";

export default class FetchService {
  static async getPosts() {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  };
  static async getById(input: string) {
    const response = await fetch(`${urlWithId}${input}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return response.json();
  };
  static async getHtmlData() {
    const response = await fetch(urlWithHtmlData, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      }
    });
    return response.text();
  };
}
