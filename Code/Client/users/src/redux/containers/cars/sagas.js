import {connect} from 'react-redux';
import * as type from "./constants";
import * as actions from "./actions";

import ViewCars from "../../../pages/carRental/showCarsPage/ViewCars.js";

const mapStateToProps=state=>({

})

const mapDispatchToProps = (dispatch) =>({
    bookCar:data=>dispatch(bookCar(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ViewCars);