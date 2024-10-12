const ProfileInfoPill = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="flex rounded-md shadow-sm border border-gray-100 bg-white py-4 px-3 space-x-3 items-center">
    <span className="flex-1 uppercase font-semibold text-sm">{title}</span>
    <span className="uppercase text-xs text-nowrap overflow-hidden text-ellipsis max-w-[300px] text-right bg-primary text-white rounded-sm py-1 px-2 font-medium">
      {content}
    </span>
  </div>
);

export { ProfileInfoPill };
