(function() {
  var key = 'progress-' + location.pathname.split('/').pop();
  function save() { localStorage.setItem(key, window.scrollY); }
  window.addEventListener('pagehide', save);
  window.addEventListener('beforeunload', save);
  document.addEventListener('visibilitychange', function() { if (document.hidden) save(); });
  var saved = localStorage.getItem(key);
  if (saved) window.addEventListener('DOMContentLoaded', function() { window.scrollTo(0, parseInt(saved)); });
})();
