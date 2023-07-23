const myScript = async (e) => {
  e.preventDefault();
  let locationSearch = document.getElementById("location").value;

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: locationSearch },
    headers: {
      "X-RapidAPI-Key": "---REDACTED---",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // response.data
    // set temperature, wind speed and humidity values
    document.getElementById("locationName").innerHTML =
      response.data.location.name;
    document.getElementById("temperatureValue").innerHTML =
      response.data.current.temp_c;
    document.getElementById("windSpeedValue").innerHTML =
      response.data.current.wind_mph;
    document.getElementById("humidityValue").innerHTML =
      response.data.current.humidity;
    document.getElementsByClassName("error")[0].style.display = "none";
    document.getElementsByClassName("infoContainer")[0].style.display = "flex"; // change infoContainer to display flex
  } catch (error) {
    //set error to display flex instead of infoContainer
    document.getElementsByClassName("infoContainer")[0].style.display = "none";
    document.getElementsByClassName("error")[0].style.display = "flex";
  }
};

document.getElementById("locationSearch").addEventListener("submit", myScript);
