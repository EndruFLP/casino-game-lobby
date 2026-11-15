import { Bell } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import './NotificationsMenu.css';
import { mockNotifications } from '../data/mock-notifications';
import type { Notification } from '../types/notification';
import NotificationModal from './NotificationModal';

function NotificationsMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [notifications, setNotifications] = useState(mockNotifications);
	const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
	const menuRef = useRef<HTMLDivElement>(null);
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

	function openNotification(notification: Notification) {
		setSelectedNotification(notification);
		markAsRead(notification.id);
		setIsOpen(false);
	}

	function markAllAsRead() {
		setNotifications((currentNotifications) =>
			currentNotifications.map((notification) => ({
				...notification,
				isRead: true,
			})),
		);
	}

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		function handleEscape(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);

	return (
		<div className="notifications-menu" ref={menuRef}>
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
						{unreadCount > 0 && (
							<button type="button" onClick={markAllAsRead}>
								Mark all as read
							</button>
						)}
					</div>

					<div className="notification-list">
						{notifications.map((notification) => (
							<button
								className={`notification-item ${
									notification.isRead ? '' : 'notification-item--unread'
								}`}
								type="button"
								key={notification.id}
								onClick={() => openNotification(notification)}
							>
								<h4>{notification.title}</h4>
								<p>{notification.message}</p>
								<time dateTime={notification.createdAt}>
									{new Date(notification.createdAt).toLocaleString('en-GB', {
										day: '2-digit',
										month: 'short',
										hour: '2-digit',
										minute: '2-digit',
									})}
								</time>
							</button>
						))}
					</div>
				</div>
			)}
			{selectedNotification && (
				<NotificationModal notification={selectedNotification} onClose={() => setSelectedNotification(null)} />
			)}
		</div>
	);
}

export default NotificationsMenu;
