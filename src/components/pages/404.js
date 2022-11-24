import {Link} from "react-router-dom";
import ErrorMarvel from "../errorMessage/ErrorMarvel";


const Page404 = () => {
  return(
      <div>
          <ErrorMarvel/>
          <p style={{'marginTop': '30px','textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
          <Link to={'/'} style={{'display': 'block', 'marginTop': '30px', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Back to main page!</Link>
      </div>
  )
}

export default Page404;