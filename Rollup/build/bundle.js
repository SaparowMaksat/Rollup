
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	var e = [],
	    t = [];

	function n(n, r) {
	  if (n && "undefined" != typeof document) {
	    var a,
	        s = !0 === r.prepend ? "prepend" : "append",
	        d = !0 === r.singleTag,
	        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

	    if (d) {
	      var u = e.indexOf(i);
	      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
	    } else a = c();

	    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
	  }

	  function c() {
	    var e = document.createElement("style");
	    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
	    var a = "prepend" === s ? "afterbegin" : "beforeend";
	    return i.insertAdjacentElement(a, e), e;
	  }
	}

	var css = "@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,regular,500,600,700,800,900&display=swap');\n\nbody {\n\tbackground: #333;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tcolor: white;\n\tfont-family: 'Poppins', sans-serif;\n}\n\n.js-image {\n\twidth: 400px;\n\theight: 400px;\n\tborder-radius: 20px;\n}";
	n(css,{});

	console.log('Maksat');
	const jsImageHtml = document.createElement('img');
	jsImageHtml.className = 'js-image';
	jsImageHtml.src = '../assets/01.jpeg';
	document.body.append(jsImageHtml);

})();
