﻿angular.module('App.Services')
	.factory('UtilsSvc', function() {
		return {
			s4 = function () {
			    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			},
			Guid: function () {
    			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
			},
			isValidUrl = function (url) {
			    var urlExpression = /(http|ftp|https):\/\/[\w-]+([\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
			    return new RegExp(urlExpression).test(url);
			}
		};
	});