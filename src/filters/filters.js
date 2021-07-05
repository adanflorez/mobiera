import Vue from "vue"

Vue.filter(
  "truncate",
  function (value, limit = 25, completeWords = true, ellipsis = "...") {
    if (!value) return ""
    if (value.length <= limit) {
      return value
    }
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(" ")
    }
    return value.substr(0, limit) + ellipsis
  }
)
