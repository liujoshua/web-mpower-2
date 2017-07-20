import Vue from 'vue'

// Custom focus directive
export const Focus = {
  twoWay: true, // supposed to create a two-data binding, but how to access?
  bind: function (el, binding, vnode) {
    if (binding.arg === 'true') {
      el.focus()
    } else {
      el.blur()
    }
  },
  inserted: function (el, binding, vnode) {
    // Focus the element
    if (binding.value) {
      el.focus()
    }
  }
}

Vue.directive('focus', Focus)
