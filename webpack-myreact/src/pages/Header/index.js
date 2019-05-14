import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from 'pages/Login/store';
import { actionCreators } from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style';

class Header extends Component {
  getListArea() {
    const { focused, list, page, mouseIn, totalPage } = this.props;

    if (focused || mouseIn) {
      const jsList = list.toJS();
      const pageList = [];
      if (jsList.length > 0) {
        for (let i = (page - 1) * 10; i < page * 10 && i < jsList.length; i++) {
          pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>);
        }
      }
      const { handleMouseEnter } = this.props;
      const { handleMouseLeave } = this.props;
      const { handleChangePage } = this.props;
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Popular
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              Change
            </SearchInfoSwitch>
            <SearchInfoList>{pageList}</SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, active, changeActive } = this.props;
    const { handleInputFocus } = this.props;
    const { handleInputBlur } = this.props;
    const jsList = list.toJS();
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo>Tammy</Logo>
        </Link>
        <Nav>
          <Link to="/">
            <NavItem
              className={active === 'home' ? 'left active' : 'left'}
              onClick={() => changeActive('home')}
            >
              Home
            </NavItem>
          </Link>
          <Link to="/blog">
            <NavItem
              className={active === 'blog' ? 'left active' : 'left'}
              onClick={() => changeActive('blog')}
            >
              Blog
            </NavItem>
          </Link>
          <Link to="/demo">
            <NavItem
              className={active === 'demo' ? 'left active' : 'left'}
              onClick={() => changeActive('demo')}
            >
              Demo
            </NavItem>
          </Link>
          <Link to="/about">
            <NavItem
              className={active === 'about' ? 'left active' : 'left'}
              onClick={() => changeActive('about')}
            >
              About
            </NavItem>
          </Link>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(jsList)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >
              &#xe60b;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("focused:"+state.focused);
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    active: state.getIn(['header', 'active']),
    login: state.getIn(['login', 'login']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      console.log(list.length);
      if (list.length === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage: (page, totalPage, icon) => {
      let originAngle = icon.style.transform.replace(/[^0-9]/gi, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      console.log(originAngle);
      icon.style.transform = `rotate(${originAngle + 360}deg)`;
      dispatch(actionCreators.changePage((page % totalPage) + 1));
    },
    logout() {
      // console.log('logout');
      dispatch(loginActionCreators.logout());
    },
    changeActive(active) {
      dispatch(actionCreators.changeActive(active));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
