const button = {
    backgroundColor: '#202020',
    padding: '120000px',
    borderRadius: '2px',
    width: '50%',
    color : 'red',
    display: 'flex'
}

const error = {
    border: '1px solid #eb516d'
}

const popupBox = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%, -50%)'
    }
  };
  const defaultIcon = {
    padding : '15px',
    fontSize: '130px'
  }
  const failIcon = {
      fontSize : defaultIcon.fontSize,
      color : 'red',
  }

  const successIcon = {
    fontSize : defaultIcon.fontSize,
    color : 'green',
}


export { button, error, popupBox, failIcon, defaultIcon, successIcon}