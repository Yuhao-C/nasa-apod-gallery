import axios, { AxiosRequestConfig } from 'axios';
import { showSnackbar } from '@/utils/snack-bar';

const request = async <T>(
  config: AxiosRequestConfig,
): Promise<T | undefined> => {
  try {
    const res = await axios.request<T>(config);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      if (error.response && error.response.data && error.response.data.error) {
        showSnackbar('error', error.response.data.error.message);
      } else if (error.response) {
        showSnackbar(
          'error',
          `${error.response.status} ${error.response.statusText}`,
        );
      } else {
        showSnackbar('error', 'Network Error');
      }
    } else {
      showSnackbar('error', 'Network Error');
    }
    return undefined;
  }
};

export default request;
