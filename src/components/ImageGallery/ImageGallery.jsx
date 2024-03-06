import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
