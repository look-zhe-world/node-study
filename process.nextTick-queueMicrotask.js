setTimeout(()=>{
    console.log('setTimeout');
}, 0);

process.nextTick(()=>{ // 微任务 比promise 优先级高，比promise先执行
    console.log('nextTick');
});



queueMicrotask(()=>{  // 微任务
    console.log('queueMicrotask');
})