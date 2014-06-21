initGraph = function () {
    var draw = SVG('drawing').size(800, 800);
    var rect = draw.rect(100, 100).attr({ fill: '#f06' });
    var cx = rect.cx();
    var cy = rect.cy();
    draw.line(cx, cy, 100, 150).stroke({ width: 1 });
};
