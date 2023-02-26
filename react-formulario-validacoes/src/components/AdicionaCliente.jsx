import React from 'react';
import {Formik,useField} from 'formik'
import * as yup from 'yup';



//criando meu proprio componente campo 

const Campo = ({label, ...props}) =>{

  const [field, meta] = useField(props);

  return(
     <div className="form-group">
       <label htmlFor={props.id}>{label}</label>
       <input 
          {...field}
          {...props}
          className={meta.error && meta.touched ?'is-invalid':''}
        />
          { meta.error && meta.touched ? (<div className="invalid-feedback" >{meta.error}</div>):null } 

     </div>
  )
}






const AdicionaCliente = () => {

  const esquema = yup.object({
     nome: yup
         .string()
         .required('O nome é obrigatorio')
         .min(3,'O nome deve ter pelo menos 3 caracteres')
         .max(10,'O nome deve ter no maximo 10 caracteres'),
     email: yup
         .string()
         .required('O e-mail é obrigatório'),
     nascimento: yup
        .date()
        .required('A data de nascimento é obrigatoria')
        .max(new Date(), 'Você não pode ter nascido no futuro')
  })






  return (
    <>
      <h1>Cadastro de Clientes</h1>
    <Formik 
         initialValues={{nome: '' , email: '', nascimento: ''}}
         validationSchema={esquema}
         validate={(values)=>{
             const errors = {};

             if(!values.nome){
                errors.nome = 'O nome é obrigatorio !'
             }
             if(!values.email){
              errors.email = 'O e-mail é obrigatorio !'
             }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]{2,}$/i.test(values.email)){
               errors.email = 'O e-mal digitado é invalido !'
             }

             if(!values.nascimento){
              errors.nascimento = 'A data de nascimento obrigatoria !'
             }

             return errors;


         }}
         onSubmit={(values)=>{alert(JSON.stringify(values));}}
         >
      { 
      
      (props)=>(
                <form onSubmit={props.handleSubmit} noValidate >
                    <Campo id="nome"  name="nome"   type="text" label="Nome:"/>              
                    <Campo id="email"  name="email"  type="email" label="E-mail:"/>
                    <Campo  id="nascimento"   name="nascimento" type="date" label="Data de Nascimento:"/>           
                  <button type="submit">Adicionar</button>
                </form>
             )}
       </Formik>

    </>
  );
};

export default AdicionaCliente;
