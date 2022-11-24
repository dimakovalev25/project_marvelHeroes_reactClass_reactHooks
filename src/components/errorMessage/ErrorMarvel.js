import img from './errorMarvel.gif'

const ErrorMarvel = () => {
  return (
      <img style={{display: 'block', width: '450px', height: '450px', objectFit: 'contain', margin: '0 auto'}} src={img} alt={'error'} />
  )
}

export default ErrorMarvel;