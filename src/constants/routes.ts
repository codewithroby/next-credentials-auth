export const publicRoutes = ["/", "/login", "/register"];

export const protectedRoutes = [
  {
    path: "/dashboard",
    role: 0,
  },
  {
    path: "/manager-dashboard",
    role: 1,
  },
  {
    path: "/admin-dashboard",
    role: 2,
  },
];
