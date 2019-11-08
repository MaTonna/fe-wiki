const { exec } = require('child_process');
exec('vuepress dev docs', { }, (err, stdout, stderr) => {
    if(err) {
        console.log('出错啦',err);
        return;
    }
});
