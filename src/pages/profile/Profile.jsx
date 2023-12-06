import React, { useState } from 'react';

function ProfilePage({ userData, onDeleteData }) {
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSaveChanges = () => {
    localStorage.setItem('userData', JSON.stringify(editedData));
    setEditing(false);
    userData(editedData);
  };

  const containerStyle = {
    margin: '10px',
    textAlign:'center',

    flexDirection: 'column',
    padding: '20px',
    color: 'white',
    minHeight: '98vh',
    borderRadius: '20px',
    boxShadow: '0px 0px 7px 1px var(--azulclaroapp)',
    background:
      'linear-gradient(to right, var(--azulclaroapp), var(--azulescuroapp))',
  };

  const formInputStyle = {
    width: '7%',
    padding: '8px',
    margin: 'auto 10px 16px auto',
    borderRadius: '20px',
    border: '2px solid var(--azulclaroapp)',
    color: 'white',
    boxShadow: '0px 0px 7px 1px rgba(0, 111, 255, 1)',
    backgroundColor: 'transparent',
  };
  
  return (
    <div style={containerStyle}>
      <h1 style={{
          fontSize: '30px',
          color: 'white',
        }}>Perfil
      </h1>
      {editing ? (
        <div>
          <label>
            Name:
            <input
              style={formInputStyle}
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Username:
            <input
              style={formInputStyle}
              type="text"
              name="username"
              value={editedData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            CPF:
            <input
             style={formInputStyle}
              type="text"
              name="CPF"
              value={editedData.CPF}
              onChange={handleInputChange}
            />
          </label>
          <label
            >
            E-mail:
            <input
              style={formInputStyle}
              type="text"
              name="email"
              value={editedData.email}
              onChange={handleInputChange}
            />
          </label> 
          <button className="bg-[#006DFF] rounded-lg hover:bg-green-700 mx-4 text-white py-2 px-4 rounded mt-4" onClick={handleSaveChanges}>Salvar Alterações</button>
        </div>
      ) : (
        <div>
          <p>Name: {userData.name}</p>
          <p>Username: {userData.username}</p>
          <p>CPF: {userData.CPF}</p>
          <p>E-mail: {userData.email}</p>
          <p>Senha: {userData.password}</p>
        </div>
      )}
      <div>
      <button className="bg-[#006DFF] rounded-lg hover:bg-red-700 mx-4 text-white py-2 px-4 rounded mt-4" onClick={onDeleteData}>Excluir Dados</button>
      <button className="bg-[#006DFF] rounded-lg hover:bg-gray-700 mx-4 text-white py-2 px-4 rounded mt-4" onClick={handleEditToggle}>
        {editing ? 'Cancelar' : 'Editar'}
      </button>
      </div>
    </div>
  );
}

export default ProfilePage;
