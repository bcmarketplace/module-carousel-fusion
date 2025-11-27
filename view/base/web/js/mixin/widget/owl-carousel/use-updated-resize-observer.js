define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    return function () {
        if (!window.ResizeObserver) {
            return;
        }


        var Widget = $.fn.owlCarousel.Constructor;

        Widget.prototype.registerEventHandlers = wrapper.wrapSuper(Widget.prototype.registerEventHandlers, function () {
            this._super();

            this.off(window, 'resize', this._handlers.onThrottledResize);

            this.resizeObserver = new ResizeObserver(function () {
                this._handlers.onThrottledResize();
            }.bind(this));
            this.resizeObserver.observe(this.$element[0]);
        });

        Widget.prototype.destroy = wrapper.wrapSuper(Widget.prototype.destroy, function () {
            this._super();

            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        });
    }
})