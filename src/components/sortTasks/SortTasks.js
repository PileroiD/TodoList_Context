import { useContext } from "react";
import "./SortTasks.scss";
import { AppContext } from "../../context";

const SortTasks = () => {
    const { sortTasks } = useContext(AppContext);
    return (
        <div className="sortTasks">
            <button onClick={() => sortTasks()} className="sortTasks-button">
                Sort by alphabet
            </button>
        </div>
    );
};

export default SortTasks;
