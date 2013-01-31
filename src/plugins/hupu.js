// Author: Wilson Xu <imwilsonxu@gmail.com>

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
    name: 'Hupu',
    version: '0.1',
    prepareImgLinks: function(callback) {
        var res = [];
// http://c1.hoopchina.com.cn/uploads/star/event/images/130131/thumbnail-90d725bc8598ed40578e8f2ab1e9cdac093620e1.jpg
// http://c1.hoopchina.com.cn/uploads/star/event/images/130131/bmiddle-90d725bc8598ed40578e8f2ab1e9cdac093620e1.jpg
        hoverZoom.urlReplace(res,
            'img[src*="thumbnail"]',
            /thumbnail/,
            'bmiddle'
        );
        callback($(res));
    }
});

