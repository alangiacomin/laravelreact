import { PropTypes } from 'prop-types';
import { React } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GridCardComponent = (props) => {
  const {
    title, link, children, img,
  } = props;
  return (
    <Card border="info" bg="light">
      {img.src
        && <Card.Img variant="top" src={img.src} />}
      <Card.Body>
        {title
          && <Card.Title>{title}</Card.Title>}
        <Card.Text>
          {children}
        </Card.Text>
      </Card.Body>
      {link
          && (
            <Card.Footer className="clearfix">
              <Link
                to={{
                  pathname: link.pathname,
                  state: link.state,
                }}
                className="float-right"
              >
                {link.name}
              </Link>
            </Card.Footer>
          )}
    </Card>
  );
};

GridCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({}),
    name: PropTypes.string,
  }),
  img: PropTypes.shape({
    src: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

GridCardComponent.defaultProps = {
  link: null,
  img: {},
};

export default GridCardComponent;
