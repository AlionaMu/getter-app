export default class FetchService {
  static async getPosts() {
    const response = await fetch(`http://192.168.0.201:9101/getlist`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }
}
