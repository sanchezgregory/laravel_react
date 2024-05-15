import { Formik, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import InputLabel from '../components/input/InputLabel.jsx'
import ButtonSubmit from '../components/button/ButtonSubmit.jsx'
import { Api } from '../service/Api.ts'

const Register = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string()
           .min(2, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
           .min(8, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Required'),
        password_confirmation: Yup.string()
           .oneOf([Yup.ref('password'), null], 'Passwords must match')
           .required('Required'),
    })

    const onSubmit = (values) => {
    
        console.log(values)
        Api.post('/auth/register/', values).then((response) => {
            console.log(response.data)
        });
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white roundfed-lg shadow dark:border md:mt-0 sm:max-w-md x1:p-0 dark:bg-gray-800">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-x1 font-bold leading-tight tracking-tight text-gray-900 md:text-2x1">
                            Sign up
                        </h1>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                            {({
                               values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit} className='space-y-5'>
                                    {/* {JSON.stringify(errors)} */}
                                    <InputLabel label="correo" type="email" name="email" placeholder="example@domain.com" error={errors.email} onChange={handleChange} value={values.email}/>
                                    <InputLabel label="nombre" name="name" placeholder="Your name here" error={errors.name} onChange={handleChange} value={values.name}/>
                                    <InputLabel label="password" type="password" name="password" placeholder="Password here" error={errors.password} onChange={handleChange} value={values.password}/>
                                    <InputLabel label="Confirm password" type="password" name="password_confirmation" placeholder="confirm password" error={errors.password_confirmation} onChange={handleChange} value={values.password_confirmation}/>
                                    <ButtonSubmit type="submit" name="Registrar"/>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register