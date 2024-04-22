import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchPhotosWithTopic } from "../../unsplash-api";
import ImageModal from "../ImageModal/ImageModal";
import { ApiResponseType, ImageType, ImgInfoType } from "./App.types";

function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTopic, setSearchTopic] = useState<string>("");
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imgInfo, setImgInfo] = useState<ImgInfoType>({
    imgLikes: 0,
    imgAuthor: "",
    srcImgModal: "",
    imgDescription: "",
  });
  const per_page = 12;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setError(null);
        setLoading(true);
        setLoadMoreBtn(false);
        const res: ApiResponseType = await fetchPhotosWithTopic(
          currentPage,
          per_page,
          searchTopic
        );
        if (res.total === 0) {
          setImages([]);
          setError(
            "Sorry, there are no images matching your search query. Please try again!"
          );
        } else {
          setImages((prevImages) => [...prevImages, ...res.results]);
          if (currentPage < res.total_pages) {
            setLoadMoreBtn(true);
          } else setLoadMoreBtn(false);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchTopic !== "") fetchImages();
  }, [currentPage, searchTopic]);

  const handleSearch = (topic: string): void => {
    if (topic !== "" && topic !== searchTopic) {
      setSearchTopic(topic);
      setCurrentPage(1);
      setImages([]);
    }
  };
  const handleAddPage = (): void => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleImgClick = (image: ImgInfoType): void => {
    setImgInfo(image);
    openModal();
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };
  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImgClick={handleImgClick} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handleAddPage} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        modalOnClose={closeModal}
        {...imgInfo}
      />
    </>
  );
}

export default App;
