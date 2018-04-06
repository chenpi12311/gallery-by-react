require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 获取图片信息
let photoImages = require('../data/photos.json');

// 利用自执行函数将图片信息转为图片路径信息
photoImages = (function genPhotoURL(photoImages) {
  for (var i=0, j=photoImages.length; i < j; i++) {
    var singleImageData = photoImages[i];
    singleImageData.imageURL = require("../images/" + singleImageData.photoName);

    photoImages[i] = singleImageData;
  }
  return photoImages;
})(photoImages);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
