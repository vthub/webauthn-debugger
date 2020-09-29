import React from 'react';
import Form from "react-bootstrap/cjs/Form";
import {Parser, PARSER_TYPE, EXAMPLES} from "./Parser";

class Debug extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: true,
            isValid: true,
            type: PARSER_TYPE.AUTODETECT,
            value: "",
            fields: []
        }
    }

    onChange = (event) => {
        let value = event.target.value;
        this.setState({value: value})
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (this.state.value !== prevState.value) {
            this.parse(this.state.value)
        }

        if (this.state.isEmpty !== prevState.isEmpty && this.state.isEmpty) {
            this.setState({
                fields: []
            })
        }
    }

    clean = () => {
        this.setState({
            isEmpty: true,
            fields: [],
            type: PARSER_TYPE.AUTODETECT
        })
    }

    parse = (input) => {
        if(!input || input.length === 0) {
            this.clean()
            return
        }
        this.setState({isEmpty: false})

        let parser = new Parser(input);
        parser.parse()
            .then(p => {
                this.setState({
                    isValid: p.isValid(),
                    fields: p.getFields(),
                    type: p.type()
                })
            })
            .catch(e => {
                console.log(e)
                this.setState({
                    isValid: false,
                    type: PARSER_TYPE.AUTODETECT
                })
            })
    }

    setExample = (e, example) => {
        e.preventDefault();
        this.setState({value: JSON.stringify(example, null, ' ')})
    }

    render() {
        let self = this
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="mb-3">Input</h4>
                        <Form>

                            <div className="row">
                                <div className="col-md-12 mb-1">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Type:</Form.Label>
                                        <Form.Control as="select" value={this.state.type} disabled>
                                            {Object.keys(PARSER_TYPE).map(function (key) {
                                                return <option key={key}>{PARSER_TYPE[key]}</option>
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Payload:</Form.Label>
                                        <Form.Control as="textarea" rows={20} value={this.state.value} onChange={this.onChange}/>
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span>Output</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {this.state.isEmpty && <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">No input available</h6>
                                </div>
                            </li>}
                            {!this.state.isValid && !this.state.isEmpty && <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Input is not valid</h6>
                                </div>
                            </li>}
                            {this.state.isValid && this.state.fields.map(function (object, i) {
                                return <li key={i} className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">{object.name}</h6>
                                        <small className="text-muted">{object.value}</small>
                                    </div>
                                </li>
                            })}
                        </ul>

                        {!this.state.isEmpty && this.state.isValid &&
                        <button type="submit" className="btn btn-secondary">Copy as JSON</button>}

                        {!this.state.isEmpty &&
                        <button type="submit" className="btn btn-warning ml-3" onClick={() => this.setState({value: ""})}>Clean</button>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        Currently supported types:
                        <ul>
                            {Object.keys(PARSER_TYPE).map(function (key) {
                                if(PARSER_TYPE[key] !== PARSER_TYPE.AUTODETECT) {
                                    return <li key={key}>{PARSER_TYPE[key]} - <a href={"/#"} onClick={(e) => self.setExample(e, EXAMPLES[key])}>Try now</a> </li>
                                }
                                return ""
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Debug
