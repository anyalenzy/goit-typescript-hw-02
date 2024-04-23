import { FC } from "react";
import css from "./ImageCard.module.css";
import { ImageType, ImgInfoType } from "../App/App.types";

interface ImageCardProps {
  image: ImageType;
  onImgClick: (image: ImgInfoType) => void;
}

const ImageCard: FC<ImageCardProps> = ({
  image: { urls, likes, description, user },
  onImgClick,
}) => {
  const imgDataInfo = {
    imgAuthor: user.name,
    imgLikes: likes,
    srcImgModal: urls.regular,
    imgDescription: description,
  };
  return (
    <div className={css.imageContainer} onClick={() => onImgClick(imgDataInfo)}>
      <img src={urls.small} alt={description} width="400" />
    </div>
  );
};
export default ImageCard;
