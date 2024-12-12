<template>
  <div class="h-56 grid grid-cols-2 gap-4 content-center">
    <Button
      label="Start the web worker"
      icon="pi pi-play"
      pt:root="bg-teal-900 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
      pt:label="text-white font-bold text-lg"
      pt:icon="text-white text-xl"
      iconPos="right"
    />
    <Button
      label="Stop the web worker"
      icon="pi pi-ban"
      pt:root="bg-red-700 hover:bg-red-500 active:bg-red-700 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
      pt:label="text-white font-bold text-lg"
      pt:icon="text-white text-xl"
      iconPos="right"
    />
  </div>
  <div class="flex flex-wrap justify-center items-center h-48 bg-blue-200 rounded-full">
    <p>test</p>
  </div>
</template>
<script setup lang="ts">
import Worker1 from '@/workers/worker1.ts?worker&inline'
if(window.Worker){
  console.log('The browser is compatibly with Web Worker API');
  const worker1 = new Worker1();
  worker1.postMessage("Sample message from the main thread");
  worker1.onmessage = (e: MessageEvent) => {
    console.log('Received message from the worker: ', e.data);
  }
}
</script>
