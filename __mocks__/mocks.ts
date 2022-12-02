export function mockNextRouter() {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementation(() => ({
    pathname: "/",
    push: jest.fn((path) => (global.window.location.pathname = path)),
  }));
}

export function clearGlobalWindow() {
  delete global.window.location;
  global.window = Object.create(window);
  global.window.location = {
    ancestorOrigins: null,
    hash: null,
    host: "",
    port: "3030",
    protocol: "http:",
    hostname: "",
    href: "http://localhost",
    origin: "",
    pathname: null,
    search: null,
    assign: null,
    reload: null,
    replace: null,
  };
}