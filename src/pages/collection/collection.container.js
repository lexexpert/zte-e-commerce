import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import CollectionPage from "./CollectionPage";


const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionPageContainer;


