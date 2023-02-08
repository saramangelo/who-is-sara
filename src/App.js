import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import background from "./images/wisbg.jpeg"

const styles = {
    image: {
    backgroundImage: `url(${background})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
}

const App = () => <div style={styles.image}> <PortfolioContainer /> </div>;

export default App;

