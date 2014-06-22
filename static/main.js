connectLines = function (draw, shape_a, shape_b) {
    var cx = shape_a.cx();
    var cy = shape_a.cy();

    var cx1 = shape_b.cx();
    var cy1 = shape_b.cy();

    return draw.line(cx, cy, cx1, cy1);
};

var fMakeTestData = function (max_x, max_y, rec_size) {
    /**
     * "Functional" version of makeTestData.
     * Returns an IxJ array of
     */
    return cartesianProduct(_.range(0, max_x, rec_size), _.range(0, max_y, rec_size));
};

function cartesianProduct() {
    return Array.prototype.reduce.call(arguments, function (a, b) {
        var ret = [];
        a.forEach(function (a) {
            b.forEach(function (b) {
                ret.push(a.concat([b]));
            });
        });
        return ret;
    }, [
        []
    ]);
}

initGraph = function () {
    var X = 900,
        Y = 900;
    var draw = SVG('drawing').size(X, Y);

    var items_per_axis = 4;
    var rec_size = X / items_per_axis;

    var data = fMakeTestData(X, Y, rec_size);

    // Pair items in two, in order to draw lines
    var toConnect = _.groupBy(data, function (element, index) {
        return Math.floor(index / 2);
    });

    var connected = _.map(toConnect, function (n) {
        var point_a = n[0],
            point_b = n[1];

        var rect_a = draw.rect(rec_size, rec_size)
            .attr({ fill: '#f06' })
            .move(point_a[0], point_a[1]);

        var rect_b = draw.rect(rec_size, rec_size)
            .attr({ fill: '#f06' })
            .move(point_b[0], point_b[1]);

        var line = connectLines(draw, rect_a, rect_b);
        line.stroke({ width: 1 });
        return [rect_a, rect_b];
    });


    _.map(connected, function(n){
        // connected pairs
    });
};

////////////////////////////////////////////////////
//    UNUSED CODE THAT MAY BE USED LATE ON       ///
////////////////////////////////////////////////////

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


var increaseValue = function (current, increase, max) {
    return (current > max) ? 0 : current + increase;
};

var makeTestData = function (max_x, max_y, num_items) {
    var items_per_axis = Math.sqrt(num_items);
    var rec_size = max_x / items_per_axis;

    var items = [];

    var current_x = 0,
        current_y = 0;

    for (i = 0; i < items_per_axis; i++) {
        for (j = 0; j < items_per_axis; j++) {
            items.push([current_x, current_y]);
            current_y = increaseValue(current_y, rec_size, max_y);
        }
        current_y = increaseValue(current_y, rec_size, max_y);
        current_x = increaseValue(current_x, rec_size, max_x);
    }
    return [
        rec_size, items
    ];
};
