import './estilos.css'
import playIcon from '../assets/play.svg'

function component (props) {
  return (
    <div className='hero'>
      <div className="hero__text">
          <div>
            <h4>{props.title}</h4>
            <h1>{props.subtitle}</h1>
            <p>{props.description}</p>
          </div>
          <div className='hero__buttons'>
            <button>
              <span className='descButton'>
                <img src={playIcon} alt="" />
                {props.btnPlay}
              </span>
            </button>
            <button>
              <span className='descButton'>
                {props.btnTrailer}
              </span>
            </button>
          </div>
      </div>
      <div className="hero__imagem">
        <img src={props.imagem} alt="hero-imagem" />
      </div>
    </div>
  )
}

export default component