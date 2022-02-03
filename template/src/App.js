import * as React from 'react';
import MyRoutes from './components/routes/Routes';//Import routes
import { Header, StickyFooter, sections, title } from "./components/index";

function App() {
  return (
    <div>
      {/* <Header /> 
        Edit HeaderProps.js to change the header attributes.
        Required for navigation.
      */}
      <Header title={title} sections={sections}/>
      
      {/* <Routes /> */}
      <MyRoutes />
    
      {/* <StickyFooter /> */}
      <StickyFooter />
    </div>
  );
}

export default App;
