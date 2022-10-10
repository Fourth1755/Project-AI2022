import "./index.css";
const TextBox=(props)=>{
    const {text} =props
    let dropzoneModalStyle = {
        width: `170px`,
        height: `170px`,
        backgroundImage: `url(https://i.scdn.co/image/ab6761610000e5ebba025c8f62612b2ca6bfa375)`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,

      };
    
    return(
        <div className="textbox-container">
            <div style={dropzoneModalStyle}></div>
            <div className="textbox-textbox"><h3>Hatsune Miku</h3>
                <div class="typewriter">
                    <div class="typewriter-text">{text}</div>
                </div>
            </div>
        </div>
    )
}
export default TextBox