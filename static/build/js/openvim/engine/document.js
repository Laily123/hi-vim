function create_VIM_DOCUMENT(t){function r(){var r=$.trim($(".text",t).text());$(".text",t).html(n(r)),$(".text .char:first",t).addClass("cursor"),e()}function e(){var r=$(".target",t).text(),e=$(".target",t).html(n(r));e.find(".line").addClass("targetline").removeClass("line"),e.find(".word").addClass("targetword").removeClass("word"),e.find(".char").addClass("targetchar").removeClass("char")}function n(t){return 0===t.length?'<div class="line"><div class="word space"><div class="char cursor">&nbsp;</div></div></div>':i(t)}function i(t){for(var r=t.split(g),e="",n=0,i=r.length;n<i;++n){var s=r[n];""!==s&&(e+="<div class='line'>"+a(s)+"</div>")}return e}function a(t){for(var r=t.split(" "),e="",n=0,i=r.length;n<i;++n){var a=r[n];""!==$.trim(a)&&(e+="<div class='word'>"+d(a)+"</div>"),n+1!==i&&(e+=s())}return e}function s(){return"<div class='word space'><div class='char'>&nbsp;</div></div>"}function c(){return"<div class='line'>"+s()+"</div>"}function d(t){for(var r="",e=0,n=t.length;e<n;++e)""!==$.trim(t[e])&&(r+=o(t[e]));return r}function o(t){return"<div class='char'>"+t+"</div>"}function l(t){var r=$("<div />",{class:"line"});return h.for_each(t,function(t){r.append(t)}),r}function v(){var r=$(".text",t).clone(!1),e=r.find(".cursor"),n=e.text(),i="["+n+"]";return e.text(i),r}function u(){var t=v(),r="",e=t.find(".line"),n=e.length;return e.each(function(t){r+=$(this).text(),t<n-1&&(r+=g)}),r}function f(t){return u().replace(/!LINE_BREAK!/g,"|")}var h=VIM_GENERIC,g="!LINE_BREAK!";return r(),{initText:r,getSpaceWord:s,getChar:o,getEmptyText:c,getRows:i,documentAsTextWithCursorAndLineBreak:f,getText:n,lineBreakMarker:g,getLineWithGivenContent:l}}