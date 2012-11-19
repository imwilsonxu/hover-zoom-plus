// Author: Wilson Xu <imwilsonxu@gmail.com>

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
    name: 'Weibo',
    version: '0.1',
    prepareImgLinks: function(callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="sinaimg.cn/thumbnail/"]',
            /thumbnail\/([0-9a-z]+)\.jpg/,
            'large/$1.jpg'
        );
// http://tp1.sinaimg.cn/1614282004/180/5601048578/1
// http://tp1.sinaimg.cn/1614282004/50/5601048578/1
        hoverZoom.urlReplace(res,
            'img[src*="sinaimg.cn"]',
            /50/,
            '180'
        );
// http://ww1.sinaimg.cn/thumbnail/6afb3a39jw1dpmros4r8wj.jpg
// http://ww1.sinaimg.cn/bmiddle/6afb3a39jw1dpmros4r8wj.jpg
        hoverZoom.urlReplace(res,
            'img[src*="thumbnail"]',
            /thumbnail/,
            'bmiddle'
        );
        callback($(res));
    }
});
