import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';


class App extends Component {
  id =3;
  state = {
    information: [
      {
        id: 0,
        name: '테스트1',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '테스트2',
        phone: '010-0000-0001'
      },
      {
        id: 2,
        name: '테스3',
        phone: '010-0000-0002'
      }
    ],
    keyword:'',
  }

  handleChange = (e) => {
    this.setState({
        keyword : e.target.value
    })
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id :this.id++
      }),
    });
  }

  handelRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }
  
  handleUpdate = (id,data) => {
    const { information } = this.state;
    this.setState({
      information : information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      ),
    })
  }
  render() {
    return (
      <div>
        <PhoneForm
        onCreate = {this.handleCreate}
        />
      <input 
          name="name"
          onChange={this.handleChange}
          value={this.state.keyword}
          placeholder = "검색.."
          />
        <PhoneList 
        data= {this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )}
        onRemove={this.handelRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;