import { PropTypes } from 'prop-types';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const PaginaComponent = (props) => {
  const {
    sottotitolo, titolo, contenuti, canEdit, editMode,
  } = props;
  return (
    <Row className="clearfix">
      <Col>
        <h4>{sottotitolo}</h4>
        <h1>
          {titolo}
          <Image
            className="float-right"
            src="https://via.placeholder.com/300"
            width="300px"
            height="300px"
            alt="300x300"
          />
        </h1>
        <p>{!editMode
          ? <Trans>{contenuti}</Trans>
          : <><input type="text" defaultValue={contenuti} /><br /><Link to="/pagina">Indietro</Link></>}
        </p>
        {!editMode && canEdit && <p><Link to="/pagina/edit">Modifica dati</Link></p>}
        <p><Link to="/pagina/edit">Modifica dati (sempre)</Link></p>
        <p><Link to="/logout">Logout</Link></p>
      </Col>
    </Row>
  );
};

PaginaComponent.propTypes = {
  sottotitolo: PropTypes.string.isRequired,
  titolo: PropTypes.string.isRequired,
  contenuti: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  canEdit: PropTypes.bool,
  editMode: PropTypes.bool,
};

PaginaComponent.defaultProps = {
  canEdit: false,
  editMode: false,
};

export default PaginaComponent;
