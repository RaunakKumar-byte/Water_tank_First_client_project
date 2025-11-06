export interface Booking {
  id: string
  customerName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  tankType: string
  tankCapacity: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  additionalNotes?: string
  paymentStatus: "pending" | "completed" | "failed"
  bookingStatus: "upcoming" | "completed" | "cancelled"
  bookingDate: string
  totalAmount: number
}
