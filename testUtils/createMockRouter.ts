import { NextRouter } from "next/router";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
    return {
        basePath: '',
        route: '/',
        pathname: '',
        query: {},
        asPath: '',
        back: jest.fn(),
        push: jest.fn(),
        reload: jest.fn(),
        replace: jest.fn(),
        isFallback: false,
        isLocaleDomain: false,
        isPreview: false,
        isReady: true,
        events: {
          on: jest.fn(),
          off: jest.fn(),
          emit: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
        ...router
    }
}