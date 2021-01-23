import { PropTypes } from 'prop-types';
import { React } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListCardComponent = (props) => {
  const {
    title, link, children, beforeText, afterText,
  } = props;
  return (
    <Card border="info" bg="light" className="mb-3 clearfix">
      <Card.Header className="clearfix">
        <Card.Title className="float-left">{title}</Card.Title>
        {link
          && (
            <Link
              to={{
                pathname: link.pathname,
                state: link.state,
              }}
              className="float-right"
            >
              {link.name}
            </Link>
          )}
      </Card.Header>
      <Card.Body>
        {beforeText}
        <Card.Text>
          {children}
        </Card.Text>
        {afterText}
      </Card.Body>
    </Card>
  );
};

ListCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({}),
    name: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  beforeText: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  afterText: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ListCardComponent.defaultProps = {
  link: null,
  beforeText: null,
  afterText: null,
};

export default ListCardComponent;
