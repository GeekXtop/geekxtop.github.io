!function(i,t,e,a){function n(){const t=i(".navbar-main .navbar-start").outerWidth()+i(".navbar-main .navbar-end").outerWidth();i(document).outerWidth()<t?i(".navbar-main .navbar-menu").addClass("justify-content-start"):i(".navbar-main .navbar-menu").removeClass("justify-content-start")}function l(t,e){const a=i(t).find(".fold i");e?i(t).addClass("folded"):i(t).removeClass("folded"),e?a.removeClass("fa-angle-down"):a.removeClass("fa-angle-right"),e?a.addClass("fa-angle-right"):a.addClass("fa-angle-down")}function s(i){return'<span class="fold">'+("unfolded"===i?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>"}if(i('.article img:not(".not-gallery-item")').each((function(){0===i(this).parent("a").length&&(i(this).wrap('<a class="gallery-item" href="'+i(this).attr("src")+'"></a>'),this.alt&&i(this).after('<p class="has-text-centered is-size-6 caption">'+this.alt+"</p>"))})),"function"==typeof i.fn.lightGallery&&i(".article").lightGallery({selector:".gallery-item"}),"function"==typeof i.fn.justifiedGallery&&(i(".justified-gallery > p > .gallery-item").length&&i(".justified-gallery > p > .gallery-item").unwrap(),i(".justified-gallery").justifiedGallery()),"function"==typeof t&&i(".article-meta time").each((function(){i(this).text(t(i(this).attr("datetime")).fromNow())})),i(".article > .content > table").each((function(){i(this).width()>i(this).parent().width()&&i(this).wrap('<div class="table-overflow"></div>')})),n(),i(window).resize(n),i("figure.highlight table").wrap('<div class="highlight-body">'),void 0!==a&&void 0!==a.article&&void 0!==a.article.highlight){i("figure.highlight").addClass("hljs"),i("figure.highlight .code .line span").each((function(){const t=i(this).attr("class").split(/\s+/);for(const e of t)i(this).addClass("hljs-"+e),i(this).removeClass(e)}));const f=a.article.highlight.clipboard,h=a.article.highlight.fold.trim();i("figure.highlight").each((function(){i(this).find("figcaption").length?(i(this).find("figcaption").addClass("level is-mobile"),i(this).find("figcaption").append('<div class="level-left">'),i(this).find("figcaption").append('<div class="level-right">'),i(this).find("figcaption div.level-left").append(i(this).find("figcaption").find("span")),i(this).find("figcaption div.level-right").append(i(this).find("figcaption").find("a"))):(f||h)&&i(this).prepend('<figcaption class="level is-mobile"><div class="level-left"></div><div class="level-right"></div></figcaption>')})),void 0!==e&&f&&(i("figure.highlight").each((function(){const t="code-"+Date.now()+(1e3*Math.random()|0),e='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+t+' .code"><i class="fas fa-copy"></i></a>';i(this).attr("id",t),i(this).find("figcaption div.level-right").append(e)})),new e(".highlight .copy")),h&&(i("figure.highlight").each((function(){if(i(this).addClass("foldable"),i(this).find("figcaption").find("span").length>0){const t=i(this).find("figcaption").find("span");if(t[0].innerText.indexOf(">folded")>-1)return t[0].innerText=t[0].innerText.replace(">folded",""),i(this).find("figcaption div.level-left").prepend(s("folded")),void l(this,!0)}i(this).find("figcaption div.level-left").prepend(s(h)),l(this,"folded"===h)})),i("figure.highlight figcaption .level-left").click((function(){const t=i(this).closest("figure.highlight");l(t.eq(0),!t.hasClass("folded"))})))}const d=i("#toc");if(d.length>0){const c=i("<div>");function o(){d.toggleClass("is-active"),c.toggleClass("is-active")}c.attr("id","toc-mask"),i("body").append(c),d.on("click",o),c.on("click",o),i(".navbar-main .catalogue").on("click",o)}}(jQuery,window.moment,window.ClipboardJS,window.IcarusThemeSettings);