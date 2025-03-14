import { Sidebar } from "../../components";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex bg-slate-100 w-full   antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <Sidebar />
      <div className="flex flex-row w-full h-full">
        <div className="p-2 w-full text-slate-900">{children}</div>
      </div> 
    </div>
  );
}
