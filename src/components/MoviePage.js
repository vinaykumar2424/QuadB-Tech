import { Link, useLocation } from "react-router-dom";
import "./moviepage.css"

const MoviePage = () => {
    const location = useLocation();
    const propsData = location.state;

    return (
        <div className="moviepage">
            <div className="moviecontent">
                <img src={propsData.show.image==null ? `https://source.unsplash.com/1600x900/?movie` : propsData.show.image.medium} className="movieimage" alt="" />
                <div className="moviedetails">
                    <div className="moviename">{propsData.show.name}</div>
                    <div className="movierating">&#9733; {propsData.show.rating.average == null ? "not given yet" : propsData.show.rating.average + "/10"}</div>
                    <div className="movielanguage">{propsData.show.language}</div>
                    <div className="extradetails">
                        <div className="movietime">{propsData.show.runtime && propsData.show.runtime + " min"} &#x2022;</div>
                        <div className="moviegenre">{propsData.show.genres[0]} &#x2022;</div>
                        <div className="moviedate">&nbsp; {propsData.show.premiered}</div>
                    </div>
                    <div className="movieschaduled">{propsData.show.schedule.time +" "+ propsData.show.schedule.days}</div>
                    <Link to="/form" state={propsData}><button className="buyticketnow">Book Tickets ($10)</button></Link>
                </div>
            </div>
            <div className="moviesummary">{propsData.show.summary}</div>
        </div>
    )
}
export default MoviePage;