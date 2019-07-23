import axios from 'axios';

export default class BaseService {
  async get(axiosUrl, params = {}, headers) {
    try {
      const response = await axios.get(axiosUrl, { params, headers });
      return { success: true, data: response.data };
    } catch (error) {

      if (error.response) console.log('[GET] error.response.data', error.response.data);
      else console.log('[GET] error', error);

      return { success: false, error };
    }
  }

  async post(axiosUrl, params = {}, headers) {
    try {
      const response = await axios.post(axiosUrl, params, { headers });
      return { success: true, data: response.data };
    } catch (error) {
      if (error.response && error.response.data) {
        console.log('[POST] error.message', error.message);
        console.log('[POST] error.response.data', error.response.data);
        return { success: false, error: { message: error.message, data: error.response.data } };
      } else {
        console.log('[POST] error without response', error);
        return { success: false, error };
      }
    }
  }

  async patch(axiosUrl, params = {}, headers) {
    try {
      console.log('[PATCH]', { path: axiosUrl, headers, params });
      const response = await axios.patch(axiosUrl, params, { headers });
      return { success: true, data: response.data };
    } catch (error) {
      if (error.response && error.response.data) {
        console.log('[PATCH] error.message', error.message);
        console.log('[PATCH] error.response.data', error.response.data);
        return { success: false, error: { message: error.message, data: error.response.data } };
      } else {
        console.log('[PATCH] error without response', error);
        return { success: false, error };
      }
    }
  }

  async delete(axiosUrl, params = {}, headers) {
    try {
      console.log('[DELETE]', { path: axiosUrl, headers, params });
      await axios.delete(axiosUrl, { headers });
      return { success: true };
    } catch (error) {
      console.log('[delete] error', error);
      return { success: false, error };
    }
  }
}
