import React, { Component } from 'react';


class Dropdown extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown"  >
         <div className="button" onClick={this.showDropdownMenu} />

          { this.state.displayMenu ? (
          <ul className="dropdown_ul">
          <li className="dropdown_li"><a href="#pictures">PICTURES</a></li>
          <li className="dropdown_li"><a href="#reviews" >REVIEWS</a></li>
          <li className="dropdown_li"><a href="#contact">CONTACT</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;
