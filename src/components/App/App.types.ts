export interface ImageType {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  description: string;
  user: {
    name: string;
  };
}

export interface ApiResponseType {
  total_pages: number;
  total: number;
  results: ImageType[];
}

export interface ImgInfoType {
  imgLikes: number;
  imgAuthor: string;
  srcImgModal: string;
  imgDescription: string;
}
