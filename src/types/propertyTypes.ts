export interface Property {
  _id: string
  owner: string
  name: string
  type: string
  description: string
  beds: number
  baths: number
  square_feet: number
  amneties?: string[]
  rates: {
    monthly?: number
    weekly?: number
    nightly?: number
  }
  seller_info: {
    name: string
    phone: string
    email: string
  }
  is_featured: boolean
  createdAt: string
  updatedAt: string
  location: {
    city: string
    state: string
    street: string
    zipcode: string
  }
  images: string[]
}
