import Vue from 'vue'

export const Focus = {
  bind: function (el, binding, vnode) {
    if (binding.arg === 'true') {
      console.log('going through directive')
      el.focus()
    } else {
      el.blur()
    }
  }
}

Vue.directive('focus', Focus)
