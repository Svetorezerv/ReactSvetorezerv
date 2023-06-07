export default class PostService {
  static async getAll(limit = 10, page = 2) {
    const response = await fetch(`https://tetreco.com/api/catalog/?page=${page}&page_size=${limit}`);
    const result = await response.json();
    return result;
  }

  static async getParentСategories() {
    const response = await fetch(`https://tetreco.com/api/catalog/parent_categories/`);
    const result = await response.json();
    return result;
  }

  static async getСategoriesChild(categoryName, page, limit) {
    const response = await fetch(`https://tetreco.com/api/catalog/${categoryName}/subcategories/?page=${page}&page_size=${limit}`);
    const result = await response.json();
    return result;
  }

  static async getsSubСategoriesItems(subCategoryName, page, limit) {
    const response = await fetch(`https://tetreco.com/api/catalog/${subCategoryName}/ads?page=${page}&page_size=${limit}`);
    const result = await response.json();
    return result;
  }

  static async getsFinalItemId(category, subcategory, id) {
    const response = await fetch(`https://tetreco.com/api/catalog/${category}/${subcategory}/${id}`);
    const result = await response.json();
    return result;
  }

  static async getById(id, page, limit) {
    const response = await fetch(`https://tetreco.com/api/catalog/?search=${id}&page=${page}&page_size=${limit}`);
    const result = await response.json();
    return result;
  }
}