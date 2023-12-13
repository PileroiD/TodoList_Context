import { useContext, useState } from "react";
import iconPencil from "../../resorces/pencil.svg";
import trashBucket from "../../resorces/trash.svg";
import { AppContext } from "../../context";

import "./Item.scss";

const Item = (props) => {
    const [newText, setNewText] = useState(props.taskInfo.text);
    const { updateTask, deleteTask } = useContext(AppContext);

    const handleChangeClick = ({ target }) => {
        target.previousElementSibling.focus();
    };

    const onValueChange = ({ target }) => {
        setNewText(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        updateTask(newText, props.taskId);
    };

    const handleDeleteItem = () => {
        deleteTask(props.taskId);
    };

    return (
        <form onSubmit={onSubmit} className="task-item">
            <input
                onChange={onValueChange}
                type="text"
                className="task-item-input"
                value={newText}
            />
            <img
                onClick={handleChangeClick}
                className="task-item-img"
                src={iconPencil}
                alt="pencil-icon"
            />
            <img
                onClick={handleDeleteItem}
                className="task-item-img"
                src={trashBucket}
                alt="trashBucket-icon"
            />
        </form>
    );
};

export default Item;
