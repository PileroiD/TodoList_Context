import Item from "../Item/Item";

import "./ItemsList.scss";

const ItemsList = ({ tasks }) => {
    const tasksList = tasks.map((task) => {
        return <Item key={task.id} taskId={task.id} taskInfo={task} />;
    });

    return <div className="task-wrapper">{tasksList}</div>;
};

export default ItemsList;
