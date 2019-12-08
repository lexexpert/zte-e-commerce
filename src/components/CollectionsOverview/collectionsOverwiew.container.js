import {createStructuredSelector} from "reselect";
import {selectIsCollectionLoading} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import CollectionsOverview from "./CollectionsOverview";
import Spinner from "../Spinner/Spinner";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
