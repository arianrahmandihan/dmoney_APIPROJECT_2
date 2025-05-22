const newman = require('newman');

newman.run({
   
     //collection: `http://api.postman.com/collections/45064153-7218b145-784a-48ac-86a7-a28e771b1ce3?access_key=PMAT-01JVSWS3845VR9JB9MXH7WYSSJ`,
      collection: require('/collection/domoney-users-api-collection.json'),

    reporters: 'htmlextra',
    iterationCount: 1,


    reporter: {

        htmlextra: {
            export: './reports/report.html',

        }
    }
}, function (err, summary) {
    if (err) {
        throw err;
    }
    console.log('Collection run complete!');
});