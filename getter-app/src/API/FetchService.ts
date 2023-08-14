import { url } from "../constants/constants"

export default class FetchService {
  static async getPosts() {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.json()
  }
}
