// Custom focus directive
var focus = function (el, binding, vnode) {
  if (binding.value) {
    console.debug('focus directive ' + el.outerHTML)
    el.focus()
  }
}
export const Focus = {
  inserted: focus,
  update: focus
}
