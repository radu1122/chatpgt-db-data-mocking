import React from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
  Container,
  Alert,
  Spinner
} from "reactstrap";
import { GptCaller } from "../sdk/gptCaller.sdk";

export function Prompt() {
  const [inputData, setInputData] = React.useState("");
  const [jsonData, setJsonData] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [isCalling, setIsCalling] = React.useState(false);

  const handleSubmit = async event => {
    setIsCalling(true);
    event.preventDefault();
    if (inputData === "") {
      setErrMsg("Please enter a valid schema");
      return;
    }
    const res = await GptCaller.askChatGPT(inputData);
    setIsCalling(false);
    setJsonData(res);
  };

  const handlerCopy = () => {
    navigator.clipboard.writeText(jsonData);
  };

  return (
    <Container style={{ textAlign: "left" }}>
      <Row>
        <Col md={12}>
          <h1>Mock Data Generator from DB Schema</h1>
        </Col>
        <Col md={12}>
          <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup>
              <Label for="exampleText">Table Schema - Any Format</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                value={inputData}
                onChange={e => setInputData(e.target.value)}
                // bigger input
                style={{ height: "300px" }}
              />
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              onClick={e => handleSubmit(e)}
            >
              Generate Mock Data{" "}
              {isCalling ? <Spinner size="sm" color="light" /> : null}
            </Button>
          </Form>
        </Col>
        <Col md={12} className="mt-4" style={{ textAlign: "left" }}>
          <Label for="respText">Generated Data</Label>

          <Input
            type="textarea"
            name="text"
            id="respText"
            value={jsonData}
            // bigger input
            style={{ height: "300px" }}
            disabled
          />
          <Button color="primary" className="mt-2" onClick={handlerCopy}>
            Copy
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
