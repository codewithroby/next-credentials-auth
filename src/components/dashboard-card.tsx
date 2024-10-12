const DashboardCard = async ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="container sm:max-w-lg px-6 sm:px-0">
      <div className="flex flex-col space-y-4 bg-white p-6 rounded-md shadow-sm">
        <div className="flex flex-col space-y-4">
          <span className="font-bold uppercase text-xl text-center">
            {title}
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export { DashboardCard };
