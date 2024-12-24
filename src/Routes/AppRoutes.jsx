import {Routes,Route} from 'react-router-dom';
import Home from '../components/home'
import Services from '../components/services'
import  Aboutus from '../components/aboutus'

export const AppRoutes =()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
    )
}
