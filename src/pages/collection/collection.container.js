import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import SpinnerIsLoading from "../../components/SpinnerIsLoading/SpinnerIsLoading";
import CollectionPage from "./CollectionPage";


const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  SpinnerIsLoading
)(CollectionPage);

export default CollectionPageContainer;


