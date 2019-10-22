import React from 'react';

let InputField = (props) =>{
	const {labelName,type,name,value,placeholder,onChange} = props;
	return(
		<label> {labelName} : 
		 	<input 
				type={type} 
				name={name}
				value={value} 
				placeholder={placeholder}
				onChange={onChange}
				/>
		</label>
	)
}

export default InputField;