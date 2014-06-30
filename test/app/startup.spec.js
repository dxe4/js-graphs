define(['app', 'svgjs'], function (App, svgjs) {

    describe("when the app starts", function () {
        it("outputs 'App Started!' in the target", function () {
            var app = new App();
            app.start();
        });
    });
});
