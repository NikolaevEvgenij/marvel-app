import ErrorMessage from "../errorMessage/errorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
   return (
      <div>
         <ErrorMessage />
         <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Oh no! This page does not exist</p>
         <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '30px', 'margin-top': '30px' }} to='/'>Return to main Page!</Link>
      </div>
   )
}

export default Page404