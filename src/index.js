import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const teachers = [
{
	name: 'Daniel',
	img: 'imagen'
},
{
	name: 'Pedro',
	img: 'imagen'
},
{
	name: 'Jose',
	img: 'imagen'
},
{
	name: 'Gustavo',
	img: 'imagen'
},
]


// CLase del Curso Componente y propiedades

const Avatar = props => <img src={props.user.img} alt={props.user.name} />

const UserName = props => <p>{props.user.name}</p>

const User = props => {

	return (
		<div>

		<Avatar user={props.user} />

		<UserName user={props.user} />
		
		</div>

		)
};

const UsersList = props => {

	const userlist = props.list.map((user,i) => <User user={user} key={i} />);

	return (

	<div className="user-list">
	{userlist}
	</div>
	)

}





//ReactDOM.render(<UsersList list={teachers} />, document.getElementById('root'));


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
