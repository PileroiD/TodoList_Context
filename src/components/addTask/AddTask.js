import { useContext, useState } from "react";
import "./AddTask.scss";
import { AppContext } from "../../context";

const AddTask = () => {
    const [text, setText] = useState("");
    const { addTask } = useContext(AppContext);

    const onSubmit = (event) => {
        event.preventDefault();
        if (text && text.length < 60) {
            addTask(text);
        }
        setText("");
    };

    const onValueChange = ({ target }) => {
        setText(target.value);
    };

    return (
        <form onSubmit={onSubmit} className="addTask-form">
            <input
                required
                onChange={onValueChange}
                className="addTask-input"
                type="text"
                placeholder="Add a new task"
                value={text}
            />
            <button className="addTask-button" type="submit">
                Add
            </button>
        </form>
    );
};

export default AddTask;
