import './Sidebar.css';
import wheelImage from '../assets/sidebar/wheel.jpg';
import tasksImage from '../assets/sidebar/tasks.jpg';

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar-shortcuts">
				<button className="shortcut-card" type="button">
					<img src={wheelImage} alt="" />
					<span>Wheel</span>
				</button>
				<button className="shortcut-card" type="button">
					<img src={tasksImage} alt="" />
					<span>Tasks</span>
				</button>
			</div>
		</aside>
	);
}

export default Sidebar;
