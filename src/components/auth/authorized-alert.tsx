const AuthorizedAlert = () => (
  <div className="flex space-x-3 px-3 py-4 bg-green-100 border border-green-200 rounded-md shadow-sm items-center">
    <span className="flex items-center">
      <svg
        className="size-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        color="#22c55e"
        fill="none"
      >
        <path
          d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
    <div className="flex-1 flex flex-col space-y-px">
      <span className="font-semibold uppercase text-green-500">Authorized</span>
      <span className="text-green-500 text-sm">
        Your account is authorized to view this page content.
      </span>
    </div>
  </div>
);

export { AuthorizedAlert };
