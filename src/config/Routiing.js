import { Route, Switch } from "react-router";
import MediaCard from "../component/Cards/Card"
import Categories from "../component/categories/categories"
import Features from "../component/features/Features"
import Blog from "../component/blog/Blog"

function Routing(){
    return(
        <>
        <Switch>
            <Route exact path="/" component={MediaCard} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/blog" component={Blog} />
            {/* <Route component={Default} /> */}

        </Switch>
        </>
    )
}
export default Routing;