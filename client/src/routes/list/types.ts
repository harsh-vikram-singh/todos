export type Todos = {
  id: number
  createdAt: Date | null
  updatedAt: Date | null
  title: string
  description: string
  startDate: string
  endDate: string
  firstReason: string | null
  firstSteps: string | null
  secondReason: string | null
  secondSteps: string | null
  thirdReason: string | null
  thirdSteps: string | null
  userId: number
}