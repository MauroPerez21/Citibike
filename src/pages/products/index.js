
import Product from '../../components/Products'
//import Hash from '../../components/Loading'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoFunnelSharp } from 'react-icons/io5'
import Rt from 'react'
import useTimeout from '../../hooks/useTimeout'
import Next from '../../components/Next'
const Products = ({products}) => {

    document.getElementById('title').innerHTML = 'Citi Bike | productos '
    document.documentElement.scrollTop=0
    const [loading, setLoading] = Rt.useState( true )
    useTimeout(()=>setLoading(false),1000)
    return ( 
    
    <>
    {loading?<Next />:
    <div className="glass">
    <div className='productContainer'>
        <div className='dashboard'>
            <div className='navaLinks'>
                <Link to='/filtros'><i><IoFunnelSharp/></i>&nbsp;Categorias</Link> 
            </div>
             
        </div>
        <div>
            <h1>Productos</h1>
             <div className='kard'>
            {products.map(prod => 
            <Product key={prod.id} productData={prod} />
            )}
            </div>
        </div>
    </div>
    </div>
    }
    </>
    
    
    );
}
const mapStateProps = state =>{
    return {
        products: state.shop.products
    }
}
export default connect(mapStateProps)(Products);