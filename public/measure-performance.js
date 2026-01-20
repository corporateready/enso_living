if (typeof window !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn('Long Task detected:', {
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime
          })
        }
      }
    })
    
    observer.observe({ entryTypes: ['longtask', 'measure'] })
  }