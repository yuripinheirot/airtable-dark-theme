const secondaryColor = '#e2e2e2'

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      const body = document.getElementsByTagName('body')[0]

      if (body && !body.hasAttribute('data-theme-applied')) {
        console.log('applying body theme...')
        body.style.filter = 'invert(0.95)'
        body.setAttribute('data-theme-applied', 'true')
      }

      const toolBar = document.getElementsByClassName(
        'flex items-center justify-between px2 flex-auto top-bar-text-dark'
      )[0]

      if (toolBar && !toolBar.hasAttribute('data-theme-applied')) {
        console.log('applying toolBar theme...')
        toolBar.style.backgroundColor = '#e2e2e2'
        toolBar.style.color = '#000'
        toolBar.setAttribute('data-theme-applied', 'true')
      }
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
