import { Button } from "components/atomes";
import { Modal } from "components/molecules";
import { DetailsMovie } from "..";

const DetailsModal = ({ id, open, onClose }) => {
  return (
    <Modal onClose={onClose} open={open}>
      <div className='text-right'>
        <Button onClick={onClose} variant={"danger"} label={"Close"} />
      </div>
      <DetailsMovie id={id} />
    </Modal>
  );
};

export default DetailsModal;
