import React, { useState } from "react";
import { TaskItem } from "./TaskItem.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [inputTask, setInputTask] = React.useState("");
	const [taskList, setTaskList] = React.useState([]);
	const handleRemoveTask = (index) => {
		var newList = taskList.filter((item, ind) => index !== ind);
		setTaskList(newList);
	};
	/*const markTaskDone = (array, key) => {
		setTaskList(newList);
	}; */
	/*onClick={() => markTaskDone(index)} */
	const savingTask = (e) => {
		if (e.keyCode == 13) {
			setTaskList([...taskList, inputTask]);
			setInputTask("");
		}
	};
	return (
		<div className="big-container">
			<div className="second-container">
				<h1 className="text-muted">To-dos!</h1>
				<input
					type="text"
					onChange={(e) => setInputTask(e.target.value)}
					value={inputTask}
					onKeyUp={(e) => savingTask(e)}
				/>
				<ul>
					{taskList.map((task, index) => {
						return (
							<li key={index}>
								{task}{" "}
								<span
									name={task}
									onClick={() => handleRemoveTask(index)}>
									<i className="fa fa-trash"></i>
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
