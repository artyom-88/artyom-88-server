export const appSelector = ({ app }) => app;
export const blogSelector = ({ blog }) => blog;
export const blogItemSelector =
  (id) =>
  ({ blog }) =>
    blog.list.filter((item) => item.id === id)[0];
