export const NEXT_COMPETITION_DATE = new Date('2025-10-25T00:00:00Z')
export const NEXT_COMPETITION_NAME = 'Johor Powerlifting Open 2025'
export const REGISTRATION_START_DATE = new Date(
  NEXT_COMPETITION_DATE.getTime() - 2 * 30 * 24 * 60 * 60 * 1000,
)
export const REGISTRATION_END_DATE = new Date(
  REGISTRATION_START_DATE.getTime() + 30 * 24 * 60 * 60 * 1000,
)
export const IS_REGISTRATION_OPEN = (() => {
  const now = new Date()
  return now >= REGISTRATION_START_DATE && now <= REGISTRATION_END_DATE
})()
