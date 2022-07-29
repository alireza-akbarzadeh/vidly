import { Button } from "components/atomes";
import { Modal } from "components/molecules";
import { DetailsMovie } from "..";

const DetailsModal = ({ id, open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <DetailsMovie id={id} />
    </Modal>
  );
};

export default DetailsModal;
