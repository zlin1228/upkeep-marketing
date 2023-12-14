import { emailRegex } from './demoFormValidation'

export const webinarModalValidation = (data) => {
  if (!data.email || data.email === "" || !emailRegex.test(data.email)) {
    document.querySelector("input[name='email']").classList.remove("is-valid")
    document.querySelector("input[name='email']").classList.add("is-invalid")
    return false
  }
  if (!data.firstName || data.firstName === "") {
    document.querySelector("input[name='firstName']").classList.remove("is-valid")
    document.querySelector("input[name='firstName']").classList.add("is-invalid")
    return false
  }
  if (!data.lastName || data.lastName === "") {
    document.querySelector("input[name='lastName']").classList.remove("is-valid")
    document.querySelector("input[name='lastName']").classList.add("is-invalid")
    return false
  }
  if (!data.company || data.company === "") {
    document.querySelector("input[name='company']").classList.remove("is-valid")
    document.querySelector("input[name='company']").classList.add("is-invalid")
    return false
  }
  if (!data.industry || data.industry === "") {
    document.querySelector("input[name='industry']").classList.remove("is-valid")
    document.querySelector("input[name='industry']").classList.add("is-invalid")
    return false
  }
  return true
}

export const webinarCardValidation = (data) => {
  if (!data.email || data.email === "" || !emailRegex.test(data.email)) {
    document.querySelector("input[name='email']").classList.remove("is-valid")
    document.querySelector("input[name='email']").classList.add("is-invalid")
    return false
  }
  if (!data.name || data.name === "") {
    document.querySelector("input[name='name']").classList.remove("is-valid")
    document.querySelector("input[name='name']").classList.add("is-invalid")
    return false
  }
  return true
}