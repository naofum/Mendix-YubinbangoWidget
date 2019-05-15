define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "dojo/_base/lang",
    "YubinbangoWidget/lib/jquery-1.11.2"


], function (declare, _WidgetBase, lang, _jQuery) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    return declare("YubinbangoWidget.widget.YubinbangoWidget", [ _WidgetBase ], {


        // Internal variables.
        _handles: null,
        _contextObj: null,

        constructor: function () {
            this._handles = [];
        },

        postCreate: function () {
            logger.debug(this.id + ".postCreate");
            this._insertYubin();

        },

        update: function (obj, callback) {
            logger.debug(this.id + ".update");

            $('div.form-group.mx-name-' + this.address1 + ' input').attr('name', this.address1);
            $('div.form-group.mx-name-' + this.zipcode1 + ' input').attr('name', this.zipcode1);
            $('div.form-group.mx-name-' + this.zipcode1 + ' input').attr('onkeyup', 'AjaxZip3.zip2addr("' + this.zipcode1 + '", "", "' + this.address1 + '", "' + this.address1 + '");');

            this._contextObj = obj;
            callback();
        },

        _insertYubin: function () {
            logger.debug(this.id + "._insertYubin");
            var a = document.createElement("script");
            var m = document.getElementsByTagName("script")[0];
            a.src = "https://ajaxzip3.github.io/ajaxzip3.js";
            a.charset = "UTF-8";
            m.parentNode.insertBefore(a, m);
        },

    });
});

require(["YubinbangoWidget/widget/YubinbangoWidget"]);
