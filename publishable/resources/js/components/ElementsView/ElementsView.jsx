import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import ElementsViewComponent from './ElementsViewComponent';

export const elementsViewTypes = {
  list: { id: 'list', icon: ['fas', 'th-list'] },
  grid: { id: 'grid', icon: ['fas', 'th'] },
};

const ElementsView = (props) => {
  const { viewTypes, ViewComponent } = props;

  const [viewType, setViewType] = useState(viewTypes[0]);

  return (
    <ElementsViewComponent
      activeType={viewType}
      setViewType={setViewType}
      types={viewTypes}
      ViewComponent={ViewComponent}
    />
  );
};

ElementsView.propTypes = {
  viewTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  ViewComponent: PropTypes.func.isRequired,
};

export default ElementsView;
