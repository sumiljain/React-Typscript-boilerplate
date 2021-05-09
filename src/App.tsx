import './style.css'
import Sumil from '../assests/Sumil.jpeg'
import { Counter } from './components/Counter'
export const App = () => {
  return (
    <>
      <h1>
        {' '}
        SUMIL JAIN__. Typescript react templete for {process.env.NODE_ENV}
      </h1>
      <img src={Sumil} alt="The Founder" width="300px" height="200" />
      <Counter />
    </>
  )
}
