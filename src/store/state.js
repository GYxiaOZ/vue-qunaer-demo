let defaultCity = '重庆'
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {
  console.log('localStorage is not defined')
}

export default {
  city: defaultCity
}
