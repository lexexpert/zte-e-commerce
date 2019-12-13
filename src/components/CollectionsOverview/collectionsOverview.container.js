import {createStructuredSelector} from "reselect";
import {selectIsCollectionLoading} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import CollectionsOverview from "./CollectionsOverview";
import SpinnerIsLoading from "../SpinnerIsLoading/SpinnerIsLoading";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  SpinnerIsLoading
)(CollectionsOverview);

export default CollectionsOverviewContainer;
