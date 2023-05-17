import UAParser from 'ua-parser-js'

export enum DEVICE {
  DESKTOP = 'DESKTOP',
  MOBILE = 'MOBILE',
}

export const userAgent = new UAParser()
export const isDesktop =  () => !['mobile','tablet','wearable','embedded'].includes(userAgent.getDevice().type || '') 
