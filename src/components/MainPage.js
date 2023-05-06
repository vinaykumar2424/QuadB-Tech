import { useState } from "react"
import "./main.css"
import { Link } from "react-router-dom"

const MainPage = () => {
    // this api contains the image url but that url is working slow so it may takes time to rander the images
    const [movie, setMovie] = useState([])
    const fetchUserData = async (e) => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data)
            })
    }
    fetchUserData();

    return (
        <div className="background" >
            {movie?.map((movie, index) => (
                <div className="movieBox" key={index}>
                    <img src={movie.show.image==null ? `https://source.unsplash.com/1600x900/?movie` : movie.show.image.medium} className="movieImg" alt="" />
                    <div className="details">
                        <div className="rating">&#9733; {movie.show.rating.average ==null ? "not given yet" : movie.show.rating.average+"/10"}</div>
                        <div className="movieName">{movie.show.name}</div>
                        <div className="genre">{movie.show.genres[0]}</div>
                        <div className="language">{movie.show.language}</div>
                        <Link to="/moreinfo" state={movie} ><button className="MoreInfoBtn">Book your Ticket</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default MainPage;