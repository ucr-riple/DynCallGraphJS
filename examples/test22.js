var job = {
  position: "cashier",
  showDetails: function showDetails() {
    return this.position;
  },
};

var barista = Object.create(job);
barista.showDetails();


/*Expected Output
{ '(test22.js:8:15:8:33)': [ 'create (Native)' ],
  '(test22.js:9:1:9:22)':
   [ '(test22.js:3:16:5:4)' ] }
*/