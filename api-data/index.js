console.log("hello api data!");

const latestLaunchUrl = "https://api.spacexdata.com/v5/launches/latest";
const allLaunchDataUrl = "https://api.spacexdata.com/v5/launches";
let apiData = {};
let allFlights = [];



//api data call
async function fetchData() {
  apiData = await getData( latestLaunchUrl );
  allFlights = await getData( allLaunchDataUrl );
  renderFlightInfo();

  let filteredFlights = getFilteredFlights();
  let aFlights = getAFlights();
  let starFlights = getStarFlights();

  renderFlights( allFlights, 'all-data' );
  renderFlights( filteredFlights, 'filtered-data' );
  renderFlights( aFlights, 'a-flights');
  renderFlights( starFlights, 'star-flights');

}

  
async function getData(url) {
  let apiResponse = await fetch( url );
  console.log(apiResponse);
  let data = await apiResponse.json();
  return data
}

// render functions
  function renderFlightInfo() {
      let elFlightNumber = document.createElement('span');
      elFlightNumber.innerHTML = `<b>${apiData.flight_number}</b>`;
      document.getElementById('flight-number').appendChild( elFlightNumber );

      let elFlightName = document.createElement('span');
      elFlightName.innerHTML = `<b>${apiData.name}</b>`;
      document.getElementById('flight-name').appendChild( elFlightName );
  }

  function renderFlights( data, mountingPoint ) {
    for (const flight of data) {
      let elListItem = document.createElement('li');
      elListItem.innerHTML = `<span>${flight.flight_number}</span> | <span>${flight.name}</span> | ${flight.cores.length} | ${flight.success}`;
      document.getElementById(mountingPoint).appendChild(elListItem);
    }
  }

  function getFilteredFlights() {
    let filteredFlights = allFlights.filter( item => {
      if( !item.success ){
        return item;
      }
    });
    return filteredFlights;
  }

  function getAFlights() {
    let aFlights = allFlights.filter( item => {
      if ( item.name.startsWith("A") ) {
        return item;
      }
    });
    return aFlights;
  }


function getStarFlights() {
  let starFlights = allFlights.filter( item => {
    if ( item.cores.length > 1 ) {
      return item;
    }
  });
  return starFlights;
}

fetchData();

function turnColor() {
  document.body.style.backgroundColor = 'green';
}
