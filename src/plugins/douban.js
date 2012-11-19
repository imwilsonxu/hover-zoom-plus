// Author: Wilson Xu <imwilsonxu@gmail.com>

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
    name: 'Douban',
    version: '0.1',
    prepareImgLinks: function(callback) {
        var res = [];
// http://img1.douban.com/view/photo/albumicon/public/p1236054384.jpg
// http://img1.douban.com/view/photo/photo    /public/p1236054384.jpg
        hoverZoom.urlReplace(res,
            'img[src*="albumicon"]',
            /albumicon/,
            'photo'
        );
// http://img3.douban.com/view/photo/thumb/public/p1008768576.jpg
// http://img3.douban.com/view/photo/photo/public/p1008768576.jpg
        hoverZoom.urlReplace(res,
            'img[src*="thumb"]',
            /thumb/,
            'photo'
        );
// http://img1.douban.com/spic/s6987994.jpg
// http://img1.douban.com/mpic/s6987994.jpg
// http://img1.douban.com/lpic/s6987994.jpg
        hoverZoom.urlReplace(res,
            'img[src*="spic"]',
            /spic/,
            'lpic'
        );
        hoverZoom.urlReplace(res,
            'img[src*="mpic"]',
            /mpic/,
            'lpic'
        );
// http://img3.douban.com/icon/u56272638-3.jpg
// http://img3.douban.com/icon/ul56272638-3.jpg
        hoverZoom.urlReplace(res,
            'img[src*="icon/u"]',
            /u([0-9]+-[0-9])\.jpg/,
            'ul$1.jpg'
        );
        callback($(res));
    }
});
