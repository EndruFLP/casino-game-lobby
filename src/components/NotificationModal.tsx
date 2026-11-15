import type { Notification } from '../types/notification';
import './NotificationModal.css';
import { X } from 'lucide-react';

type NotificationModalProps = {
	notification: Notification;
	onClose: () => void;
};

function NotificationModal({ notification, onClose }: NotificationModalProps) {
	return (
		<div className="notification-modal-backdrop">
			<div className="notification-modal" onClick={(event) => event.stopPropagation()}>
				<button
					className="notification-modal-close"
					type="button"
					onClick={onClose}
					aria-label="Close notification"
				>
					<X size={18} />
				</button>
				<h2>{notification.title}</h2>
				<p>{notification.message}</p>
				<time dateTime={notification.createdAt}>
					{new Date(notification.createdAt).toLocaleString('en-GB', {
						dateStyle: 'medium',
						timeStyle: 'short',
					})}
				</time>
			</div>
		</div>
	);
}

export default NotificationModal;
