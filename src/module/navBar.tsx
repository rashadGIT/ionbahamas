export default[
    { order : 1, href: '/', text: 'Home', img : '' },
    { order : 2, href: '/about', text: 'About', img : '' },
    { order : 3, href: '/board', text: 'Our Board', img : '' },
    { order : 3, href: '/donate', text: 'Donate', img : '' },
    // { href: '#', site: 'https://github.com/rashadGIT', text: 'GitHub', img : '' },
    // { order : 4, href: '/scholarship', text: 'Scholarship', img : '' }
  ].sort((a,b) => a.order - b.order);