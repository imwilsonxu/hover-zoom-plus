// Author: Wilson Xu <imwilsonxu@gmail.com>

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
    name: 'Zhihu',
    version: '0.1',
    prepareImgLinks: function(callback) {
        var res = [];
// http://p3.zhimg.com/b0/d6/b0d65f5c72fcc24e7953e85048370de9_m.jpg
// http://p3.zhimg.com/b0/d6/b0d65f5c72fcc24e7953e85048370de9_r.jpg
        hoverZoom.urlReplace(res,
            'img[src*="zhimg.com"]',
            /_m/,
            '_l'
        );
// http://p1.zhimg.com/5f/ca/5fca547c9_s.jpg
// http://p1.zhimg.com/5f/ca/5fca547c9_l.jpg
        hoverZoom.urlReplace(res,
            'img[src*="zhimg.com"]',
            /_s/,
            '_l'
        );
// http://p3.zhimg.com/ba/18/ba18f0675_is.jpg
// http://p3.zhimg.com/ba/18/ba18f0675_l.jpg
        hoverZoom.urlReplace(res,
            'img[src*="zhimg.com"]',
            /_is/,
            '_l'
        );
        callback($(res));
    }
});

