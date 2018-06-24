import * as alertActions from './alert';
import * as classActions from './class';
import * as loginActions from './login';

export const actionCreators = Object.assign({},
          loginActions,
          alertActions,
          classActions,
);
