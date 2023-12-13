import { useContext, useState } from "react";
import searchIcon from "../../resorces/search.svg";
import { AppContext } from "../../context";
import "./SearchItem.scss";

const SearchItem = () => {
    const [searchText, setSearchText] = useState("");
    const { searchTask, showAllTasks, wasSearched, setWasSearched } =
        useContext(AppContext);

    const onValueChangeSearch = ({ target }) => {
        setSearchText(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchText && searchText.length < 60) {
            searchTask(searchText);
            setSearchText("");
            setWasSearched(true);
        }
    };

    const onClickShowAllTasks = () => {
        showAllTasks();
        setWasSearched(false);
    };

    return (
        <form onSubmit={onSubmit} className="searchItem">
            <input
                required
                type="text"
                className="searchItem-input"
                placeholder="Search task"
                value={searchText}
                onChange={onValueChangeSearch}
            />
            <button className="searchItem-button" type="submit">
                <img src={searchIcon} alt="searchIcon" />
            </button>
            {wasSearched && (
                <div className="searchItem-showAll">
                    <button
                        onClick={onClickShowAllTasks}
                        className="searchItem-showAll-button"
                    >
                        Show all tasks
                    </button>
                </div>
            )}
        </form>
    );
};

export default SearchItem;
