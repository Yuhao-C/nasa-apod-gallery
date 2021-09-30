import request from '@/utils/request';
import { PhotoCardInfo } from '@/types/photo-card';
import { VisitorInfo } from '@/types/visitor-info';

const API_KEY = 'P8UVjf0yUb46x8kKBnix33ea7SgMPldKXBRc297e';

export const getAPOD = (count: number): Promise<PhotoCardInfo[] | undefined> =>
  request<PhotoCardInfo[]>({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    params: { count, api_key: API_KEY },
  });

export const getVisitorInfo = (): Promise<VisitorInfo | undefined> =>
  request<VisitorInfo>({
    url: 'https://ipapi.co/json',
    method: 'GET',
  });

export const sendVisitorInfo = async (): Promise<void> => {
  const visitorInfo = await getVisitorInfo();
  if (visitorInfo) {
    const { ip, city, region, country, latitude, longitude, org } = visitorInfo;
    request({
      url: 'https://vw4pg0lobb.execute-api.us-east-1.amazonaws.com/default/visitor',
      method: 'POST',
      data: {
        ip,
        city,
        region,
        country,
        latitude,
        longitude,
        org,
        time: Date.now(),
      },
    });
  }
};
