import { Header } from "./sections/Header";
import { Blogs } from "./sections/Blogs";
import { Contact } from "./sections/Contact";
import { Review } from "./sections/Review";
import { Feedback } from "./sections/Feedback/Feedback";
import { Footer } from "./sections/Footer";
import { Navigation } from "./components/Navigation";


function App() {
  return (
    <div className="App">
    <Header/>
    <Review/>
    </div>
  );
}

export default App;
