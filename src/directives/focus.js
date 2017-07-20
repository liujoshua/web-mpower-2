// Custom focus directive
var focus = function (el, binding, vnode) {
  if (binding.value) {
    el.focus()
  }
}
export const Focus = {
  inserted: focus,
  update: focus
}
