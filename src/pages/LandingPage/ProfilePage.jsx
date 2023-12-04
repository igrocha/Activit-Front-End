import React, { useState } from 'react';

function ProfilePage({ records, onEdit, onDelete }) {
  const [editedData, setEditedData] = useState(null);

  const handleEditClick = (index) => {
    setEditedData({ ...records[index], index });
  };

  const handleCancelEdit = () => {
    setEditedData(null);
  };

  const handleSaveEdit = () => {
    if (!editedData) return;

    const { index, ...updatedData } = editedData;
    onEdit(index, updatedData);

    setEditedData(null);
  };

  return (
    <div style={profileContainerStyle}>
      <h1>Tela de Perfil</h1>
      <ul style={listStyle}>
        {records.map((record, index) => (
          <li key={index} style={recordStyle}>
            {editedData && editedData.index === index ? (
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={editedData.fullName}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      fullName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="cpf"
                  value={editedData.cpf}
                  onChange={(e) =>
                    setEditedData({ ...editedData, cpf: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="email"
                  value={editedData.email}
                  onChange={(e) =>
                    setEditedData({ ...editedData, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedData.phoneNumber}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      phoneNumber: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="password"
                  value={editedData.password}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      password: e.target.value,
                    })
                  }
                />
                <button onClick={handleSaveEdit}>Salvar</button>
                <button onClick={handleCancelEdit}>Cancelar</button>
              </div>
            ) : (
              <div>
                {record.fullName} - {record.cpf} - {record.email} -{' '}
                {record.phoneNumber} - {record.password}{' '}
                <button
                  onClick={() => handleEditClick(index)}
                  style={editButtonStyle}
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(index)}
                  style={deleteButtonStyle}
                >
                  Excluir
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const profileContainerStyle = {
  textAlign: 'center',
  margin: '20px auto',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const recordStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: '16px',
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const editButtonStyle = {
  marginRight: '5px',
  padding: '5px 10px',
  backgroundColor: '#28A745',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  padding: '5px 10px',
  backgroundColor: '#DC3545',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ProfilePage;
