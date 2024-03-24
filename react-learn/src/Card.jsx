import profile_pic from './assets/profile-pic.jpg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profile_pic} alt="Profile Picture" />
            <h2 className='card-title'>János Csordás</h2>
            <p className='card-text'>I'm a student in Web Development and I like to play video games.</p>
        </div>
    )
}

export default Card