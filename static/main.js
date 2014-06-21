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
    return safeDevide(y - y1, x - x1, "vertical");
};

var makeLine = function (cx, cy, cx1, cy1) {
    /**
     *  Reinventing the wheel. For more info read here:
     *  http://en.wikipedia.org/wiki/Reinventing_the_wheel
     */
    var line = [];
    var temp_x = cx,
        temp_y = cy,
        dx = cx - cx1,
        dy = cy - cy1;

    var dx_ratio = Math.floor(dx / Math.pow(cx1 - cx, cx1 - cx));
    var dy_ratio = Math.floor(dy / Math.pow(cy1 - cy, cy1 - cy));

    while (temp_x >= cx1 && temp_y >= cy1) {
        temp_x = temp_x + dx_ratio;
        temp_y = temp_y + dy_ratio;
        line.push([temp_x, temp_y]);
    }
};

connectLines = function (draw, shape_a, shape_b) {
    var cx = shape_a.cx();
    var cy = shape_a.cy();

    var cx1 = shape_b.cx();
    var cy1 = shape_b.cy();

    return draw.line(cx, cy, cx1, cy1);
};

initGraph = function () {
    var draw = SVG('drawing').size(800, 800);

    var rect = draw.rect(100, 100).attr({ fill: '#f06' });
    var rect2 = draw.rect(100, 100).attr({ fill: '#f15' }).move(150, 0);

    var line = connectLines(draw, rect, rect2);
    line.stroke({ width: 1 });
};
