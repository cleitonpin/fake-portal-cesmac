import { Request } from 'express'

export interface IGetUserAuthInfoRequest extends Request {
  id?: Number, // or any other type
  token?: String,
}
