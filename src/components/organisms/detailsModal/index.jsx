import { Modal } from "components/molecules";
import React from "react";
import { useFetchDetailsMovies } from "store/Hook";

const DetailsModal = ({ id, open, onClose }) => {
  const { data: details, isLoading } = useFetchDetailsMovies(id);
  console.log(details, "Asd;lkj as;lkdjhlka jsshdljkahsd");
  if (isLoading) return <h1>loading ..</h1>;
  return (
    <Modal onClose={onClose} open={open}>
      <div className={"flex flex-col md:flex-row justify-between gap-10"}>
        <div className={"h-full w-full"}>
          <img
            className={"rounded-lg  w-full h-full object-cover"}
            src={`${process.env.REACT_APP_API_IMG}/${details.poster_path}`}
            alt={details.original_title}
          />
        </div>
        <div>
          <ul>
            <li>{details.original_title}</li>
            <li>{details.overview}</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
