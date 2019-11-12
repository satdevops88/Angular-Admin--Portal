import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/dashboard', title: 'Home Dashboard', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/notification', title: 'Notification', icon: 'ft-clipboard', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/user-post', title: 'User Post Mangement', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/forum-management', title: 'Forum Mangement', icon: 'ft-tv', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/news-management', title: 'News Mangement', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/direct-message', title: 'Direct Messages', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/user-management', title: 'User Mangement', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/role-management', title: 'Role Mangement', icon: 'ft-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/event-management', title: 'Event Management', icon: 'ft-align-justify', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }
];
