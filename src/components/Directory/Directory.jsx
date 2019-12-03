import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './directory.scss';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({id, ...sectionProps}) =>
        (<MenuItem key={id} {...sectionProps}/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
