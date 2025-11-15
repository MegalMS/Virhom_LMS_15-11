import Link from 'next/link';

export default function Layout({ children }) {
  const menuItems = [
    { name: 'Study Material', href: '/features/study-material' },
    { name: 'Practice Material', href: '/features/practice-material' },
    { name: 'Study Tools', href: '/features/study-tools' },
    { name: 'Progress Tracking', href: '/features/progress-tracking' },
    { name: 'One-to-One Lessons', href: '/features/one-to-one-lessons' },
    { name: 'Video Lessons', href: '/features/video-lessons' },
    { name: 'Voice Recognition', href: '/features/voice-recognition' },
    { name: 'Offline Study', href: '/features/offline-study' },
    { name: 'Reward System', href: '/features/reward-system' },
    { name: 'Support System', href: '/features/support-system' },
  ];

  return (
    <div className="flex">
      {/* Sidebar Menu */}
      <div className="w-64 bg-gray-900 text-white min-h-screen p-6 sticky top-0">
        <h2 className="text-2xl font-bold mb-8">Learn English</h2>
        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <a className="block px-4 py-2 rounded hover:bg-blue-600 transition">
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}