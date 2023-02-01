export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  // Allows customizing built-in components
  return {
    h1: ({ children }) => <h1 style={{ fontSize: "72px" }}>{children}</h1>,
    ...components,
  };
}
