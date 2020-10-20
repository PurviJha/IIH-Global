import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { TextField, Slider, Button, Checkbox, Paper, Select, InputLabel } from '@material-ui/core';
import { Row } from "reactstrap";


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            name: "",
            email: "",
            number: "",
            website: "",
            chanllange: "",
            project: "",
            sliderval: [10000, 300000],
                Web_or_Mobile_App_Development: false,
                Hire_Dedicated_Developer: false,
                AI_ML_Development_Services: false,
                Costom_software_development: false,
                Software_Testing_and_QA: false,
                API_Development_and_Integration: false,
            date: (new Date()).toISOString().substr(0, 10),
            Timezone: "",
            time:"",
            errors:{},
            selectedFile: null

        })
    }
    onFileChange = event => { 
     
        this.setState({ selectedFile: event.target.files[0] });        
      };
    onChangeInput=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handlesliderchange = (e, v) => {
        this.setState({
            sliderval: v
        })
    }
    handlecheckbox = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }
    onChangedate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    onChangeSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validate(){
        const {name,email,project}=this.state
        let errors = {};
        let formIsValid = true;
        if (name.trim() === '') {
            formIsValid=false
           
            errors["name"]='Name is required'

          }
       if (email.trim() === '') {
         formIsValid=false
         errors["email"] ='Email is required'
        
       }
       else if ( !(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,))) {
         formIsValid=false
         errors["email"] ='Please enter a valid email'
        
       }
       if (project.trim() === '') {
        formIsValid=false
       
        errors["project"]='This is required'

      }
       this.setState({errors: errors});
       return formIsValid;
     
     };

    handleClick=()=>{
        if(this.validate()){
            alert("I am clicked")
         let userData
        userData=this.state
        console.log("userData",userData)
        this.setState({
            name: "",
            email: "",
            number: "",
            website: "",
            challange: "",
            project: "",
            sliderval: [10000, 300000],
                Web_or_Mobile_App_Development: false,
                Hire_Dedicated_Developer: false,
                AI_ML_Development_Services: false,
                Costom_software_development: false,
                Software_Testing_and_QA: false,
                API_Development_and_Integration: false,
            date: (new Date()).toISOString().substr(0, 10),
            Timezone: "",
            time:"",
            selectedFile: null
        })
          }   
    }

    render() {
        const marks = [
            {
                value: 5000,
                label: '$5000',
            },
            {
                value: 500000,
                label: '$500000',
            },
        ];

        return (
            <div>

                <Card style={{

                    "marginLeft": "100px",
                    "marginBottom": "100px",
                    "marginRight": "100px",
                    "marginTop": "100px",
                }}>
                    <div >
                        <h2>1. Tell us about your company</h2>

                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <TextField
                                required
                                id="name"
                                label="Your Name"
                                value={this.state.name}
                                type="text"
                                margin="normal"
                                variant="outlined"
                                fullWidth={true}
                                onChange={this.onChangeInput}
                            />
                            <p style={{color:"red" ,fontSize:"14px" }}>{this.state.errors["name"]}</p>
                        </Row>

                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <TextField required id="email" label="Your Email" value={this.state.email} type="email" margin="normal" variant="outlined" fullWidth={true} onChange={this.onChangeInput}/>
                            <p style={{color:"red" ,fontSize:"14px" }}>{this.state.errors["email"]}</p>
                        </Row>

                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <TextField id="number" label="Your Phone Number" value={this.state.number} type="number" margin="normal" variant="outlined" fullWidth={true}  onChange={this.onChangeInput} />
                        </Row>

                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <TextField id="website" label="Company Website" value={this.state.website} type="text" margin="normal" variant="outlined" fullWidth={true}  onChange={this.onChangeInput}/>
                        </Row>

                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <TextField id="challange" label="What's your company's biggest challange today?" type="text" value={this.state.challange} margin="normal" variant="outlined" fullWidth={true}  onChange={this.onChangeInput}/>
                        </Row>

                        <h2>2. What are you looking to work on?</h2>
                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <TextField required id="project" label="Describe your project briefly" type="text" margin="normal"  value={this.state.project} variant="outlined" multiline rows={8} fullWidth={true} onChange={this.onChangeInput} />
                            <p style={{color:"red" ,fontSize:"14px" }}>{this.state.errors["project"]}</p>
                        </Row>
                        <br />
                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <Card style={{ "border": "1px solid black" }}>
                                <h4>Whats your Budget?</h4>
                                <Slider
                                    value={this.state.sliderval}
                                    aria-labelledby="track-inverted-range-slider"
                                    style={{ "marginLeft": "50px", "width": "1000px" }}
                                    onChange={this.handlesliderchange}
                                    max={500000}
                                    valueLabelDisplay="auto"
                                    marks={marks}

                                />
                                <br /> <br />
                            </Card>
                            <br /> <br />
                        </Row>

                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <Card style={{ "border": "1px solid black" }}>

                                <h4>Browse your project</h4>
                                <input
                                    
                                    id="file"
                                    type="file"
                                    style={{ "display": 'none' }}
                                    onChange={this.onFileChange}
                                />
                                <label htmlFor="file">
                                    <Button variant="contained" color="primary" component="span" >
                                        Upload
                                </Button>
                                </label>
                                <br /> <br />
                            </Card>
                            <br /> <br />
                        </Row>
                        <h2>3. What services are you interested in?</h2>
                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>

                            <Card style={{ "border": "1px solid black" }}>
                                <br />
                                <div style={{"marginLeft": "300px", "display": "flex", "flexDirection": "row", }}>

                                    <Paper elevation={3} style={{ "border": "1px solid black", "width": "300px", "height": "100px" }}>
                                        <Checkbox
                                            checked={this.state.Web_or_Mobile_App_Development}
                                            onChange={this.handlecheckbox}
                                            name="Web_or_Mobile_App_Development"
                                            color="primary"
                                        />
                          Web or Mobile App Development
                          </Paper>
                                    <Paper elevation={3} style={{ "border": "1px solid black", "width": "300px", "height": "200" }}>
                                        <Checkbox
                                            checked={this.state.Hire_Dedicated_Developer}
                                            onChange={this.handlecheckbox}
                                            name="Hire_Dedicated_ Developer"
                                            color="primary"
                                        />
                          Hire Dedicated Developer</Paper></div>
                          <div style={{"marginLeft": "300px", "display": "flex", "flexDirection": "row"  }}>

                                    <Paper elevation={3} style={{ "border": "1px solid black", "width": "300px", "height": "100px" }}>
                                        <Checkbox
                                            checked={this.state.AI_ML_Development_Services}
                                            onChange={this.handlecheckbox}
                                            name="AI_ML_Development_Services"
                                            color="primary"
                                        />
                          AI/ML Development Services</Paper>

                                    <Paper elevation={3} style={{ "border": "1px solid black", "width": "300px", "height": "300" }}>
                                        <Checkbox
                                            checked={this.state.Costom_software_development}
                                            onChange={this.handlecheckbox}
                                            name="Costom_software_development"
                                            color="primary"
                                        />Costom software development</Paper></div>
                                        <div style={{"marginLeft": "300px", "display": "flex", "flexDirection": "row" }}>
                                    <Paper elevation={3} style={{ "border": "1px solid black", "width": "300px", "height": "100px" }}>
                                        <Checkbox
                                            checked={this.state.Software_Testing_and_QA}
                                            onChange={this.handlecheckbox}
                                            name="Software_Testing_and_QA"
                                            color="primary"
                                        />Software Testing and QA</Paper>
                                    <Paper elevation={3} style={{ "border": "1px solid black", "width": "300px", "height": "300" }}>
                                        <Checkbox
                                            checked={this.state.API_Development_and_Integration}
                                            onChange={this.handlecheckbox}
                                            name="API_Development_and_Integration"
                                            color="primary"
                                        />API Development and Integration</Paper>
                                </div>
                            </Card>
                        </Row>
                        <h2>4. Schedule a call with our tech expert. Get a detailed tech consultation for free!</h2>
                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>

                            <TextField id="website" label="Select a day" type="date" margin="normal" variant="outlined"
                                value={(this.state.date)} onChange={this.onChangedate} fullWidth={true} />
                        </Row>
<br/>
                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                            <div style={{ "display": "flex", "flexDirection": "row" }}>
                                <InputLabel htmlFor="age-native-simple" style={{ "minWidth": 120, }}>Timezone</InputLabel>
                                <Select
                                    native
                                    value={this.state.Timezone}
                                    onChange={this.onChangeSelect}
                                    inputProps={{
                                        name: 'Timezone',
                                        id: 'age-native-simple',
                                    }}
                                    style={{ "minWidth": 120, }}
                                >
                                    <option value={"est"}>EST</option>
                                    <option value={"mst"}>MST</option>
                                    <option value={"cst"}>CST</option>
                                    <option value={"pst"}>PST</option>
                                </Select>
                                <InputLabel htmlFor="age-native-simple" style={{ "minWidth": 120, }}>Schedule Meeting</InputLabel>
                                <Select
                                    native
                                    value={this.state.time}
                                    onChange={this.onChangeSelect}
                                    inputProps={{
                                        name: 'time',
                                        id: 'age-native-simple',
                                    }}
                                    style={{ "minWidth": 120, }}
                                >
                                    
                                    <option value={"06:00 AM - 07:00 AM"}>06:00 AM - 07:00 AM</option>
                                    <option value={"07:00 AM - 08:00 AM"}>07:00 AM - 08:00 AM</option>
                                    <option value={"08:00 AM - 09:00 AM"}>08:00 AM - 09:00 AM</option>
                                    <option value={"09:00 AM - 10:00 AM"}>09:00 AM - 10:00 AM</option>
                                    <option value={"11:00 AM - 12:00 PM"}>11:00 AM - 12:00 PM</option>
                                    <option value={"12:00 PM - 01:00 PM"}>12:00 PM - 01:00 PM</option>
                                    <option value={"01:00 PM - 02:00 PM"}>01:00 PM - 02:00 PM</option>
                                    <option value={"02:00 PM - 03:00 PM"}>02:00 PM - 03:00 PM</option>
                                    <option value={"03:00 PM - 04:00 PM"}>03:00 PM - 04:00 PM</option>
                                    <option value={"04:00 PM - 05:00 PM"}>04:00 PM - 05:00 PM</option>
                                    <option value={"05:00 PM - 06:00 PM"}>05:00 PM - 06:00 PM</option>
                                    <option value={"06:00 PM - 07:00 PM"}>06:00 PM - 07:00 PM</option>
                                    <option value={"07:00 PM - 08:00 PM"}>07:00 PM - 08:00 PM</option>
                                    <option value={"08:00 PM - 09:00 PM"}>08:00 PM - 09:00 PM</option>
                                    <option value={"09:00 PM - 10:00 PM"}>09:00 PM - 10:00 PM</option>
                                    <option value={"10:00 PM - 11:00 PM"}>10:00 PM - 11:00 PM</option>
                                    <option value={"11:00 PM - 12:00 AM"}>11:00 PM - 12:00 AM</option>
                                </Select>
                            </div>
                        </Row>
                        <br/><br/>
                        <Row style={{ "marginLeft": "100px", "marginRight": "100px" }}>
                        <Button variant="contained" size="large" color="primary" component="span" type="submit" onClick={this.handleClick}>
                           Submit</Button>
                        </Row>
                        <br/>
                    </div>
                </Card>
            </div>
        )
    }
}
