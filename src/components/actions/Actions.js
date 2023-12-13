import AddTask from "../addTask/AddTask";
import SearchItem from "../searchItem/SearchItem";
import SortTasks from "../sortTasks/SortTasks";

import "./Actions.scss";

const Actions = () => {
    return (
        <div className="actions">
            <AddTask />
            <div className="searching">
                <SearchItem />
                <SortTasks />
            </div>
        </div>
    );
};

export default Actions;
