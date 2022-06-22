import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Detail } from './pages/Detail'
import New from './pages/New'

export default () => {
    return <BrowserRouter basename={import.meta.env.VITE_FRONTEND_NAME}>
        <Routes>
            <Route path='/new' element={<New />}/>
            <Route path='/shared/:id' element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
}