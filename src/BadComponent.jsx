import React from 'react';



function BadComponent(props) {
    // нет условия, но при добавлении в APP.js текста , если условие true будет выводиться 1 вариант если false второй вариант
    
    return(
      <div>
        {props.something === 'первый текст' ? "первый текст" : "второй текст"}
      </div>
    );
  }

export default BadComponent;