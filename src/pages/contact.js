import React from 'react'

import Layout from "../components/layout"

import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <Layout>
            <ul className="social-links">
                <li><a href="https://www.facebook.com/codingbeenz/"><FaFacebookSquare size={56} /></a></li>
                <li><a href="https://github.com/BeenzSyed"><FaGithubSquare size={56} /></a></li>
                <li><a href="https://www.instagram.com/codingbeenz/"><FaInstagram size={56}/></a></li>
                <li><a href="https://www.linkedin.com/in/sabeenzsyed/"><FaLinkedin size={56}/></a></li>
                <li><a href="https://twitter.com/CodingBeenz"><FaTwitterSquare size={56}/></a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage