importScripts = (_importScripts => function() {
  const args = Array.from(arguments).map(arg => `${importScripts.basePath}${arg}`);
  _importScripts.apply(this, args);
})(importScripts);
importScripts.basePath = 'https://spatial-engine.exokit.org/';


importScripts('mc-worker.js');