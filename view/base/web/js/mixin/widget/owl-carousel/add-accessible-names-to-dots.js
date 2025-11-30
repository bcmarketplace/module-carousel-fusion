define([
    'jquery',
    'mage/utils/wrapper',
    'mage/translate'
], function ($, wrapper, $t) {
    return function () {
        var Navigation = $.fn.owlCarousel.Constructor.Plugins.Navigation;

        Navigation.prototype.draw = wrapper.wrapSuper(Navigation.prototype.draw, function () {
            this._super();

            var settings = this._core.settings;

            if (settings.dots) {
                this._controls.$absolute.children().each(function (index) {
                    $(this).attr('aria-label', $t('Go to page %1').replaceAll('%1', index + 1))
                });
            }
        });
    }
})