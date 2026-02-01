export type HeroCopy = {
  title: string
  subtitle: string
  cta: string
}

export type AboutCopy = {
  title: string
  content: string
}

export type WhyUsCopy = {
  title: string
  benefits: string[]
}

export type ContactCopy = {
  phone: string
  email: string
}

export type Copy = {
  hero: HeroCopy
  about: AboutCopy
  whyUs: WhyUsCopy
  contact: ContactCopy
}

import copyData from './copy.json'

export const copy = copyData as Copy

export default copy

