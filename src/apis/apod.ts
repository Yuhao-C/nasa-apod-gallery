import request from '@/utils/request';
import { PhotoCardInfo } from '@/types/photo-card';

export const getAPOD = (count: number): Promise<PhotoCardInfo[] | undefined> =>
  request<PhotoCardInfo[]>({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    params: { count },
  });
