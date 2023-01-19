const createError = (status, message)=>{
    const err = new Error()
    err.status = status
    err.message = message
    return err;
}
const checkage = (dateofbirth)=>{
  const currentyear = new Date().getFullYear()
  const age = currentyear - dateofbirth;
  return age;
}

module.exports =  { createError, checkage}