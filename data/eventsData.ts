export interface Event {
  path: string
  title: string
  date: string
  time: string
  location: string
  type: 'competition' | 'workshop' | 'others'
}

export interface YearEvent {
  [year: string]: Event[]
}

export const events: YearEvent = {
  '2022': [
    {
      path: 'sea-cup-2022',
      title: 'SEA Cup 2022',
      date: '2022-12-10',
      time: '09:00',
      location: 'TROVE, Johor Bahru',
      type: 'competition',
    },
  ],
  '2023': [
    {
      path: 'kbs-deadlift-2023',
      title: 'KBS Deadlift 2023',
      date: '2023-10-14',
      time: '09:00',
      location: 'AEON Mall Tebrau City, Johor Bahru',
      type: 'workshop',
    },
    {
      path: 'jpo-2023',
      title: 'JPO 2023',
      date: '2023-11-11',
      time: '09:00',
      location: 'Komtar JBCC, Johor Bahru',
      type: 'competition',
    },
    {
      path: 'asians-2023',
      title: 'Asians 2023',
      date: '2023-12-02',
      time: '09:00',
      location: 'TROVE, Johor Bahru',
      type: 'competition',
    },
    {
      path: 'agm-2023',
      title: 'AGM 2023',
      date: '2023-12-16',
      time: '09:00',
      location: 'JS Pro Gym',
      type: 'others',
    },
  ],
  '2024': [
    {
      path: 'agm-2024',
      title: 'AGM 2024',
      date: '2024-01-13',
      time: '09:00',
      location: 'MV Secrets',
      type: 'others',
    },
    {
      path: 'jpo-2024',
      title: 'JPO 2024',
      date: '2024-03-02',
      time: '09:00',
      location: 'Komtar JBCC, Johor Bahru',
      type: 'competition',
    }
  ],
  '2025': [
    {
      path: 'jpo-2025',
      title: 'JPO 2025',
      date: '2025-10-25',
      time: '09:00',
      location: 'Komtar JBCC, Johor Bahru',
      type: 'competition',
    },
  ],
}

// Helper functions for working with events
export const getAllEvents = (): Event[] => {
  return Object.values(events).flat()
}

export const getEventsByYear = (year: string): Event[] => {
  return events[year] || []
}

export const getEventByPath = (path: string): Event | undefined => {
  return getAllEvents().find((event) => event.path === path)
}

// Default export for easier imports
export default events
