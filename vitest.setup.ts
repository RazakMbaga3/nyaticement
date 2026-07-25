import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement IntersectionObserver, which framer-motion's
// whileInView/viewport features rely on to detect scroll visibility.
class MockIntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
