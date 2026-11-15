import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import type { MainSection } from './types/main-section';
import { useState } from 'react';
import './App.css';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [activeSection, setActiveSection] = useState<MainSection>('casino');

	function toggleSidebar() {
		setIsSidebarOpen((currentValue) => !currentValue);
	}
	return (
		<>
			<Header
				isSidebarOpen={isSidebarOpen}
				onMenuClick={toggleSidebar}
				activeSection={activeSection}
				onSectionChange={setActiveSection}
			/>
			<div className="app-body">
				<Sidebar isOpen={isSidebarOpen} />
				<MainContent activeSection={activeSection} />
			</div>
		</>
	);
}

export default App;

