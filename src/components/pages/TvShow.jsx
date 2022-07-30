import { PageTitle } from "components/molecules";
import { TVAiringToday, TvTopRated, PopularTv } from "components/organisms";
import TVOnAir from "components/organisms/tvOnAir";

const TvShow = () => {
  return (
    <PageTitle title='Vidly : Ratings, Reviews, and Where to Watch the Best Movies & TV Shows'>
      <PopularTv />
      <TVAiringToday />
      <TVOnAir />
      <TvTopRated />
    </PageTitle>
  );
};

export default TvShow;
