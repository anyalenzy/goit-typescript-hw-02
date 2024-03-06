import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchPhotosWithTopic } from "../unsplash-api";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const per_page = 12;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setError(null);
        setLoading(true);
        setLoadMoreBtn(false);
        const res = await fetchPhotosWithTopic(currentPage, per_page, topic);
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (topic !== "") fetchImages();
  }, [currentPage, topic]);

  const handleSearch = (topic) => {
    if (topic === "") {
      setImages([]);
      return;
    }
    {
      setTopic(topic);
      setCurrentPage(1);
      setImages([]);
    }
  };

  const handleAddPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handleAddPage} />}
    </>
  );
}

export default App;
