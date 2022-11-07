import React from "react";
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Card } from "react-bootstrap";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const AggrementTemplate1 = () => {
  return (
    <Col lg='12'>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between mb-4'>
            <div className=''>
              <Image
                src={
                  "https://www.diptodiagnostic.com/assets/img/logo_dipto_r3.png"
                }
                className=''
                width='160'
                height='80'
                alt='1'
              />
            </div>
            <div className=''>
              <Image
                src={
                  "https://seeklogo.com/images/I/iaf-recognition-arrangement-logo-6758B06F23-seeklogo.com.png"
                }
                className=''
                width='80'
                height='80'
                alt='1'
              />
            </div>
          </div>
          <div className='d-flex justify-content-start align-items-center mb-3'>
            <div className='pe-3'></div>
          </div>
          <div>
            <small>
              it is impossible to withhold education from the respective mind as
            </small>
            <small>it is impossible to force it uopen the unreasoning</small>
          </div>
          <div className='pt-4'>
            <small>- Agens Reppligers</small>
          </div>
          <div className='pt-3'>
            <small>- Managements</small>
          </div>
          <div className='pt-3'>
            <small>- Creative Sprint</small>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

AggrementTemplate1.propTypes = propTypes;
AggrementTemplate1.defaultProps = defaultProps;
// #endregion

export default AggrementTemplate1;
