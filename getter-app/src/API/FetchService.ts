export default class FetchService {
  static async getPosts() {

    const response = await fetch(`https://....`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return response.json();
  };
}