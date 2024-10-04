import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./home.scss"
import{ useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext";
import Share from "../../components/share/Share"
const Home = () => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "darkHome" : "home"}>
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home