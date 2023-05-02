export default class PostService {
  static async getAll(limit = 10, page = 2) {
    const response = await fetch(`https://tetreco.com/api/catalog/?page=${page}&page_size=${limit}`);
    const result = await response.json();
    console.log(result);
    return result;
  }
}
