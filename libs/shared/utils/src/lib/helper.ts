export const responseResult = (response: any) => {
  return { data: response.data.data, status: response.status }
}
export const responseError = (error: any) => {
  return { data: error.response?.data, status: error.response?.status }
}