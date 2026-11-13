import { Bell } from 'lucide-react';
import { useState } from 'react';
import './NotificationsMenu.css';
import { mockNotifications } from '../data/mock-notifications';
function NotificationsMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [notifications, setNotifications] = useState(mockNotifications);

	const unreadCount = notifications.filter((notification) => !notification.isRead).length;

	function toggleMenu() {
		setIsOpen((currentValue) => !currentValue);
	}

	function markAsRead(id: string) {
		setNotifications((currentNotifications) =>
			currentNotifications.map((notification) =>
				notification.id === id ? { ...notification, isRead: true } : notification,
			),
		);
	}

	function markAllAsRead() {
		setNotifications((currentNotifications) =>
			currentNotifications.map((notification) => ({
				...notification,
				isRead: true,
			})),
		);
	}
	return (
		<div className="notifications-menu">
			<button
				className="utility-button notification-button"
				type="button"
				onClick={toggleMenu}
				aria-label="Open notifications"
				aria-expanded={isOpen}
			>
				<Bell size={17} />
				{unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
			</button>
			{isOpen && (
				<div className="notifications-panel">
					<div className="notifications-header">
						<h3>Notifications</h3>
						<button type="button" onClick={markAllAsRead}>
							Mark all as read
						</button>
					</div>

					<div className="notification-list">
						{notifications.map((notification) => (
							<button
								className={`notification-item ${
									notification.isRead ? '' : 'notification-item--unread'
								}`}
								type="button"
								key={notification.id}
								onClick={() => markAsRead(notification.id)}
							>
								<h4>{notification.title}</h4>
								<p>{notification.message}</p>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default NotificationsMenu;
