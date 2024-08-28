import { cloneElement, Component } from "react";
import axios from "axios";
import BasicExample from "./wather-card";

class WeatherApp extends Component {
    state = {
        latitude: '',
        longitude: '',
        cityName: '',
        Humitidy: '',
        Temperature: '',
        windSpeed: '',
        imageUrl: '', // Add imageUrl to state
        isVisible: false // Add isVisible to control visibility
    }

    componentDidMount() {
        if (navigator?.geolocation) {
            navigator?.geolocation?.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    if (latitude && longitude) {
                        this.fetchData(latitude, longitude);
                    }
                })
        }
    }

    fetchData = async (lat, long) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=591ce66de7e8356844d69ac96a20825f`);
        let imageUrl = '';
        const tempCelsius = data.main.temp_max - 273.15;
        switch (true) {
            case tempCelsius < 24:
                imageUrl = "https://wallpapers.com/images/hd/perfect-weather-with-gradient-sky-ym0nn79vhoqg34v3.jpg";
                break;
            case tempCelsius >= 24 && tempCelsius <= 45:
                imageUrl = "https://plus.unsplash.com/premium_photo-1676517307749-d36c6ece126e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
                break;
            case tempCelsius > 45:
                imageUrl = "https://img.freepik.com/free-photo/grassy-field-with-leafless-trees-distance-cloudy-sky-background_181624-4535.jpg";
                break;
            default:
                imageUrl = '';
        }

        this.setState({
            latitude: lat,
            longitude: long,
            cityName: data.name,
            Humitidy: data.main.humidity,
            Temperature: data.main.temp_max,
            windSpeed: data.wind.speed,
            imageUrl: imageUrl,
            isVisible: true // Show the data when fetched
        });
    }

    toggleVisibility = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible // Toggle visibility
        }));
    }

    render() {
        const { latitude, longitude, cityName, Humitidy, Temperature, windSpeed, imageUrl, isVisible } = this.state;
        return (
            <>
                <button onClick={this.toggleVisibility} style={{textAlign:'center',marginLeft:'48%',marginTop:'20px',backgroundColor:'Yellow'}}>Click Me</button>
                {isVisible && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <BasicExample style={{position:'relative',marginLeft:'150px'}}
                            Latitude={<p>{`Latitude: ${latitude}`}</p>}
                            Longitude={<p>{`Longitude: ${longitude}`}</p>}
                            Area={<p>{`Area: ${cityName}`}</p>}
                            Humidity={<p>{`Humidity: ${Humitidy}`}</p>}
                            Temperature={<p>{`Temperature: ${(Temperature - 273.15).toFixed(2)} °C`}</p>}
                            Wind={<p>{`WindSpeed: ${windSpeed}`}</p>}
                            image={imageUrl}
                        />
                    </div>
                )}
            </>
        );
    }
}

export default WeatherApp;
