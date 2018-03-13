import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import breadcrumbReducer from './breadcrumb'
/*
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import TabReducer from '../common/tab/tabReducer'
import AuthReducer from '../auth/authReducer'
*/

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    breadcrumbReducer
    /*
    dashboard: DashboardReducer,
    billingCycle: BillingCycleReducer,
    tab: TabReducer,
    auth: AuthReducer
    */
})

export default rootReducer