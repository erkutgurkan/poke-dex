import { Col, Row } from "antd";

import SideContent from "../components/SideContent";
import DetailedInfos from "../components/DetailedInfos";

function DetailedPoke() {
  return (
    <div className="container">
      <Row>
        <Col span={12}>
          <SideContent />
        </Col>
        <Col span={12}>
          <DetailedInfos />
        </Col>
      </Row>
    </div>
  );
}

export default DetailedPoke;
