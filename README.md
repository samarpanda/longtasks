## LongTasks
[longtasks](https://www.w3.org/TR/longtasks/) JavaScript library is to capture long tasks occurrences in browser applications

## Usage

```js
perfMetrics.onLongTask(function(entry){
  console.log(`
    Name: ${entry.name},
    Type: ${entry.entryType},
    Start: ${entry.startTime},
    Duration: ${entry.duration},
    ContainerType: ${entry.attribution.containerType},
    AttributionName: ${entry.attribution[0].name},
    ContainerType: ${entry.attribution[0].containerType},
    ContainerId: ${entry.attribution[0].containerId || 'NA'},
    ContainerName: ${entry.attribution[0].containerName || 'NA'},
    ContainerSrc: ${entry.attribution[0].containerSrc || 'NA'}
  `)
  console.log(entry.attribution);
})
```
