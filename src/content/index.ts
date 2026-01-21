export type HeroCopy = {
  title: string
  subtitle: string
  cta: string
}

export type ContactCopy = {
  phone: string
  email: string
}

export type Copy = {
  hero: HeroCopy
  contact: ContactCopy
}

import copyData from './copy.json'

export const copy = copyData as Copy

export default copy

