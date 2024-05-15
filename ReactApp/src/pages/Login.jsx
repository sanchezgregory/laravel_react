import * as Yup from "yup"
import { Formik } from "formik"
import { Api } from "../service/Api"
import InputLabel from "../components/input/InputLabel"
import ButtonSubmit from "../components/button/ButtonSubmit"
import { Link } from "react-router-dom"

const Login = () => {

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup .object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
           .min(3, 'Too Short!')
           .max(50, 'Too Long!')
           .required('Required')
    })

    const onSubmit = (values) => {
    
        console.log(values)
        Api.post('/auth/login/', values).then((response) => {
            console.log(response)
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
                                    <InputLabel label="password" type="password" name="password" placeholder="Password here" error={errors.password} onChange={handleChange} value={values.password}/>
                                    <ButtonSubmit type="submit" name="Iniciar sesion"/>
                                    
                                    <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                        Not have an account?&nbsp;
                                        <Link to="/register" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-500">
                                             | Register
                                        </Link>
                                    </p>

                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login