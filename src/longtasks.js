(function(){

  var LOAD_COMPLETE = 'complete';
  var callbacks = [];
  var listenerAdded = false;

  function onLongTask(callback){
    callbacks.push(callback)
  }

  function isLongTasksSupported(){
    return 'PerformanceObserver' in window 
      && 'PerformanceLongTaskTiming' in window 
      && 'TaskAttributionTiming' in window
  }

  function subscribeToLongTasks(){
    if(listenerAdded){
      window.removeEventListener('load', subscribeToLongTasks);
      listenerAdded = false;
    }
    var observer = new PerformanceObserver(longTaskHandler)
    observer.observe({entryTypes: ['longtask']})
  }

  function longTaskHandler(list){
    list.getEntries().forEach(function(entry){
      reportingLongTasks(entry)
    })
  }

  function reportingLongTasks(entry){
    callbacks.forEach(function(callback){
      callback(entry)
    })
  }

  if(isLongTasksSupported()){
    if(document.readyState !== undefined && document.readyState === LOAD_COMPLETE){
      subscribeToLongTasks()
    } else {
      listenerAdded = true
      window.addEventListener('load', subscribeToLongTasks)
    }
  }

  self['perfMetrics'] = self['perfMetrics'] || {}
  self['perfMetrics']['onLongTask'] = onLongTask
}())
