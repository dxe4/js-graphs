initGraph = function () {
    var draw = SVG('drawing').size(800, 800);
    var rect = draw.rect(100, 100).attr({ fill: '#f06' });

    draw.line(0, 0, 100, 150).stroke({ width: 1 });
    var ellipse = draw.ellipse(80, 40).move(10, 10).fill({ color: '#fff' });

    rect.maskWith(ellipse);
};
