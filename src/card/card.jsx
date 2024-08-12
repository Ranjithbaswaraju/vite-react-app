import './card.css'
const Card=()=>{
    return(
        <div className="d">
            <h1 className='head'>BIRD</h1>
            <img className="image" src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600"></img>
            <h2 className='card-heading'>NATURE</h2>
            <p className="card-title">Nature photography is a wide range of photography taken outdoors and devoted to displaying natural elements such as landscapes, wildlife, plants, and close-ups of natural scenes and textures.</p>
            <button className="btn">Click Here</button>
        </div>
    )
}
export default Card;