import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Icon,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function GuideButton() {
  return (
    <div id="main" className="guide">
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Button</h2>
        {/* Button Type 01 */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Button Type 01"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.03)",
            }}
          />

          <CardContent>
            <p>General (글자수에 따라 크기 유동적으로 변함.)</p>

            <Button size="small" color="primary" variant="outlined">
              size='sm'
            </Button>
            <Button size="small" color="primary" variant="contained">
              size='sm'
            </Button>
            <Button color="primary" variant="outlined">
              size='md'
            </Button>
            <Button color="primary" variant="contained">
              size='md'
            </Button>
            <Button color="secondary" variant="outlined">
              size='md'
            </Button>
            <Button color="secondary" variant="contained">
              size='md'
            </Button>
            <Button className="MuiButton-outlinedInfo" variant="outlined">
              size='md'
            </Button>
            <Button className="MuiButton-containedInfo" variant="contained">
              size='md'
            </Button>
            <Button className="MuiButton-outlinedMuted" variant="outlined">
              size='md'
            </Button>
            <Button className="MuiButton-containedMuted" variant="contained">
              size='md'
            </Button>
            <Button className="MuiButton-outlinedDefault" variant="outlined">
              size='md'
            </Button>

            <Box mt={2}>
              <p>Fixed (고정 Width. 리스트에만 쓰임. figma에 정의되어있음.)</p>
              <Button className="btn-fixed" variant="contained" color="primary">
                Apply
              </Button>
              <Button
                className="btn-fixed"
                color="secondary"
                variant="contained"
              >
                Complete
              </Button>
              <Button
                className="MuiButton-containedMuted btn-fixed"
                variant="contained"
              >
                Disabled
              </Button>
            </Box>
            <hr />
            <p>General</p>
            <div className="btn-wrap">
              <div className="btn-area">
                <Button className="MuiButton-containedInfo" variant="contained">
                  Download
                </Button>
                <Button variant="contained" color="primary">
                  Select recipients
                </Button>
              </div>
            </div>
            <Box mt={2}>
              <p>Fixed</p>
              <div className="btn-wrap">
                <div className="btn-area">
                  <Button
                    className="MuiButton-outlinedDefault btn-fixed"
                    variant="outlined"
                  >
                    Prev
                  </Button>
                  <Button
                    className="btn-fixed"
                    variant="contained"
                    color="primary"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Box>
            <hr />
            <p>Route</p>
            <Link to="/" className="btn-link">
              <Button variant="contained" color="primary">
                Route Btn
              </Button>
            </Link>
            <Link to="/" className="btn-link">
              <Button variant="contained" color="secondary">
                Route Btn
              </Button>
            </Link>
            <hr />
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-camera.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              Selected Image
            </Button>
            <Button
              className="MuiButton-outlinedMuted MuiButton-downloadIcon"
              variant="outlined"
              startIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-download-disabled.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              Video
            </Button>
            <Button
              className="MuiButton-containedInfo MuiButton-downloadIcon"
              variant="contained"
              startIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-download-white.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              PDF
            </Button>
          </CardContent>
        </Card>

        {/* Button Type 02 - Rounded */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Button Type 02 - Rounded"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.03)",
            }}
          />

          <CardContent>
            <Button
              fullWidth
              className="MuiButton-rounded"
              color="primary"
              variant="contained"
            >
              size='lg' Rounded Pill
            </Button>
          </CardContent>
        </Card>

        {/* Button Type 03 - Text */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Button Type 03 - Text"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.03)",
            }}
          />

          <CardContent>
            <Button
              className="font-m"
              color="primary"
              startIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-prev-arrow-primary.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              PREV
            </Button>
            <Button
              className="font-m"
              color="primary"
              endIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-next-arrow-primary.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              NEXT
            </Button>
            <Button
              className="font-m MuiButton-outlinedMuted"
              startIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-prev-arrow-disabled.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              PREV
            </Button>
            <Button
              className="font-m MuiButton-outlinedMuted"
              endIcon={
                <Icon>
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/images/icon/icon-next-arrow-disabled.svg`}
                    alt="camera"
                  />
                </Icon>
              }
            >
              NEXT
            </Button>
            <hr />

            <Link to="" className="color-black btn-icon-clip">
              Packaging Optimization of 300ul Ritter tips.pdf
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default GuideButton;
