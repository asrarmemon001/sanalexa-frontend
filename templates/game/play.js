import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap-v5"
import { apiBaseUrl } from "../../utils/Baseurl";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel
} from "@mui/material";

const PlayType = ({ handleModal, show, modalPayload }) => {
  const [type, setType] = useState('');
  const [project, setProject] = useState({});
  useEffect(() => {
    if (modalPayload) {
      setProject(modalPayload);
      console.log(modalPayload);
    }

  }, [modalPayload])

  const playNow = () => {
    console.log(type)
    if (type === 'webgl') {
      window.open(apiBaseUrl + '/' + project.webGlFile); 
    }
  }

  return (
    <Modal show={show} onHide={() => handleModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Choose plateform</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="text-center mb-4">Which plateform You want to play</h6>

        <div className="card-bordered px-3 pb-3">
          <FormControl className="registers">
            <RadioGroup
              row
              aria-labelledby="gender-label"
              name="gender"
              value={type}
              style={{display: 'grid'}}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {
              project && project.plateform && project.plateform.length > 0 && 
              project.plateform.map((obj) => (
                <FormControlLabel value={obj} control={<Radio />} label={`Want To Play at ${obj}`} />
              )) }
            </RadioGroup>
          </FormControl>
          <div >
            <div className="d-flex w-100">
              <button className="btn btn-danger my-4 mr-3 text-white w-100" target="_blank" rel="noreferrer" data-toggle="tooltip" data-original-title="Play" onClick={(e) => playNow()}>
                Play
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default PlayType