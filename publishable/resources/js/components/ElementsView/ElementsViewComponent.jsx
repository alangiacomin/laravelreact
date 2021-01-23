import { uniqueId } from '@alangiacomin/js-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ElementsViewComponent = (props) => {
  const {
    types, activeType, ViewComponent, setViewType,
  } = props;
  return (
    <>
      {types.length > 1
        && (
          <h5 className="clearfix">
            <ButtonGroup className="d-none d-lg-block float-right">
              {types.map((type, index) => (
                <Button
                  key={uniqueId('button_view_')}
                  aria-label={'View as ' + type}
                  variant="light"
                  active={type === activeType}
                  onClick={() => {
                    setViewType(type);
                  }}
                >
                  <FontAwesomeIcon icon={type.icon} />
                </Button>
              ))}
            </ButtonGroup>
          </h5>
        )}
      <div className="d-none d-lg-block"><ViewComponent type={activeType} /></div>
      <div className="d-lg-none"><ViewComponent type={types[0]} /></div>
    </>
  );
};

ElementsViewComponent.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  activeType: PropTypes.PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setViewType: PropTypes.func.isRequired,
  ViewComponent: PropTypes.func.isRequired,
};

export default ElementsViewComponent;
