import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Please enter search term!");
import { CiSearch } from "react-icons/ci";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === "") {
      toast.error("Please enter search term!", { position: "top right" });
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          name="topic"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <CiSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};
