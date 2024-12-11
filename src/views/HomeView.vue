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
<script setup lang="ts"></script>
