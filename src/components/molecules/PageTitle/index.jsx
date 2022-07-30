import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

const PageTitle = forwardRef(({ children, title = "", ...other }, ref) => (
  <div ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default PageTitle;
