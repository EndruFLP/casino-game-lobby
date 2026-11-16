import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import WithdrawModal from './components/WithdrawModal';
import DepositModal from './components/DepositModal';
import type { MainSection } from './types/main-section';
import { useState } from 'react';
import './App.css';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [activeSection, setActiveSection] = useState<MainSection>('casino');
	const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
	const [isDepositOpen, setIsDepositOpen] = useState(false);

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
				onOpenWithdraw={() => setIsWithdrawOpen(true)}
				onOpenDeposit={() => setIsDepositOpen(true)}
			/>
			<div className="app-body">
				<Sidebar isOpen={isSidebarOpen} />
				<MainContent activeSection={activeSection} />
			</div>
			{isWithdrawOpen && <WithdrawModal onClose={() => setIsWithdrawOpen(false)} />}
			{isDepositOpen && <DepositModal onClose={() => setIsDepositOpen(false)} />}
		</>
	);
}

export default App;

