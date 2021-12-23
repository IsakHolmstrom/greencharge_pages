// Initialize and add the map
function initMap() {

    // The location of Rejlers parking
    const rejlersParking = { lat: 63.833740, lng: 20.263108 };
    const rejlersParking2 = { lat: 63.833389, lng: 20.262395 };

    // The map, centered at Rejlers Parking
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: rejlersParking,
    });

    // The marker, positioned at Rejlers Parking
      const marker = new google.maps.Marker({
      position: rejlersParking,
      icon: 'images/map_pin.svg',
      map: map,
    });

    const marker2 = new google.maps.Marker({
        position: rejlersParking2,
        icon: 'images/map_pin.svg',
        map: map,
      });

    marker.addListener("click", () => {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });

    marker2.addListener("click", () => {
        map.setZoom(18);
        map.setCenter(marker2.getPosition());
    });
  }

  // Chart.js

  // Config

    var data = [
        {x: 'Week 1', net: 30, cogs: 15, gm: 15},
        {x: 'Week 2', net: 40, cogs: 11, gm: 12},
        {x: 'Week 3', net: 33, cogs: 12, gm: 13},
        {x: 'Week 4', net: 36, cogs: 14, gm: 15}
    ];

      // Change timespan
  function timespanClicked(id) {
    document.getElementById("week").innerHTML = id

    switch(id) {
        case "Dag":
            data = [
                {x: 'Monday', net: 20, cogs: 5, gm: 5}
            ];

            myChart.destroy();
            myChart = new Chart(
                document.getElementById("myChart"),
                makeConfig(data)
            );
            break;
        case "Vecka":
            data = [
                {x: 'Monday', net: 20, cogs: 5, gm: 5},
                {x: 'Tuesday', net: 30, cogs: 1, gm: 2},
                {x: 'Wednesday', net: 23, cogs: 2, gm: 3},
                {x: 'Thursday', net: 26, cogs: 4, gm: 5},
                {x: 'Friday', net: 13, cogs: 5, gm: 1},
                {x: 'Saturday', net: 4, cogs: 6, gm: 2},
                {x: 'Sunday', net: 17, cogs: 3, gm: 3}
            ];
            myChart.destroy();
            myChart = new Chart(
                document.getElementById("myChart"),
                makeConfig(data)
            );
            break;
        case "Månad":
            data = [
                {x: 'Week 1', net: 30, cogs: 15, gm: 15},
                {x: 'Week 2', net: 40, cogs: 11, gm: 12},
                {x: 'Week 3', net: 33, cogs: 12, gm: 13},
                {x: 'Week 4', net: 36, cogs: 14, gm: 15}
            ];
            myChart.destroy();
            myChart = new Chart(
                document.getElementById("myChart"),
                makeConfig(data)
            );
            break;
        case "År":
            data = [
                {x: 'Jan', net: 70, cogs: 21, gm: 15},
                {x: 'Feb', net: 60, cogs: 32, gm: 12},
                {x: 'Mar', net: 43, cogs: 23, gm: 13},
                {x: 'Apr', net: 56, cogs: 24, gm: 15},
                {x: 'May', net: 50, cogs: 35, gm: 15},
                {x: 'Jun', net: 47, cogs: 26, gm: 12},
                {x: 'Jul', net: 89, cogs: 27, gm: 13},
                {x: 'Aug', net: 86, cogs: 28, gm: 15},
                {x: 'Sep', net: 76, cogs: 39, gm: 15},
                {x: 'Oct', net: 59, cogs: 21, gm: 12},
                {x: 'Nov', net: 38, cogs: 22, gm: 13},
                {x: 'Dec', net: 53, cogs: 13, gm: 15}
            ];
            myChart.destroy();
            myChart = new Chart(
                document.getElementById("myChart"),
                makeConfig(data)
            );
            break;
      }
}


function makeConfig(data) {
    var config = {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Net sales',
                data: data,
                backgroundColor: 'rgb(230, 30, 120)',
                borderColor: 'rgb(230, 30, 120)',
                parsing: {
                    yAxisKey: 'net'
                }
            }, {
                label: 'Cost of goods sold',
                data: data,
                backgroundColor: 'rgb(120, 230, 30)',
                borderColor: 'rgb(120, 230, 30)',
                parsing: {
                    yAxisKey: 'cogs'
                }
            }, {
                label: 'Gross margin',
                data: data,
                backgroundColor: 'rgb(30, 120, 230)',
                borderColor: 'rgb(30, 120, 230)',
                parsing: {
                    yAxisKey: 'gm'
                }
            }]
        },
        options: {
            layout: {
                padding: 20
            },
            maintainAspectRatio: false
        }
    };
    return config;
}

  var myChart = new Chart(
      document.getElementById("myChart"),
      makeConfig(data)
  );

  var my2Chart = new Chart(
    document.getElementById("my2Chart"),
    makeConfig(data)
);