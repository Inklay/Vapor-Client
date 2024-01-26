export function isClient() : boolean {
  const userAgent = navigator.userAgent.toLowerCase()
  return userAgent.indexOf(' electron/') !== -1
}

export function getClientClassName(className: string) : string {
  if (isClient()) {
    return className
  }
  return className + ' hide'
}
