var job = {
  position: "cashier",
  showDetails: function showDetails() {
    return this.position;
  },
};

var barista = Object.create(job);
barista.showDetails();
