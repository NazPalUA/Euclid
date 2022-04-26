function includeScript(url) {
  window.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const newScript = document.createElement('script');
    newScript.setAttribute('src', url);
    body.append(newScript);
  })
};

includeScript("$source/js/search_box.js");
includeScript("$source/js/swiper.js");
includeScript("$source/js/sec_work.js");
includeScript("$source/js/form.js");
includeScript("$source/js/burger.js");