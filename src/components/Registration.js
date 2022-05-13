import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-alert';

import '../Registration.css'
class App extends React.Component {
    render() {
      return (
        <main className="container">
          <Registration />
        </main>
      );
    }
  };

    
    class Registration extends React.Component {
        constructor(props) {
          super(props);
          this.state = { 
            username: '',
            lName:'',
            gName:'',
            mName:'',
            college:'',
            pEnroll:'',
            yLevel:'',
            password: '',
            confirmPassword: '',
            match: null,
            match2: null,
            numPattern:false,
            charNumberValid: false,
            specialCharValid: false,
            uppercaseValid: false,
            numberValid: false
          }
        }
        
        checkPasswordLength = (password) => {
          if (password.length >= 8) {
            this.setState({
              charNumberValid: true
            })
          } else {
            this.setState({
              charNumberValid: false
            })
          }
        }
        checkIdLength = (username) => {
            if (username.length == 10) {
              this.setState({
                IdNumberValid: true,
                match2: true
              })
            } else {
              this.setState({
                IdNumberValid: false,
                match2: false
              })
            }
          }
          checkUserPattern = (username) => {
            const pattern = /^(0|[1-9]\d*)(\.\d+)?$/;
              if (pattern.test(username)) {
              this.setState({
                numPattern: true
              }) 
            } else {
              this.setState({
                numPattern: false
              }) 
            }
          }
        
        checkSpecialCharacters = (password) => {
          const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
            if (pattern.test(password)) {
            this.setState({
              specialCharValid: true
            }) 
          } else {
            this.setState({
              specialCharValid: false
            }) 
          }
        }
        
        checkUppercase = (password) => {
          const pattern = /[A-Z]/;
          if (pattern.test(password)) {
            this.setState({
              uppercaseValid: true
            })
          } else {
            this.setState({
              uppercaseValid: false
            })
          }
        }
        
        checkNumber = (password) => {
          const pattern = /[0-9]/;
            if (pattern.test(password)) {
            this.setState({
              numberValid: true
            }) 
          } else {
            this.setState({
              numberValid: false
            })
          }
        }
        
        handleUsernameChange = (event) => {
          this.setState({
            username: event.target.value,
          })

          this.checkIdLength(event.target.value);
          this.checkUserPattern(event.target.value)
        }

        handleLNameChange = (event) => {
            this.setState({
              lName: event.target.value
            })
          }

          handleGNameChange = (event) => {
            this.setState({
              gName: event.target.value
            })
          }
          
          handleMNameChange = (event) => {
            this.setState({
              mName: event.target.value
            })
          }
          
          handleCollegeChange = (event) => {
            this.setState({
              college: event.target.value
            })
          }
          
          handlePEnrollChange = (event) => {
            this.setState({
              pEnroll: event.target.value
            })
          }
          
          handleYLevelChange = (event) => {
            this.setState({
              yLevel: event.target.value
            })
          }
          
          
        handlePasswordChange = (event) => {
          this.setState({
            password: event.target.value
          })
          
          this.checkPasswordLength(event.target.value);
          this.checkSpecialCharacters(event.target.value);
          this.checkUppercase(event.target.value);
          this.checkNumber(event.target.value);
        };
      
        handleConfirmPasswordChange = (event) => {
          this.setState({
            confirmPassword: event.target.value,
            match: null
          })
        };
      
        comparePassword = (event) => {
          if (this.state.password === this.state.confirmPassword) {
            this.setState({
              match: true
            })
          } else {
            this.setState({
              match: false
            })
          }
        }
        
        resetForm = () => {
          this.setState({
            username: '',
            password: '',
            confirmPassword: '',
            match: null
          })
          
          this.username.focus();
        }
       
        render() {
          return (
            <section className="account__container">
              <div className="input__container">
                <label className="input__label">Student ID</label>
                <input
                  className={`input${ this.state.match2 == true && this.state.numPattern == true ? '--success' : '--error'}`}
                  ref={(input) => { this.username = input; }} 
                  value={this.state.username}
                  onChange={(event) => this.handleUsernameChange(event)}
                />          
              </div>
              <div className="validator">
                    <i className={this.state.IdNumberValid && this.state.numPattern ? "fas fa-check success" : "fas fa-times error"}></i>
                    <p className="validation-item">should be 10 digits</p>
                  </div>
             
                  <div className="input__container">
          <label className="input__label">Last Name</label>
          <input
            className="input"
            ref={(input) => { this.lName = input; }} 
            value={this.state.lName}
            onChange={(event) => this.handleLNameChange(event)}
            required
          />          
        </div>

        <div className="input__container">
          <label className="input__label">Given Name</label>
          <input
            className="input"
            ref={(input) => { this.gName = input; }} 
            value={this.state.gName}
            onChange={(event) => this.handleGNameChange(event)}
            required
          />          
        </div>

        <div className="input__container">
          <label className="input__label">Middle Name</label>
          <input
            className="input"
            ref={(input) => { this.mName = input; }} 
            value={this.state.mName}
            onChange={(event) => this.handleMNameChange(event)}
            required
          />          
        </div>

        <div className="input__container">
          <label className="input__label">College</label>
          <input
            className="input"
            ref={(input) => { this.college = input; }} 
            value={this.state.college}
            onChange={(event) => this.handleCollegeChange(event)}
            required
          />          
        </div>

        <div className="input__container">
          <label className="input__label">Program Enrolled</label>
          <input
            className="input"
            ref={(input) => { this.pEnroll = input; }} 
            value={this.state.pEnroll}
            onChange={(event) => this.handlePEnrollChange(event)}
            required
          />          
        </div>

        <div className="input__container">
          <label className="input__label">Year Level</label>
          <input
            className="input"
            ref={(input) => { this.yLevel = input; }} 
            value={this.state.yLevel}
            onChange={(event) => this.handleYLevelChange(event)}
            required
          />          
        </div>

              <div className="password-container">
                <div className="password">
                  <div className="input__container">
                    <label className="input__label">Password</label>
                    <input 
                      className="input"
                      type="password"
                      value={this.state.password}
                      onChange={(event) => this.handlePasswordChange(event)}
                    />  
                  </div>
                  <div className="input__container">
                    <label 
                      className={`input__label ${this.state.match == false ? 'error-msg' : 'success-msg'}`}
                      >Confirm Password</label>
                    <input
                      className={`input${ this.state.match == true ? '--success':'--error' }`}
                      type="password"
                      value={this.state.confirmPassword}
                      onChange={(event) => this.handleConfirmPasswordChange(event)}
                      onBlur={this.comparePassword}
                    />
                  </div>
                </div>
                <div className="validation">
                  <div className="validator">
                    <i className={this.state.charNumberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                    <p className="validation-item">at least 6 characters</p>
                  </div>
                  <div className="validator">
                    <i className={this.state.specialCharValid ? "fas fa-check success" : "fas fa-times error"}></i>
                    <p className="validation-item">1 special character</p>
                  </div>
                  <div className="validator">
                    <i className={this.state.uppercaseValid ? "fas fa-check success" : "fas fa-times error"}></i>
                    <p className="validation-item">1 uppercase letter</p>
                  </div>
                  <div className="validator">
                    <i className={this.state.numberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                    <p className="validation-item">1 number</p>
                  </div>
                </div>
              </div>
              <div className="button__container">
                <button className="button--primary">Register</button>
                <button
                  className="button--secondary"
                  onClick={this.resetForm}
                >
                  Cancel
                </button>
              </div>
              <p className="block text-gray-700 text-sm font-bold mb-2"><Link to="/">Go to Login Page</Link></p>
            </section>
            
          );
        }
      };


export default Registration