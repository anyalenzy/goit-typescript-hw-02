import { FormEvent, FC } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (topic: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = (form.elements.namedItem("topic") as HTMLInputElement)?.value;

    if (topic.trim() === "") {
      toast.error("Please enter search term!", { position: "top-right" });
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

export default SearchBar;
