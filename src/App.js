import './App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './components/Products';
import { productData,responsive } from './components/data';



const App = () => {
  
  // eslint-disable-next-line
  const product = productData.map(item => 
  <Products 
  imgUrl={item.imageUrl} 
  name={item.title} 
  description={item.description}
  price={item.price} />
 )
 
  return(
    <>
    <div className="App">
      <h1 className="heading">React Card Carousel and Slider</h1>
       <Carousel  showDots={true} responsive={responsive}>
         {product}
        </Carousel>
    </div>
      
      
    </>
  )
}
export default App;

