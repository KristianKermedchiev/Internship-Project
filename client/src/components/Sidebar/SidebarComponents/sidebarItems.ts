import { SidebarItems } from '@/types/sidebar-types/sidebarItems';
import { Activity, BrickWall, Building2, ClipboardList, ContactRound, Home, LogOut, Ruler, Users } from 'lucide-react';

export const sidebarItems: SidebarItems = {
    links: [
        { label: 'Activities', href: '/activities', icon: Activity },
        { label: 'Artisans', href: '/artisans', icon: ContactRound },
        { label: 'Measures', href: '/measures', icon: Ruler },
        { label: 'Users', href: '/users', icon: Users },
        { label: 'Companies', href: '/companies', icon: Building2 },
        { label: 'Projects', href: '/projects', icon: BrickWall },
        { label: 'My projects', href: '/my-projects', icon: ClipboardList },
    ]
};

export const sidebarUserItems: SidebarItems = {
    links: [
        { label: 'Sign out', href: '/logout', icon: LogOut },
    ]
};