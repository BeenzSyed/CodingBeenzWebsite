import React from 'react'

import Layout from "../components/layout"


const UsesPage = () => {
    return (
        <Layout>
            <ul className="uses-links">
                <li>Editor - <a href="https://code.visualstudio.com/">VSCode</a> with the Cobalt2 theme</li>
                <li>Termimal - <a href="https://hyper.is/">Hyper</a> with the Verminal theme</li>
                <li>Laptop - <a href="https://www.apple.com/macbook-pro">MacBook Pro 15" 2018</a></li>
                <li>Monitor - <a href="https://www.amazon.com/Dell-S2715H-27-Inch-LED-Lit-Monitor/dp/B00M9B3S0W?th=1">Dell 27"</a></li>
                <li>Notes - <a href="https://evernote.com/">Evernote</a></li>
                <li>Organization/Track to do's - <a href="https://trello.com">Trello</a></li>
            </ul>
        </Layout>
    )
}

export default UsesPage