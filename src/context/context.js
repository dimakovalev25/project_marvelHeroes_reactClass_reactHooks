import {createContext} from "react";

const dataContext = createContext({
   name: 'Kovalev Dima',
   email: function () {
      // console.log('kovalev.dima@gmail.com')
   }

});

export default dataContext;