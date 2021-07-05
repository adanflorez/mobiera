export default {
  required: (value: string): boolean | string => !!value || "Campo requerido",
  email: (value: string): boolean | string => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || "Debe ser un correo valido"
  },
  alpha: (value: string): boolean | string => {
    const pattern = /^[a-zA-Z\s]*$/
    return pattern.test(value) || "Solo letras y espacios"
  },
  password: (value: string): boolean | string => {
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    return (
      pattern.test(value) ||
      "8 caracteres que incluyan al menos una mayuscula, una minuscula y un caracter especial"
    )
  }
}
