var safeDevide = function (a, b, returnValue) {
    if (returnValue === undefined) {
        returnValue = 0;
    }
    if (b === 0) {
        return returnValue;
    } else {
        return a / b;
    }
};

var slope = function (x, y, x1, y1) {
    return safeDevide(y-y1, x-x1, "vertical");
};

initGraph = function () {
    var draw = SVG('drawing').size(800, 800);

    var rect = draw.rect(100, 100).attr({ fill: '#f06' });
    var rect2 = draw.rect(100, 100).attr({ fill: '#f15' }).move(100, 0);

    var cx = rect.cx();
    var cy = rect.cy();

    var cx1 = rect2.cx();
    var cy1 = rect2.cy();

    for (i = cx; i <= cx1; i++) {
        for (j = cy; j <= cy1; j++) {

        }
    }

    alert(slope(cx,cy,cx1,cy1));

    draw.line(cx, cy, 100, 150).stroke({ width: 1 });
};
