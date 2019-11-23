# React Users Avatar
## Install
```
npm install react-users-avatar --save

```

## Demo
<img src="https://github.com/Thamodaran/react-users-avatar/raw/master/demo.gif" alt="demo" width="100%" />

## Usage
```
React users avatar example with image and border
```
```js
import UserAvatar from 'react-users-avatar';

class ReactUsersAvathar extends Component {
    render() {
        return (
            <UserAvatar 
                imgUrl="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-512.png"
                avatharBgColor="#858aa0"
                avatharTextColor="#fff"
                name="full name"
                border="5px solid #474d56"
                ifBorder
                imgHeight="150px"
                imgWidth="150px"
            />
        );
    }
}
```
```
React users avatar example with out image and with out border
```
```js
import UserAvatar from 'react-users-avatar';

class ReactUsersAvathar extends Component {
    render() {
        return (
            <UserAvatar 
                  avatharBgColor="#858aa0"
                  avatharTextColor="#fff"
                  name="Thamu"
                  border="5px solid #474d56"
                  ifBorder={false}
                  imgHeight="150px"
                  imgWidth="150px"
            />
        );
    }
}
```
```
React users avatar example with out image and with border
```
```js
import UserAvatar from 'react-users-avatar';

class ReactUsersAvathar extends Component {
    render() {
        return (
            <UserAvatar 
                  avatharBgColor="red"
                  avatharTextColor="#fff"
                  name="Nithi"
                  border="5px solid #474d56"
                  ifBorder
                  imgHeight="150px"
                  imgWidth="150px"
            />
        );
    }
}
```

```
React users avatar example with out image, with border and with out background
```
```js
import UserAvatar from 'react-users-avatar';

class ReactUsersAvathar extends Component {
    render() {
        return (
            <UserAvatar 
                  avatharBgColor="#fff"
                  avatharTextColor="green"
                  name="Thamu Nithi"
                  border="5px solid #474d56"
                  ifBorder
                  imgHeight="150px"
                  imgWidth="150px"
            />
        );
    }
}
```

## PROPTYPES
| Prop | Type | Default |
| ---- | ---- | ------- |
| imgUrl | String | '' |
| avatharBgColor | String | #858aa0 |
| avatharTextColor | String | #fff |
| name | String | avatar |
| border | String | 5px solid #474d56 |
| ifBorder | Boolean | true |
| imgHeight | String | 150px |
| imgWidth | String | 150px |
# react-users-avatar
