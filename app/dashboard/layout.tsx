import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none lg:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-cyan-600 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}