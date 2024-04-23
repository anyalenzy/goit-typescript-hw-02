import css from "./ImageModal.module.css";
import ReactModal from "react-modal";
import { FC } from "react";
import { ImgInfoType } from "../App/App.types";

ReactModal.setAppElement("#root");

interface ImageModalProps extends ImgInfoType {
  modalIsOpen: boolean;
  modalOnClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  modalOnClose,
  imgLikes,
  imgAuthor,
  srcImgModal,
  imgDescription,
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={modalOnClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={srcImgModal} alt={imgDescription} />
        <div className={css.imgInfo}>
          <p>{imgDescription}</p>
          <div className={css.imgInfoDown}>
            <p>Author: {imgAuthor}</p>
            <p>Likes: {imgLikes}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
export default ImageModal;
