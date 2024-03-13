
import ReactDOM from 'react-dom/client';
import "./index.css";
import Navigation from './navigation';
import Product from './product';
import Description from './description';

function Index() {
  return( <body>
  <Navigation />
  <div id="product"><Product /><Description /></div>
  </body>
  )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(<Index />);