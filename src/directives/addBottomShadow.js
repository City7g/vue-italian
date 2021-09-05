const bottomShadow = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = () => {
      if (window.pageYOffset > 10) {
        el.classList.add(binding.value)
      } else {
        el.classList.remove(binding.value)
      }
    }
    el.__ClickOutsideHandler__()
    window.addEventListener('scroll', el.__ClickOutsideHandler__)
  },
  beforeUnmount(el) {
    window.removeEventListener('scroll', el.__ClickOutsideHandler__)
    console.log(el)
  },
}

export default bottomShadow
