import css from "./ImageCard.module.css";
const ImageCard = ({ image: { urls, likes, description } }) => {
  return (
    <div className={css.imageContainer}>
      <img src={urls.small} alt={description} width="400" />
    </div>
  );
};
export default ImageCard;
