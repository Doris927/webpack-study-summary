import styled from 'styled-components';
import pic1 from 'images/pic1_b.png';
import pic2 from 'images/pic2_b.png';
import pic3 from 'images/pic3_b.png';

export const HomeWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
  width: 100%;
  min-width: 320px;
  height: 100%;
  .container-1 {
    background: #3f4869;
  }
  .container-2 {
    background: #d96275;
  }
  .container-3 {
    background: #f5f5f5;
  }

  @media screen and (min-width: 960px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    .container {
      cursor: pointer;
      position: relative;
      display: block;
      height: 100%;
      overflow: hidden;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
    .container:hover {
      -webkit-box-flex: 2;
      -webkit-flex: 2;
      -moz-box-flex: 2;
      -moz-flex: 2;
      -ms-flex: 2;
      flex: 2;
    }
    .container-pic {
      position: absolute;
      bottom: 35%;
      left: 50%;
      -webkit-transform: translate(-50%, 0);
      -moz-transform: translate(-50%, 0);
      -ms-transform: translate(-50%, 0);
      -o-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      overflow: hidden;
      animation: none;
    }
    .container-1 .container-pic {
      background: url(${pic1}) no-repeat;
      width: 295px;
      height: 295px;
      background-size: contain;
      background-position: 0 0;
    }
    .container-2 .container-pic {
      background: url(${pic2}) no-repeat;
      width: 295px;
      height: 295px;
      background-size: contain;
      background-position: 0 0;
    }
    .container-3 .container-pic {
      background: url(${pic3}) no-repeat;
      width: 295px;
      height: 295px;
      background-size: contain;
      background-position: 0 0;
    }
    .container-info {
      position: absolute;
      top: 68%;
      left: 0;
      width: 100%;
      text-align: center;
      font-weight: 600;
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
      color: #333;
    }
    .container-title {
      font-size: 50px;
      font-family: 'Microsoft Yahei';
    }
    .container-subtitle {
      font-size: 34px;
      line-height: 1;
      font-family: Arial;
    }
  }
  @media screen and (max-width: 959px) {
    background: #f5f5f5;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    .container {
      position: relative;
      display: block;
      width: 100%;
      overflow: hidden;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -moz-box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .container-info {
      position: absolute;
      top: 50%;
      left: 55%;
      width: 100%;
      -webkit-transform: translate(0, -50%);
      -moz-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      -o-transform: translate(0, -50%);
      transform: translate(0, -50%);
      text-align: left;
      font-weight: 600;
      color: #333;
    }
    .container-title {
      font-size: 30px;
      font-family: 'Microsoft Yahei';
    }
    .container-subtitle {
      font-size: 24px;
      line-height: 1;
      font-family: Arial;
    }
    .container-pic {
      position: absolute;
      bottom: 50%;
      left: 50%;
      -webkit-transform-origin: left center;
      transform-origin: left center;
      -webkit-transform: translate(-50%, 50%) scale(0.5);
      transform: translate(-50%, 50%) scale(0.5);
      overflow: hidden;
    }
    .container-1 .container-pic {
      width: 295px;
      height: 295px;
      background: url(${pic1}) no-repeat;
      background-size: contain;
    }
    .container-2 .container-pic {
      background: url(${pic2}) no-repeat;
      width: 295px;
      height: 295px;
      background-size: contain;
    }
    .container-3 .container-pic {
      background: url(${pic3}) no-repeat;
      width: 295px;
      height: 295px;
      background-size: contain;
    }
  }
`;
