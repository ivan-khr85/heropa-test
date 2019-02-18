export const menuItemData = [
  {
    label: 'Dashboards',
    iconKey: 'faThLarge',
    href: '/dashboard',
  },
  {
    label: 'Environments',
    iconKey: 'faSitemap',
    href: '/environments',
  },
  {
    label: 'Templates',
    iconKey: 'faColumns',
    href: '/templates',
  },
  {
    label: 'Polices',
    iconKey: 'faFileAlt',
    href: '/polices',
  },
  {
    label: 'Courses',
    iconKey: 'faPuzzlePiece',
    href: '/courses',
  },
  {
    label: 'Reports',
    iconKey: 'faCogs',
    subItems: [
      { label: 'Users', href: '/reports/users' },
      { label: 'Grades', href: '/reports/grades' },
      { label: 'Usage', href: '/reports/usage' },
      { label: 'Virtual machines', href: '/reports/virtual-machines' },
      { label: 'Storage', href: '/reports/storage' },
    ],
  },
  {
    label: 'Administration',
    iconKey: 'faLandmark',
    subItems: [
      { label: 'Users', href: '/admin/users' },
      { label: 'Configs', href: '/admin/configs' },
      { label: 'Storage', href: '/adminreports/storage' },
    ],
  },
];
