import BaseService from './BaseService';

export default class RandomCatImageService extends BaseService {
  async getCatImage() {
    return await this.get('https://api.thecatapi.com/v1/images/search');
  }
}
