import NavBar from '../components/NavBar'
import RecipesWrapper from '../components/RecipesWrapper'
import NotFoundSVG from "../page_not_found.svg";

function Home() {

  return (
    <>
      <NavBar page="404" />
      <div className='d-flex justify-content-center'>
        <img src={NotFoundSVG} alt="Page not found" width={500} className="not-found" />
      </div>
    </>
  )
}

export default Home;
