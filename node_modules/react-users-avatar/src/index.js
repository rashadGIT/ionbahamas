import React from 'react';
import PropTypes from 'prop-types';

class ReactAvatarCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      imgUrl, name, avatharBgColor, avatharTextColor, imgHeight, imgWidth, border, ifBorder
    } = this.props;
    const userName = name.split(' ');

    let avatharStyle = {};
    avatharStyle = {
      height: imgHeight,
      width: imgWidth,
      backgroundColor: avatharBgColor,
      color: avatharTextColor,
      borderRadius: '50%',
      display: 'table'
    };

    let imgStyle = {};
    imgStyle = {
      height: '150px',
      width: '150px',
      borderRadius: '50%'
    };

    return (
      <div
        style={avatharStyle}
        title={name.toUpperCase()}
      >
        <span
          style={{
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center',
            border: ifBorder ? border : 'none',
            borderRadius: '50%'
          }}
        >
          {imgUrl ?
            <img
              style={imgStyle}
              src={imgUrl}
              alt="avathar"
            /> :
            <h1 style={{ margin: 0, padding: 0, textTransform: 'uppercase' }}>
              {`${userName.length >= 2 ?
                `${userName[0].charAt(0)}${userName[1].charAt(0)}`
                : userName[0].charAt(0)}`}
            </h1>
          }
        </span>
      </div>
    );
  }
}
ReactAvatarCircle.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  avatharBgColor: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  avatharTextColor: PropTypes.string,
  ifBorder: PropTypes.bool,
  border: PropTypes.string
};

ReactAvatarCircle.defaultProps = {
  imgUrl: '',
  avatharBgColor: '#858aa0',
  avatharTextColor: '#fff',
  name: 'avatar',
  imgHeight: '150px',
  border: '5px solid #474d56',
  ifBorder: true,
  imgWidth: '150px'
};
export default ReactAvatarCircle;
