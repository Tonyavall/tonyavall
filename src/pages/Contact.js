import Layout from '../components/layouts/Article'
import socials from '../lib/socials'
import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <Layout title="Contact">
            <div>
                <h3 className='text-2xl text-vs-teal ml-4 mt-4'>Socials</h3>
                <div className='flex flex-row flex-wrap justify-center items-center p-2 text-xl'>
                    {socials.map(({link, name, icon, relative = false})=> {
                        return (
                            relative ? 
                            <Link
                                to={link}
                                className='flex flex-row flex-wrap justify-center items-center p-2 text-xl mx-4'
                                key={name}
                            >
                                {icon}
                                <p className='ml-2'>
                                    {name}
                                </p>
                            </Link>
                            :
                            <a 
                                href={link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                key={name}
                                className='flex flex-row flex-wrap justify-center items-center p-2 text-xl mx-4'
                            >
                                {icon}
                                <p className='ml-2'>
                                    {name}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Contact;