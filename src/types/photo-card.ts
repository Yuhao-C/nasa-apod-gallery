export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
}

export interface PhotoCardInfo {
  date: string;
  explanation: string;
  hdurl: string; // exist if media type is image
  media_type: MediaType;
  title: string;
  url: string;
  img_element: HTMLImageElement;
}
