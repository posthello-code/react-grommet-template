import "../App.css";
import { Box } from "grommet";

export const IntroText = function () {
  return;
};

function Home() {
  return (
    <div>
      <div className="Box">
        <Box
          round="medium"
          direction="row-responsive"
          alignSelf="center"
          justify="center"
          width="50%"
          align="center"
          pad="medium"
          background="dark-2"
          gap="medium"
        >
          <div>
            Content goes here
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Home;
