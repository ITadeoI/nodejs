// console.log(process.argv);
//
// var flag = process.argv.indexOf('alicewonderland');
//
// console.log(flag);



process.stdout.write('Ask me a question now: ');

    process.stdin.on('data', function(answer){

    console.log(answer.toString().trim());

    process.exit();

});

