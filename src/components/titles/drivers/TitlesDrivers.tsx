import '../titles.style.scss';

const TitlesDrivers = () => {
    
    return (
        <div className='title-section'>
            <div className='title-section-title'>ID </div>
            <div className='title-section-title'>Name</div>
            <div className='title-section-title'>Surname</div>
            <div className='title-section-title'>Birthday</div>
            <div className='title-section-title'>Create</div>
            <div className='title-section-title'>Status</div>
                <div className="title-section-button">
                    <div className='title-section-title'>Info</div>
                    <div className='title-section-title'>Delete</div>
                </div>
        </div>
    )
}

export default TitlesDrivers;
