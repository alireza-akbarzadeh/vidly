import { Modal } from "components/molecules";
import React from "react";
import { useFetchDetailsMovies } from "store/Hook";

const DetailsModal = ({ id, open, onClose }) => {
  const details = useFetchDetailsMovies(id);
  console.log(details, "Asd;lkj as;lkdjhlka jsshdljkahsd");
  return (
    <div>
      <Modal onClose={onClose} open={open}></Modal>
    </div>
  );
};

export default DetailsModal;
