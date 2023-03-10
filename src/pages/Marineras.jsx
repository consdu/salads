import NavBar from '../components/NavBar'
import Recipe from '../components/Recipe'
import useDataContext from '../hooks/use-data-context'
import RecipesWrapper from '../components/RecipesWrapper'

function Marineras() {

  const { recipes, bookmarks, onBookmarkToggle } = useDataContext();

  return (
    <>
      <NavBar page="Marineras" />
      <RecipesWrapper>
        {recipes.filter(item => item.category === "marineras").map(item => {
          return (
            <Recipe key={item.id} item={item} bookmarks={bookmarks} onBookmarkToggle={onBookmarkToggle} />
          )
        })}
      </RecipesWrapper>
    </>
  )
}

export default Marineras;
