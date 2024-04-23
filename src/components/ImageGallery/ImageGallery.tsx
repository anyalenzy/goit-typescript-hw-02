import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageType, ImgInfoType } from "../App/App.types";

interface ImageGalleryProps {
  images: ImageType[];
  onImgClick: (image: ImgInfoType) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImgClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onImgClick={onImgClick} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
