import { Document } from "mongoose"

export interface iTodo extends Document {
  name: string
  description: string
  date: Date
}