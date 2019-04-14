// ES Moudule 模块引入方式
// import avatar from './avatar.jpg'; //导入图片- url-loader或者file-loader
import './index.scss';

// var img = new Image();
// img.src = avatar;
// img.classList.add('avatar');

var root = document.getElementById('root');
// root.append(img);
root.innerHTML = '<div class="iconfont iconspin"></div>';