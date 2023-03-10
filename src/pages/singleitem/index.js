//import R from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shopping-actions'
import {useHistory} from 'react-router-dom'

const Item = ({currentItem, addToCart}) => {
    document.getElementById('title').innerHTML = 'Citi Bike | #producto '
    document.documentElement.scrollTop=0
    const location = useHistory()
    return ( 
    <div className='glass'>
        <div className='singleItem'>
        <h1>{currentItem.title}</h1>
            <img src={currentItem.image} alt={currentItem.catg.name}/>
            <div className='btnRow'>
                <button
                className='orange'
                onClick={()=>location.goBack()}
                >
                &laquo;&nbsp;volver
                </button>
                <button
                className='lime'
                onClick={()=>addToCart(currentItem.id)}
                >
                agregar&nbsp;&raquo;
                </button> 
            </div>
        </div>
    </div> 
    
    );
}
const mapStateToProps = state =>{
    return {
        currentItem: state.shop.currentItem
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addToCart:(id)=>dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);