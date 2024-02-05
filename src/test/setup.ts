import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import 'vitest-canvas-mock';
import '@testing-library/jest-dom';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

afterEach(() => {
  cleanup();
});
