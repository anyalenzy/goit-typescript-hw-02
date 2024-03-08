import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ImageModal = ({
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
