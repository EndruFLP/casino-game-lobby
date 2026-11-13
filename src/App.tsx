import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	function toggleSidebar() {
		setIsSidebarOpen((currentValue) => !currentValue);
	}
	return (
		<>
			<Header isSidebarOpen={isSidebarOpen} onMenuClick={toggleSidebar} />
			<Sidebar isOpen={isSidebarOpen} />
		</>
	);
}

export default App;

