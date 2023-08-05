export default[
    { order : 1, href: '/', text: 'Home', img : '' },
    { order : 2, href: '/about', text: 'About', img : '' },
    { order : 3, href: '/board', text: 'Our Board', img : '' },
    // { href: '#', site: 'https://github.com/rashadGIT', text: 'GitHub', img : '' },
    // { href: '#', site: 'https://rashadbarnett.com/react/src/docs/RASHAD%20A.%20BARNETT.pdf', text: 'Resume', img : '' }
  ].sort((a,b) => a.order - b.order);