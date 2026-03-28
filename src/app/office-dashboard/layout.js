export const metadata = {
  title: 'Admin Dashboard | London School of Excellence',
  description: 'Secure admin portal for managing applications.',
  robots: { index: false, follow: false, nocache: true }
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {children}
    </div>
  );
}
