import { connect } from "react-redux";
import Page from "../../components/page_view";
import { Text } from "@rneui/themed";

const HomePage = ({HomePageModel}) => {
  return (
    <Page>
        <Text h1>{HomePageModel.value}</Text>
    </Page>
  );
};
export default connect(({ HomePageModel, loading }) => ({
  HomePageModel,
  loading,
}))(HomePage);
