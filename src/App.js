import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Complete upskilling",
			day: "Mar 4",
			reminder: true,
		},
		{
			id: 2,
			text: "Chest day",
			day: "Mar 5",
			reminder: false,
		},
		{
			id: 3,
			text: "Mommy dentist",
			day: "Mar 5",
			reminder: true,
		},
	]);

	// delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((x) => x.id !== id));
	};

	// toggle reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((x) =>
				x.id === id ? { ...x, reminder: !x.reminder } : x
			)
		);
	};

	return (
		<div className='container'>
			<Header name='Chan' />
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"No tasks"
			)}
		</div>
	);
}

export default App;
