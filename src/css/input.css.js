const donate =  {
    fontSize : '25px'
}

const checkBox = {
    width: '25px',
    height: '25px'
}

const checkBoxLabel  = {
    fontSize : '25px',
    paddingLeft : '10px',
}

const title = {
    fontSize : '20px'
}

const radioBtnButton = {
    fontSize : '20px',
    cursor: 'pointer',
    backgroundColor : 'white',
    borderStyle: 'solid',
    borderColor : 'blue',
    borderRadius : 10,
    borderWidth : 2,
    color: 'blue',
    padding: '5px 15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block'
}

const radioBtnButtonSelected = {
    fontSize : radioBtnButton.fontSize,
    cursor: radioBtnButton.cursor,
    backgroundColor : 'blue',
    borderStyle: radioBtnButton.borderStyle,
    borderColor : 'white',
    borderRadius : radioBtnButton.borderRadius,
    borderWidth : radioBtnButton.borderWidth,
    color: 'white',
    padding: radioBtnButton.padding,
    textAlign : radioBtnButton.textAlign,
    textDecoration : radioBtnButton.textDecoration,
    display : radioBtnButton.display
}

const radioBtn = {
    width: '20px',
    height: '20px',
    visibility:'hidden'
}

export { donate, radioBtn, checkBox, checkBoxLabel, title, radioBtnButton, radioBtnButtonSelected  }