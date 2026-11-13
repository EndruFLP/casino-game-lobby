import type { Notification } from '../types/notification';

export const mockNotifications: Notification[] = [
	{
		id: 'welcome-bonus',
		title: 'Welcome bonus unlocked',
		message: 'Your first casino bonus is ready to claim.',
		createdAt: '2026-11-13T16:30:00.000Z',
		isRead: false,
	},
	{
		id: 'new-games',
		title: 'New games available',
		message: 'Explore the latest releases from Play’n GO.',
		createdAt: '2026-11-13T14:15:00.000Z',
		isRead: false,
	},
	{
		id: 'daily-tasks',
		title: 'Daily tasks refreshed',
		message: 'Complete today’s challenges to earn rewards.',
		createdAt: '2026-11-13T10:00:00.000Z',
		isRead: false,
	},
	{
		id: 'cashback',
		title: 'Weekly cashback',
		message: 'Your weekly cashback reward has been added.',
		createdAt: '2026-11-12T18:00:00.000Z',
		isRead: false,
	},
	{
		id: 'tournament',
		title: 'Weekend tournament',
		message: 'The EndruBet weekend tournament starts soon.',
		createdAt: '2026-11-12T12:30:00.000Z',
		isRead: true,
	},
	{
		id: 'security-login',
		title: 'New login detected',
		message: 'A new login was detected from your device.',
		createdAt: '2026-11-11T21:45:00.000Z',
		isRead: true,
	},
	{
		id: 'maintenance',
		title: 'Scheduled maintenance',
		message: 'Some games may be unavailable during maintenance.',
		createdAt: '2026-11-10T09:00:00.000Z',
		isRead: true,
	},
];
